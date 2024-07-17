import React, { useState, useEffect } from "react";
import AskUp from "./components/AskUp";
import AskDown from "./components/AskDown";
import { useNavigate, useLocation } from 'react-router-dom';
import { saveQuestion } from "./saveQuestions";
const Questions = () => {
  const userAbout = 'Hey, I am Kartikey, a BTech 3rd-year student at SRM. My exams just ended, and I topped my class. I am very happy and also interested in gaming. I recently started learning machine learning.';
  const [sentenceAnswer, setSentenceAnswer] = useState('');
const phone='8076940848';
  const [questionsData, setQuestionsData] = useState([]);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 615);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
      questionsData.push({ question, options, result: "" });
    }
    return questionsData;
  };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth <= 615);
//     };
  
//     const fetchQuestions = async () => {
//       try {
//         const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAbqRlxgoAU6OAZeuGxAHmDeszpmlUq81c', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             contents: [
//               {
//                 parts: [
//                   { text: `You are a mini sarcasm interviewer interviewing an Indian person named Kartikey.  Kartikey has just told you:[ +${userAbout} ] .First translate this into english and further  Your task is to generate FIVE (5) interview questions based on his statement. Each question must include TWO (2) answer choices that Kartikey could plausibly give. Use a sarcastic tone for the questions and options. Format your response EXTREMELY strictly as follows.  Do not deviate from this structure. Use parentheses and numbers for each question and option(1) Question 1?(1.1) Option 1(1.2) Option 2(2) Question 2?(2.1) Option 1(2.2) Option 2(3) Question 3? (3.1) Option 1(3.2) Option 2...and so on, up to question (5).Use ONLY plain text.  Do not use bold, italics, bullet points, or any other formatting. Do not provide any introductory or explanatory text. Begin immediately with question (1). And you must use one emoji per option and question and give question and options only max 15 words. STRICT INSTRCUTION:: GIVE ONLY PLAIN TEXT NOT ANY *WORD* ` }
//                 ]
//               }
//             ]
//           })
//         });
//         const data = await response.json();
//         const textContent = data.candidates[0].content.parts[0].text;
//         const parsedData = parseResponse(textContent);
//         setQuestionsData(parsedData);
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//       }
//     };
  
//     window.addEventListener("resize", handleResize);
//     fetchQuestions();
  
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
  

  const handleOptionClick = (option) => {
    const updatedQuestionsData = [...questionsData];
    updatedQuestionsData[currentQuestionIndex].result = option;
    setQuestionsData(updatedQuestionsData);
  
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // All questions answered
      const concatenatedAnswers = updatedQuestionsData.map((question, index) => {
        const questionNumber = index + 1;
        return `In question ${questionNumber}, the person choosed "${question.question}" and chosed "${question.result}".`;
      }).join(' ');
  
      // Update sentenceAnswer state
      setSentenceAnswer(concatenatedAnswers);
  
      // Log the concatenated string of sentences
      console.log(sentenceAnswer);
  saveQuestion(userAbout,sentenceAnswer,phone,);
      // Optionally alert or do any final actions
      alert("Finished! Results: " + JSON.stringify(updatedQuestionsData, null, 2));
    }
  };
  

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div>
      {isMobileView ? (
        <>
          <div style={{ width: "100vw", height: "100vh" }}>
            <div style={{ height: "50vh", backgroundColor: "pink", padding: 0, width: "100%" }}>
              <div style={{ height: "100%", width: "100%", backgroundColor: "#385aed", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <AskUp
                  text={currentQuestion ? currentQuestion.question : ""}
                  thinkingBoxImage="https://i.ibb.co/r3rxTt4/1.png"
                  mascotImage="thinking"
                  mood="thinking"
                />
              </div>
            </div>
            <div style={{ height: "50vh", backgroundColor: "green", padding: 0 }}>
              <div style={{ height: "100%", width: "100%", backgroundColor: "red", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {currentQuestion && (
                  <AskDown
                    option1={currentQuestion.options[0]}
                    option2={currentQuestion.options[1]}
                    onOptionClick={handleOptionClick}
                  />
                )}
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
