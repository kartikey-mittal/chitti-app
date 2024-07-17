import React, { useState, useEffect } from "react";
import AskUp from "./components/AskUp";
import AskDown from "./components/AskDown";

const response = "(1) So, you came first in your class, huh? Did you maybe, I don't know, actually study? 🤔 \n(1.1)  Of course, I studied 😂\n(1.2)  I'm a natural genius 🧠\n\n(2)  SRM, eh?  Is that where they hand out degrees for showing up?  😜\n(2.1)  It's a prestigious institution 🏢\n(2.2)  It's a good college 😅\n\n(3)  Machine learning, huh?  So you want to become a robot overlord?  🤖\n(3.1)  It's the future of technology 💻\n(3.2)  I'm just curious about it 🤔\n\n(4)  Gaming, huh?  Are you planning on becoming a professional gamer, or just a couch potato? 🥔\n(4.1)  I'm pretty good at games 🎮\n(4.2)  It's a hobby 😎\n\n(5)  Exams just finished, huh?  So you're finally free to get your life together?  😩\n(5.1)  I'm going to relax and enjoy myself 🍹\n(5.2)  I'll be busy with my studies and other activities 📚\n";

const parseResponse = (response) => {
  const questionsData = [];
  const questionRegex = /\(\d+\) ([\s\S]+?)(?=\(\d+\) |$)/g;

  let questionMatch;
  while ((questionMatch = questionRegex.exec(response)) !== null) {
    const questionBlock = questionMatch[0];
    const questionTextMatch = questionBlock.match(/\(\d+\) ([\s\S]+?)(?=\(\d+\.\d+\))/);
    const question = questionTextMatch ? questionTextMatch[1].trim() : "";

    const options = [];
    const optionRegex = /\(\d+\.\d+\) ([\s\S]+?)(?=\(\d+\.\d+\)|$)/g;
    let optionMatch;
    while ((optionMatch = optionRegex.exec(questionBlock)) !== null) {
      const option = optionMatch[1].trim();
      options.push(option);
    }

    questionsData.push({
      question,
      options,
      result: "",
    });
  }

  return questionsData;
};

const Questions = () => {
  const questionsData = parseResponse(response);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState({});

  const handleOptionClick = (option) => {
    setResults((prevResults) => ({
      ...prevResults,
      [currentQuestionIndex]: option,
    }));

    questionsData[currentQuestionIndex].result = option;

    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // All questions answered
      alert("Finished! Results: " + JSON.stringify(questionsData, null, 2));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 615);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div>
      {isMobileView ? (
        <>
          <div style={{ width: "100vw", height: "100vh" }}>
            <div
              style={{
                height: "50vh",
                backgroundColor: "pink",
                padding: 0,
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "#385aed",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AskUp
                  text={currentQuestion.question}
                  thinkingBoxImage="https://i.ibb.co/r3rxTt4/1.png"
                  mascotImage="thinking"
                  mood="thinking"
                />
              </div>
            </div>
            <div
              style={{ height: "50vh", backgroundColor: "green", padding: 0 }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AskDown
                  option1={currentQuestion.options[0]}
                  option2={currentQuestion.options[1]}
                  onOptionClick={handleOptionClick}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        "desktop"
      )}
    </div>
  );
};

export default Questions;
