import React, { createContext, useState, useContext } from 'react';


const MeetingContext = createContext({
  numberOfPeople: 0,
  setNumberOfPeople: () => {},
  esportsNumberOfPeople: 0,
  setEsportsNumberOfPeople: () => {},
  musicNumberOfPeople: 0,
  setMusicNumberOfPeople: () => {},
});


export const MeetingProvider = ({ children }) => {
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [esportsNumberOfPeople, setEsportsNumberOfPeople] = useState(0);
  const [musicNumberOfPeople, setMusicNumberOfPeople] = useState(0);

  return (
    <MeetingContext.Provider value={{ numberOfPeople, setNumberOfPeople, esportsNumberOfPeople, setEsportsNumberOfPeople, musicNumberOfPeople, setMusicNumberOfPeople }}>
      {children}
    </MeetingContext.Provider>
  );
};


export const useMeeting = () => useContext(MeetingContext);
