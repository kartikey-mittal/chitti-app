import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import ripple2 from './../../assets/ripple.json';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from "react-router-dom";

const AboutDown = () => {
  const lottieRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();
  const navigate = useNavigate();
  const handleClick = () => {
    if (isPaused) {
      startListening();
      lottieRef.current.play();
    } else {
      stopListening();
      lottieRef.current.pause();
    }
    setIsPaused(!isPaused);
    setIsClicked(!isClicked);
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
setSpokenText(transcript);
    resetTranscript();
    if (transcript.trim() !== '') {
      alert(`You said: ${transcript}`);
      
    //   localStorage.setItem('userAbout',transcript)
   
      navigate(`/q`, { state: { transcript } });
    } else {
      alert('No speech detected.');
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div onClick={handleClick} style={{ cursor: 'pointer', textAlign: 'center', backgroundColor: 'white', width: '22rem', height: '20rem', position: 'relative' }}>
        <Lottie
          animationData={ripple2}
          lottieRef={lottieRef}
          loop={true}
          autoplay={false}
          style={{ width: '100%', height: '100%' }}
        />
        {isClicked && (
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '0.5rem', fontSize: '0.8rem', fontFamily: 'Arial', color: '#333', textAlign: 'left' }}>
            {transcript}
          </div>
        )}
        <div style={{ fontSize: isClicked ? '1.1rem' : '1.1rem', color: isClicked ? 'blue' : '#24252a', position: 'relative', fontFamily: 'ACB', letterSpacing: 1.5 }}>
          {isClicked ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '5rem', color: '#24252a', fontSize: '0.5rem' }}>
              <video
                src="https://firebasestorage.googleapis.com/v0/b/kabadi-scrapper.appspot.com/o/images%2Fezgif-1-1c5373c76f.mp4?alt=media&token=c3940a49-ca16-498d-8e72-54015d89d299"
                autoPlay
                loop
                muted
                style={{ width: '5rem', height: 'auto' }}
              />
            </div>
          ) : (
            'START SPEAKING'
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutDown;
