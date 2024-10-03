import React, { useState, useEffect, useRef } from 'react';
import './Quiz.css'
import Nav from '../components/Nav.jsx';
import Top from '../components/Top.jsx';


const Quiz = ({ values }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const answerButtonsRef = useRef(null);

    const Que = document.getElementById("question");
    const AnsBtn = document.getElementById("answer-buttons");
    const Intro = document.getElementById('intro');
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const playBtn = document.getElementById('play-btn');

    useEffect(() => {
        // Fetch questions or set them directly if they're already defined
        setQuestions(values);
    }, []);

    let result = ``;

    const startQuiz = () => {
        setCurrentQuestionIndex(1);
        setScore(0);

        if (Que) {
            Que.style.display = 'block';
        }
        if (AnsBtn) {
            AnsBtn.style.display = 'block';
        }
        if (Intro) {
            Intro.style.display = 'none';
        }
        if (startBtn) {
            startBtn.style.display = 'none';
        }
        if (nextBtn) {
            nextBtn.style.display = 'none';
        }
        if (playBtn) {
            playBtn.style.display = 'none';
        }

        showQuestion();
    };

    const showQuestion = () => {
        if (!questions.length) return;

        const currentQuestion = questions[currentQuestionIndex];
        const answerButtons = answerButtonsRef.current;

        Que.innerText = currentQuestion.question;

        answerButtons.innerHTML = '';

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            answerButtons.appendChild(button);

            if (answer.correct) {
                result = answer.text;
            }

            button.addEventListener('click', () => handleAnswerClick(answer));
        });
    };

    const handleAnswerClick = (answer) => {
        const isCorrect = answer.correct;
        if (isCorrect) {
            setScore(score + 1);
        }

        const answerButtons = answerButtonsRef.current;
        answerButtons.querySelectorAll('button').forEach((button) => {
            button.disabled = true;
            button.style.backgroundColor = 'Black';
            button.style.color = 'White';
            if (button.textContent === result) {
                button.style.backgroundColor = 'Green';
            } else if (button.textContent === answer.text && !isCorrect) {
                button.style.backgroundColor = 'Red';
            }
        });

        const nextBtn = document.getElementById('next-btn');
        nextBtn.style.display = 'block';
        // Ans.innerText = `Correct Answer: ${result}`;
        // Ans.style.display = 'block';
    };

    const showScore = () => {
        Que.textContent = `You scored ${score} out of ${questions.length}!`;

        Que.style.display = 'block';
        AnsBtn.style.display = 'none';
        // Ans.style.display = 'none';
        Intro.style.display = 'none';
        startBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        playBtn.style.display = 'block';
    };

    const handlenextBtn = () => {
        // Ans.innerText = ``;

        setCurrentQuestionIndex(currentQuestionIndex + 1);
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    };

    // useEffect(() => {
    //     if (questions.length) {
    //         showQuestion(); // Show the first question on mount
    //     }
    // }, [questions]);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <Nav></Nav>
            <div className="quiz-app">
                <div className="quiz">
                    <h1>Quiz</h1>
                    <h2 id="question"></h2>
                    <div id="answer-buttons" ref={answerButtonsRef} />
                    {/* <h2 id="answer"></h2> */}
                    <div id="intro">
                        <p>Are you ready to test your knowledge?</p>
                        <button id="start-btn" className="btn" onClick={startQuiz}>Get Started</button>
                    </div>
                    <button id="next-btn" className="btn" onClick={handlenextBtn}>Next</button>
                    <button id="play-btn" className="btn" onClick={refreshPage}>Play Again</button>
                </div>
            </div>
            <Top></Top>
        </>
    );

};

export default Quiz;