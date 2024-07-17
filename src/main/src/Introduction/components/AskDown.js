import React, { useState } from 'react';

function AskDown({ option1, option2, onOptionClick }) {
  const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g; // Regex to detect emojis

  const [clickedButton, setClickedButton] = useState(null);

  const extractEmoji = (text) => {
    const emojis = text.match(emojiRegex);
    return emojis ? emojis[0] : '';
  };

  const removeEmoji = (text) => {
    return text.replace(emojiRegex, '');
  };

  const buttonStyle = (button) => ({
    cursor: 'pointer',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.rem',
    fontSize: '1.125em',
    fontWeight: '800',
    letterSpacing: '0.5px',
    color: '#fff',
    fontFamily: 'ACR',
    background:
      button === 'yes'
        ? 'linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)'
        : 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
    border: '2px solid #000',
    borderRadius: '0.75rem',
    boxShadow: '0 8px 0 #000',
    transform: button === clickedButton ? 'skew(-10deg) scale(0.9)' : 'skew(-5deg)',
    transition: 'all 0.1s ease',
    filter: 'drop-shadow(0 15px 20px rgba(100, 77, 255, 0.39))',
    marginTop: '2rem',
    width: '95%',
  });

  const emojiStyle = {
    fontSize: '1.5em',
  };

  const componentStyle = {
    height: '100%',
    width: '100%',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'ACR',
  };

  const handleClick = (option) => {
    setClickedButton(option);
    onOptionClick(removeEmoji(option));
    setTimeout(() => setClickedButton(null), 100); // Reset the button after 100ms
  };

  return (
    <div style={componentStyle}>
      <button style={buttonStyle('yes')} onClick={() => handleClick(option1)}>
        {removeEmoji(option1)} <span style={emojiStyle}>{extractEmoji(option1)}</span>
      </button>
      <button style={buttonStyle('no')} onClick={() => handleClick(option2)}>
        {removeEmoji(option2)} <span style={emojiStyle}>{extractEmoji(option2)}</span>
      </button>
    </div>
  );
}

export default AskDown;
