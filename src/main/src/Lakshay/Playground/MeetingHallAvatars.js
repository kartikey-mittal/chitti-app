

import React from 'react';

const MeetingHallAvatars = ({ numberOfPeople }) => {
  
  const avatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=b042581f4e29026024d",
    "https://i.pravatar.cc/150?u=c042581f4e29026024d",
    "https://i.pravatar.cc/150?u=d042581f4e29026024d",
    "https://i.pravatar.cc/150?u=e042581f4e29026024d",
    "https://i.pravatar.cc/150?u=f042581f4e29026024d",
  ];

  return (
    <div className="meetinghall" style={{
      width: '300px', 
      height: '220px',
      position: 'relative', 
      top: '34rem',
      left: '.5rem',
      backgroundImage: "url('https://i.postimg.cc/zfjfrnHP/IMG-20240729-000045-700.png')",
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
    }}>
      {avatars.map((src, index) => {
        let style = {
          position: 'absolute',
          opacity: index < numberOfPeople ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        };

        // Determine position for each avatar
        if (index === 0) {
          style = { ...style, top: '50%', left: '15%', transform: 'translate(-50%, -50%)' };
        } else if (index === 1) {
          style = { ...style, top: '50%', right: '25%', transform: 'translate(50%, -50%)' };
        } else if (index === 2) {
          style = { ...style, top: '10%', left: '35%', transform: 'translate(-50%, 0%)' };
        } else if (index === 3) {
          style = { ...style, top: '10%', right: '45%', transform: 'translate(50%, 0%)' };
        } else if (index === 4) {
          style = { ...style, bottom: '10%', left: '35%', transform: 'translate(-50%, 0%)' };
        } else if (index === 5) {
          style = { ...style, bottom: '10%', right: '45%', transform: 'translate(50%, 0%)' };
        }

        return (
          <p key={index} style={style}>
            <img style={{
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              border: '3px solid #fff',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)'
            }} src={src} alt={`Avatar ${index}`} />
          </p>
        );
      })}
    </div>
  );
};

export default MeetingHallAvatars;
