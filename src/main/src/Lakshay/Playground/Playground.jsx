import React from 'react';
import MeetingHallAvatars from './MeetingHallAvatars';
import { useMeeting } from './MeetingContext';

const Playground = () => {
  const { numberOfPeople, setNumberOfPeople, esportsNumberOfPeople, setEsportsNumberOfPeople, musicNumberOfPeople, setMusicNumberOfPeople } = useMeeting();

  const handleMeetingHallClick = () => {
    setNumberOfPeople(prev => Math.min(prev + 1, 6));
  };

  const handleEsportsClick = () => {
    setEsportsNumberOfPeople(prev => Math.min(prev + 1, 1000));
  };

  const handleMusicClick = () => {
    setMusicNumberOfPeople(prev => Math.min(prev + 1, 1000));
  };

  //  avatars for esports
  const esportsAvatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=b042581f4e29026024d",
    "https://i.pravatar.cc/150?u=c042581f4e29026024d",
    "https://i.pravatar.cc/150?u=d042581f4e29026024d",
    "https://i.pravatar.cc/150?u=e042581f4e29026024d"
  ];

  // avatars for music
  const musicAvatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=b042581f4e29026024d",
    "https://i.pravatar.cc/150?u=c042581f4e29026024d",
    "https://i.pravatar.cc/150?u=d042581f4e29026024d",
    "https://i.pravatar.cc/150?u=e042581f4e29026024d"
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundImage: "url('https://i.postimg.cc/HnPcCbRC/IMG-20240729-000409-249.png')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
      {/* meeting hall */}
      <div 
        className="meetinghall" 
       
        onClick={handleMeetingHallClick}
      >
        <MeetingHallAvatars numberOfPeople={numberOfPeople} />
      </div>

      {/* esports */}
      <div 
        className="esport" 
        style={{
          width: '220px', 
          height: '220px',
          position: 'relative', 
          top: '2rem',
          left: '1rem',
          backgroundImage: "url('https://i.postimg.cc/vm9hFdJC/IMG-20240729-000045-296.png')",
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          cursor: 'pointer'
        }}
        onClick={handleEsportsClick}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {Array.from({ length: 5 }).map((_, index) => {
            const isVisible = index < esportsNumberOfPeople;
            return (
              <p key={index} style={{
                position: 'absolute',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                bottom: index < 2 ? '18%' : '39%',
                right: index % 2 === 0 ? '55%' : '75%',
                transform: 'translate(50%, 0%)'
              }}>
                <img style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  border: '3px solid #fff',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                }} src={esportsAvatars[index]} alt={`Avatar ${index}`} />
              </p>
            );
          })}
        </div>
        <p className='stream' style={{
          fontSize: 'large',
          fontWeight: 'bold',
          color: 'red',
          position: 'absolute',
          bottom: '59%',
          right: '20%'
        }}>
          {esportsNumberOfPeople} <span>STREAMING</span>
        </p>
      </div>

      {/* music */}
      <div 
        className="music" 
        style={{
          width: '200px', 
          height: '200px',
          position: 'relative', 
          bottom: '23.5rem',
          left: '11rem',
          backgroundImage: "url('https://i.postimg.cc/NjYt3g2r/IMG-20240729-000045-766.png')",
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          cursor: 'pointer'
        }}
        onClick={handleMusicClick}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {Array.from({ length: 5 }).map((_, index) => {
            const isVisible = index < musicNumberOfPeople;
            return (
              <p key={index} style={{
                position: 'absolute',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
                bottom: index === 0 ? '18%' : index === 1 ? '27%' : index === 2 ? '39%' : '30%',
                right: index === 0 ? '35%' : index === 1 ? '25%' : index === 2 ? '25%' : '45%',
                transform: 'translate(50%, 0%)'
              }}>
                <img style={{
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  objectFit: 'cover',
                  border: '3px solid #fff',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                }} src={musicAvatars[index]} alt={`Avatar ${index}`} />
              </p>
            );
          })}
        </div>
        <p className='stream' style={{
          fontSize: 'large',
          fontWeight: 'bold',
          color: 'purple',
          position: 'absolute',
          bottom: '57%',
          right: '26%'
        }}>
          {musicNumberOfPeople} <span>STREAMING</span>
        </p>
      </div>
    </div>
  );
};

export default Playground;
