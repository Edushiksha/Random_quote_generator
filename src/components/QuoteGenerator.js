import { useState } from 'react';
import getRandomQuote from '../data/quotes';
import QuoteDisplay from './QuoteDisplay';

import { RiFileCopyLine } from 'react-icons/ri';
import { FaQuoteLeft, FaQuoteRight, FaTwitter, FaInstagram } from 'react-icons/fa';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  const generateRandomQuote = () => {
    const randomQuote = getRandomQuote();
    setQuote(randomQuote);
  };

  const Button = ({ children, onClick }) => (
    <button className="generate-button" onClick={onClick}>
      {children}
    </button>
  );

  const copyToClipboard = () => {
    const quoteText = `${quote.text} - ${quote.author}`;
    navigator.clipboard.writeText(quoteText);
  };

  const shareOnInstagram = () => {
    const textToShare = `"${quote.text}" - ${quote.author}`;
    // Construct the URL for sharing on Instagram
    const instagramUrl = `https://www.instagram.com/?text=${encodeURIComponent(textToShare)}`;
    window.open(instagramUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const textToShare = `"${quote.text}" - ${quote.author}`;
    // Construct the URL for sharing on Twitter
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(textToShare)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="quote-generator">
      <div className="card">
        <h1 className="title">Random Quote Generator</h1>
        <div className="quote-wrapper">
          <FaQuoteLeft className="quote-icon-left" />
          <QuoteDisplay quote={quote} />
          <FaQuoteRight className="quote-icon-right" />
        </div>
        <div className="quote-actions">
          <button className="action-button" onClick={copyToClipboard}>
            <RiFileCopyLine /> Copy
          </button>
          <button className="action-button" onClick={shareOnInstagram}>
            <FaInstagram /> Share on Instagram
          </button>
          <button className="action-button" onClick={shareOnTwitter}>
            <FaTwitter /> Share on Twitter
          </button>
          <Button onClick={generateRandomQuote}>Generate Quote</Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
