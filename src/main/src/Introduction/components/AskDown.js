import React, { useState } from 'react';

function AskDown({ option1, option2, onOptionClick }) {
  const Emoji1 = '😅';
  const Emoji2 = '😌';

  const [clickedButton, setClickedButton] = useState(null);

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
    background: button === 'yes' ? 'linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)' : 'linear-gradient(to top, #4481eb 0%, #04befe 100%)',
    border: '2px solid #000',
    borderRadius: '0.75rem',
    boxShadow: '0 8px 0 #000',
    transform: button === clickedButton ? 'skew(-10deg) scale(0.9)' : 'skew(-5deg)',
    transition: 'all 0.1s ease',
    filter: 'drop-shadow(0 15px 20px rgba(100, 77, 255, 0.39))',
    marginTop: '2rem',
    width:"95%"
  });

  const emojiStyle = {
    fontSize: '1.5em'
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
    // backgroundImage: 'url("https://img.freepik.com/free-vector/pastel-gradient-blur-soft-peach-background-vector_53876-171596.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721174400&semt=ais_user")', backgroundSize: 'cover', 
  };

  const handleClick = (option) => {
    setClickedButton(option);
    onOptionClick(option);
    setTimeout(() => setClickedButton(null), 100); // Reset the button after 100ms
  };

  return (
    <div style={componentStyle}>
      <button
        style={buttonStyle('yes')}
        onClick={() => handleClick(option1)}
      >
        {option1} <span style={emojiStyle}>{Emoji1}</span>
      </button>
      <button
        style={buttonStyle('no')}
        onClick={() => handleClick(option2)}
      >
        {option2} <span style={emojiStyle}>{Emoji2}</span>
      </button>
    </div>
  );
}

export default AskDown;
