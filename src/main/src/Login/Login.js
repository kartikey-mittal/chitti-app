import React, { useState, useEffect } from "react";
import { db } from "./../firebase"; // Assuming you have exported Firestore functions as `db` from firebase.js
import { collection, addDoc, query, where, getDocs, doc, setDoc  } from "firebase/firestore";

const Login = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);
  const [step, setStep] = useState(1); // Step 1 for phone number, Step 2 for name
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const buttonStyle = (button) => ({
    cursor: 'pointer',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.rem',
    fontSize: '1.125em',
    alignSelf: 'center',
    letterSpacing: '0.5px',
    color: '#fff',
    fontFamily: 'ACB',
    background: button === 'yes' ? 'linear-gradient(45deg, #6c5ce7, #4c3f7d)' : 'linear-gradient(45deg, #ff6b6b, #ff99cc)',
    border: '2px solid #4836bb',
    borderRadius: '0.75rem',
    boxShadow: '0 8px 0 #4836bb',
    transform: button === 'yes' ? 'skew(-10deg) scale(0.9)' : 'skew(-10deg)',
    transition: 'all 0.1s ease',
    filter: 'drop-shadow(0 15px 20px rgba(100, 77, 255, 0.39))',
    marginTop: '2rem', // Space between the buttons
    width: '50%',
  });

  const handleClick = async () => {
    if (step === 1 && phoneNumber.trim() !== '') {
    
        try {
           
            const querySnapshot = await getDocs(collection(db, "users"));
            const phoneNumbers = querySnapshot.docs.map((doc) => doc.id);
      
            if (phoneNumbers.includes(phoneNumber)) {
                setModalMessage("Phone number already exists. Please use another number.");
                setIsModalVisible(true);
        
       
            } else {
             alert('great')
             setStep(2)
            }
          } catch (error) {
            console.error("Error checking phone number: ", error);
            alert("Error checking phone number. Please try again later.");
          }

      
    } else if (step === 2 && userName.trim() !== '') {
      // Add phone number and name to Firestore
     
      alert(`Phone Number: ${phoneNumber}, Name: ${userName}`);
      localStorage.setItem('userName', userName); 
      localStorage.setItem('userPhone', phoneNumber); 
    } else {
        setModalMessage("Kindly fill all details first");
        setIsModalVisible(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 615);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? (
        <>
          <div style={{ height: "60vh", backgroundColor: "#385aeb", padding: 0, position: 'relative' }}>
            {/* Animation with an Image */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'bounce 2s infinite alternate',
              backgroundColor: 'transparent', // Example animation
              animationName: 'bounce', // Add animation name here
              animationDuration: '2s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              width: '80%'
            }}>
              <img src="https://i.postimg.cc/Cx62QGpT/Untitled-design-5.png" alt="Robot Mascot" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <div style={{ height: "40vh", backgroundColor: "#385aeb", padding: '1rem', flexDirection: 'column', display: 'flex' }}>
            <span style={{ fontFamily: 'ACB', color: 'white', fontSize: "1.2rem" }}>{step === 1 ? 'your phone no?' : 'your name?'}</span>
            <input
              type={step === 1 ? "tel" : "text"}
              value={step === 1 ? phoneNumber : userName}
              onChange={e => step === 1 ? setPhoneNumber(e.target.value) : setUserName(e.target.value)}
              style={{
                width: '100%',
                borderRadius: '1rem',
                border: '0.3rem solid #000',
                padding: '0.7rem',
                fontFamily: 'ACB',
                backgroundColor: "#fff",
                fontSize: "1.3rem",
                marginRight: '10px', marginTop: '0.3rem'
              }}
            />
            <button
              style={buttonStyle(step === 2 ? 'yes' : 'no')}
              onClick={handleClick}
            >
              {step === 1 ? 'go' : 'submit'}
            </button>
            {isModalVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',margin:'1.0rem'
          }}>
            <h2 style={{ fontFamily: 'ACB' }}>{modalMessage}</h2>
            <button
              style={{
                backgroundColor: '#385aeb',
                color: '#ffffff',
                border: 'none',
                padding: '0.5rem 2rem',
                borderRadius: '10px',
                fontSize: '1rem',
                fontFamily: 'PR',
                cursor: 'pointer'
              }}
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
          </div>
        </>
      ) : (
        "desktop"
      )}

    </div>
  );
};

export default Login;
