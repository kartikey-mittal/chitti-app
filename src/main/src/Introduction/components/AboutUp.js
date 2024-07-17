import React from 'react';
import { useMediaQuery } from 'react-responsive';

const AboutUp = ({ text, thinkingBoxImage, mascotImage, mood }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust breakpoint as needed


    let selectedMascotImage;
    switch (mood) {
        case 'happy':
            selectedMascotImage = "https://i.ibb.co/JzF4r16/2.png";
            break;
        case 'joy':
            selectedMascotImage = "https://i.ibb.co/CWFwmjs/3.png";
            break;
        case 'thinking':
            selectedMascotImage = "https://i.ibb.co/D8V0JNQ/4.png";
            break;
        default:
            selectedMascotImage = "https://i.ibb.co/JzF4r16/2.png";
    }

    return (
        <div className="outer-container" style={{
        
          
        }}>
           
           <div className='think-box' style={{
                position: 'absolute',
                top: isMobile ? '0rem' : '1rem', // Adjust top value for mobile
                right: '5rem',
                zIndex: 1,
                width: isMobile ? '60%' : '16rem', // Make width responsive
                height: `${isMobile ? '30vh' : '25vh'}`,// Adjust height for mobile
                // backgroundImage: 'url(' + thinkingBoxImage + ')',
                backgroundSize: 'cover',
                borderRadius: '0%',
                // backgroundColor:'green'
              
            }}> 
            <img src="https://i.ibb.co/r3rxTt4/1.png"  style={{maxWidth: '40vh', maxHeight: 'auto'}}alt="" />
               <div style={{
                    position: 'absolute',
                    top: '40%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    fontSize: '16px', 
                    textAlign: 'center', 
                    padding: isMobile ? '5px' : '10px', // Adjust padding for mobile
                    lineHeight: '1.2', 
                    color: 'black', 
                    overflowWrap: 'break-word', 
                    fontFamily:'PR',
                    width:'80%',
                  
                }}>
                   {text}
                </div> 
              
            </div>
           
            <div style={{
    position: 'absolute',
    bottom: `${isMobile ? '50vh' : '25vh'}`, // Adjust these values based on your design
    left: isMobile ? '-2rem' : '0rem', 
    borderRadius: '0%', // Removed background properties
    width: isMobile ? '18rem' : '19rem', // Adjust width for mobile
    height: isMobile ? '9rem' : '19rem', // Adjust height for mobile
}}>
    <img src={selectedMascotImage} alt="Selected Mascot" style={{maxWidth: '25vh', maxHeight: 'auto'}} />
</div>



        </div>
    );
}

export default AboutUp;
