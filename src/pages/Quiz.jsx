import React, { useState, useEffect, useRef } from 'react';
import './Quiz.css'
import Nav from '../components/Nav.jsx';
import Top from '../components/Top.jsx';


const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const answerButtonsRef = useRef(null);

    useEffect(() => {
        // Fetch questions or set them directly if they're already defined
        setQuestions([
            {
                question: "What is the main goal of SDG 13?",
                answers: [
                    { text: "Reduce poverty", correct: false },
                    { text: "Ensure quality education", correct: false },
                    { text: "Combat climate change", correct: true },
                    { text: "Promote gender equality", correct: false },
                ]
            },
            {
                question: "What is the ultimate goal of SDG 13: Climate Action?",
                answers: [
                    { text: "To prevent climate change", correct: false },
                    { text: "To adapt to climate change", correct: false },
                    { text: "To mitigate climate change", correct: false },
                    { text: "All of the above ", correct: true },
                ]
            },
            {
                question: "Which greenhouse gas is primarily responsible for global warming?",
                answers: [
                    { text: "Oxygen", correct: false },
                    { text: "Nitrogen", correct: false },
                    { text: "Carbon dioxide", correct: true },
                    { text: "Hydrogen", correct: false }
                ]
            },
            {
                question: "What is the primary cause of climate change?",
                answers: [
                    { text: "Natural variations in Earth's climate", correct: false },
                    { text: "Human activities", correct: true },
                    { text: "Volcanic eruptions", correct: false },
                    { text: "Solar flares", correct: false }
                ]
            },
            {
                question: "Which of the following is a major consequence of climate change?",
                answers: [
                    { text: "Rising sea levels", correct: true },
                    { text: "Decreasing temperatures", correct: false },
                    { text: "Less frequent extreme weather events", correct: false },
                    { text: "Reduced biodiversity", correct: false }
                ]
            },
            //5
            {
                question: "What is the most significant impact of climate change on agriculture?",
                answers: [
                    { text: "Increased crop yields", correct: false },
                    { text: "Decreased water availability", correct: true },
                    { text: "More predictable weather patterns", correct: false },
                    { text: "Reduced pest infestations", correct: false }
                ]
            },
            {
                question: "How does climate change affect human health?",
                answers: [
                    { text: "Increased risk of heat-related illnesses", correct: true },
                    { text: "Decreased risk of infectious diseases", correct: false },
                    { text: "Improved air quality", correct: false },
                    { text: "Reduced allergies", correct: false }
                ]
            },
            {
                question: "How does climate change affect sea levels?",
                answers: [
                    { text: "Causes sea levels to rise", correct: true },
                    { text: "Causes sea levels to fall", correct: false },
                    { text: "Has no effect on sea levels", correct: false },
                    { text: "Causes sea levels to fluctuate unpredictably", correct: false }
                ]
            },
            {
                question: "What is the most significant impact of climate change on Earth's oceans?",
                answers: [
                    { text: "Increased salinity", correct: false },
                    { text: "Decreased temperature", correct: false },
                    { text: "Rising sea levels", correct: true },
                    { text: "Reduced biodiversity", correct: false }
                ]
            },
            {
                question: "Which of the following is a potential consequence of climate change?",
                answers: [
                    { text: "Increased extreme weather events", correct: false },
                    { text: "Food shortages", correct: false },
                    { text: "Displacement of people", correct: false },
                    { text: "All of the above", correct: true },
                ]
            },
            //10
            {
                question: "Which of the following is a consequence of climate change?",
                answers: [
                    { text: "Rising sea levels", correct: false },
                    { text: "More frequent and intense storms", correct: false },
                    { text: "Changes in precipitation patterns", correct: false },
                    { text: "All of the above", correct: true },
                ]
            },
            {
                question: "Which of the following is a climate-related natural disaster?",
                answers: [
                    { text: "Earthquake", correct: false },
                    { text: "Hurricane", correct: true },
                    { text: "Volcanic eruption", correct: false },
                    { text: "Tsunami", correct: false },
                ]
            },
            {
                question: "Which of the following is a climate change mitigation strategy?",
                answers: [
                    { text: "Building sea walls", correct: false },
                    { text: "Developing drought-resistant crops", correct: false },
                    { text: "Investing in renewable energy", correct: true },
                    { text: "Relocating coastal communities", correct: false },
                ]
            },
            {
                question: "What is the primary strategy for mitigating climate change?",
                answers: [
                    { text: "Reducing greenhouse gas emissions", correct: true },
                    { text: "Adapting to the impacts of climate change", correct: false },
                    { text: "Geoengineering", correct: false },
                    { text: "Deforestation", correct: false },
                ]
            },
            {
                question: "Which of the following is a renewable energy source?",
                answers: [
                    { text: "Coal", correct: false },
                    { text: "Natural gas", correct: false },
                    { text: "Solar power", correct: true },
                    { text: "Nuclear power", correct: false },
                ]
            },
            //15
            {
                question: "What is the purpose of carbon capture and storage (CCS)?",
                answers: [
                    { text: "To increase greenhouse gas emissions", correct: false },
                    { text: "To capture and store carbon dioxide before it enters the atmosphere", correct: true },
                    { text: "To promote deforestation", correct: false },
                    { text: "To reduce solar radiation", correct: false },
                ]
            },
            {
                question: "Which of the following is a climate-friendly transportation option?",
                answers: [
                    { text: "Driving a gas-powered car", correct: false },
                    { text: "Taking a plane", correct: false },
                    { text: "Using public transportation", correct: true },
                    { text: "Riding a bike", correct: false },
                ]
            },
            {
                question: "What is the importance of planting trees?",
                answers: [
                    { text: "They absorb carbon dioxide from the atmosphere", correct: false },
                    { text: "They provide habitat for wildlife", correct: false },
                    { text: "They help prevent soil erosion", correct: false },
                    { text: "All of the above", correct: true },
                ]
            },
            {
                question: "What is the term for planting trees to offset carbon emissions?",
                answers: [
                    { text: "Deforestation", correct: false },
                    { text: "Reforestation", correct: true },
                    { text: "Stripping", correct: false },
                    { text: "Arboriculture", correct: false },
                ]
            },
            {
                question: "What is the importance of sustainable consumption?",
                answers: [
                    { text: "It increases resource depletion", correct: false },
                    { text: "It promotes economic growth", correct: false },
                    { text: "It helps reduce greenhouse gas emissions", correct: true },
                    { text: "It encourages wasteful practices", correct: false }
                ]
            },
            //20
            {
                question: "How can we promote sustainable consumption?",
                answers: [
                    { text: "Reduce, reuse, recycle", correct: false },
                    { text: "Buy locally produced goods", correct: false },
                    { text: "Avoid single-use plastics", correct: false },
                    { text: "All of the above", correct: true }
                ]
            },
            {
                question: "What is the role of sustainable development in addressing climate change?",
                answers: [
                    { text: "It is irrelevant", correct: false },
                    { text: "It can help to mitigate climate change", correct: true },
                    { text: "It can exacerbate climate change", correct: false },
                    { text: "It has no impact on climate change", correct: false }
                ]
            },
            {
                question: "Which international agreement aims to combat climate change?",
                answers: [
                    { text: "Geneva Protocol", correct: false },
                    { text: "Paris Agreement", correct: true },
                    { text: "Montreal Protocol", correct: false },
                    { text: "Copenhagen Accord", correct: false }
                ]
            },
            {
                question: "What is the role of the Intergovernmental Panel on Climate Change (IPCC)?",
                answers: [
                    { text: "To promote deforestation", correct: false },
                    { text: "To provide scientific assessments of climate change", correct: true },
                    { text: "To develop renewable energy technologies", correct: false },
                    { text: "To regulate greenhouse gas emissions", correct: false }
                ]
            },
            {
                question: "What is the goal of the Paris Agreement?",
                answers: [
                    { text: "To reduce global poverty", correct: false },
                    { text: "To promote international trade", correct: false },
                    { text: "To combat climate change", correct: true },
                    { text: "To protect human rights", correct: false }
                ]
            },
            //25
            {
                question: "What is the importance of international cooperation in addressing climate change?",
                answers: [
                    { text: "It is not necessary", correct: false },
                    { text: "It slows down progress", correct: false },
                    { text: "It helps to develop global solutions", correct: true },
                    { text: "It creates competition among nations", correct: false }
                ]
            },
            {
                question: "Why is education important in addressing climate change?",
                answers: [
                    { text: "It promotes ignorance", correct: false },
                    { text: "It discourages action", correct: false },
                    { text: "It empowers individuals to take action", correct: true },
                    { text: "It has no impact on climate change", correct: false }
                ]
            },
            {
                question: "How can schools contribute to climate change education?",
                answers: [
                    { text: "By ignoring the issue", correct: false },
                    { text: "By promoting unsustainable practices", correct: false },
                    { text: "By integrating climate change into the curriculum", correct: true },
                    { text: "By discouraging student involvement", correct: false }
                ]
            },
            {
                question: "What is the role of education in addressing climate change?",
                answers: [
                    { text: "Raising awareness and understanding", correct: false },
                    { text: "Empowering individuals to take action", correct: false },
                    { text: "Promoting sustainable practices", correct: false },
                    { text: "All of the above", correct: true }
                ]
            },
            {
                question: "What is the importance of climate education for young people?",
                answers: [
                    { text: "To raise awareness about climate change", correct: false },
                    { text: "To foster critical thinking and problem-solving skills", correct: false },
                    { text: "To inspire action and leadership", correct: false },
                    { text: "All of the above", correct: true }
                ]
            },
            //30
            {
                question: "What can individuals do to help combat climate change?",
                answers: [
                    { text: "Reduce their carbon footprint", correct: false },
                    { text: "Conserve energy", correct: false },
                    { text: "Support sustainable practices", correct: false },
                    { text: "All of the above", correct: true }
                ]
            },
            {
                question: "How can individuals contribute to climate action?",
                answers: [
                    { text: "Reduce energy consumption", correct: false },
                    { text: "Recycle and compost", correct: false },
                    { text: "Support sustainable businesses", correct: false },
                    { text: "All of the above", correct: true }
                ]
            },
            {
                question: "How can individuals reduce their carbon footprint?",
                answers: [
                    { text: "Driving more frequently", correct: false },
                    { text: "Conserving energy in their homes", correct: true },
                    { text: "Increasing meat consumption", correct: false },
                    { text: "Wasting food", correct: false }
                ]
            },
            {
                question: "What is the potential role of geoengineering in addressing climate change?",
                answers: [
                    { text: "To increase greenhouse gas emissions", correct: false },
                    { text: "To capture and store carbon dioxide", correct: false },
                    { text: "To modify the Earth's climate", correct: true },
                    { text: "To promote sustainable development", correct: false }
                ]
            },
            {
                question: "How can technology contribute to climate change mitigation?",
                answers: [
                    { text: "Developing more efficient vehicles", correct: false },
                    { text: "Creating renewable energy sources", correct: false },
                    { text: "Improving energy storage systems", correct: false },
                    { text: "All of the above", correct: true }
                ]
            },
            //35
            {
                question: "How can technology help address climate change?",
                answers: [
                    { text: "By increasing energy consumption", correct: false },
                    { text: "By promoting unsustainable practices", correct: false },
                    { text: "By developing renewable energy sources", correct: true },
                    { text: "By ignoring the problem", correct: false }
                ]
            },
            {
                question: "What is the role of space technology in climate change research?",
                answers: [
                    { text: "It is irrelevant", correct: false },
                    { text: "It can help monitor climate change", correct: true },
                    { text: "It can worsen climate change's", correct: false },
                    { text: "It has no impact on climate change", correct: false }
                ]
            },
            // {
            //     question: "Why is it important to address climate change for future generations?",
            //     answers: [
            //         { text: "Climate change will not affect future generations", correct: false },
            //         { text: "Future generations will have the resources to adapt to climate change", correct: false },
            //         { text: "Climate change will have a significant impact on the lives of future generations", correct: true },
            //         { text: "Climate change is a natural phenomenon that cannot be avoided", correct: false }
            //     ]
            // },
            {
                question: "What is the role of education in addressing climate change?",
                answers: [
                    { text: "To raise awareness and promote understanding", correct: true },
                    { text: "To discourage climate action", correct: false },
                    { text: "To increase greenhouse gas emissions", correct: false },
                    { text: "To promote unsustainable practices", correct: false }
                ]
            },
            // {
            //     question: "What is the potential of nature-based solutions for addressing climate change?",
            //     answers: [
            //         { text: "They can increase greenhouse gas emissions", correct: false },
            //         { text: "They can help restore ecosystems and mitigate climate impacts", correct: true },
            //         { text: "They are not effective in addressing climate change", correct: false },
            //         { text: "They require significant technological advancements", correct: false }
            //     ]
            // },
            //40
            {
                question: "How can sustainable agriculture contribute to climate change mitigation?",
                answers: [
                    { text: "By increasing deforestation", correct: false },
                    { text: "By reducing soil erosion", correct: true },
                    { text: "By promoting monoculture farming", correct: false },
                    { text: "By increasing greenhouse gas emissions", correct: false }
                ]
            },
            {
                question: "What is the importance of international cooperation in addressing climate change?",
                answers: [
                    { text: "It is not necessary to address climate change", correct: false },
                    { text: "It can hinder progress in addressing climate change", correct: false },
                    { text: "It can help develop effective solutions to climate change", correct: true },
                    { text: "It is only relevant for developed countries", correct: false }
                ]
            }
            //42
            // Total 40 Questions
        ]);
    }, []);

    const Que = document.getElementById("question");
    const AnsBtn = document.getElementById("answer-buttons");
    const Ans = document.getElementById("answer");
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const playBtn = document.getElementById('play-btn');

    let result = ``;

    console.log(1);

    const startQuiz = () => {
        setCurrentQuestionIndex(1);
        setScore(0);

        Que.style.display = 'block';
        AnsBtn.style.display = 'block';
        Ans.style.display = 'none';
        startBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        playBtn.style.display = 'none';

        console.log(2);

        showQuestion();
    };

    const showQuestion = () => {

        if (!questions.length) return; // Handle empty questions

        nextBtn.style.display = 'none';
        Ans.style.display = 'none';

        const currentQuestion = questions[currentQuestionIndex];
        const answerButtons = answerButtonsRef.current;

        Que.innerText = currentQuestion.question;

        answerButtons.innerHTML = ''; // Clear buttons before creating new ones

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            answerButtons.appendChild(button);

            if (answer.correct) {
                result = `Correct Answer: ${answer.text}`;
            }

            button.addEventListener('click', () => handleAnswerClick(answer));
        });

        console.log(3);
    };

    const handleAnswerClick = (answer) => {
        const isCorrect = answer.correct;
        if (isCorrect) {
            setScore(score + 1);
        }


        // Disable all buttons after answering
        const answerButtons = answerButtonsRef.current;
        answerButtons.querySelectorAll('button').forEach((button) => {
            button.disabled = true;
            if (button.textContent === answer.text && isCorrect) {
                button.classList.add('correct');
            } else if (button.textContent === answer.text && !isCorrect) {
                button.classList.add('incorrect');
            }
        });

        // Show "Next" button
        const nextBtn = document.getElementById('next-btn');
        nextBtn.style.display = 'block';
        Ans.innerText = result;
        Ans.style.display = 'block';

        console.log(4);
    };

    const showScore = () => {
        Que.textContent = `You scored ${score} out of ${questions.length}!`;

        Que.style.display = 'block';
        AnsBtn.style.display = 'none';
        Ans.style.display = 'none';
        startBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        playBtn.style.display = 'block';

        console.log(5);
    };

    const handlenextBtn = () => {
        Ans.innerText = ``;

        console.log(6);

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
                    <h2 id="answer"></h2>
                    <button id="start-btn" className="btn" onClick={startQuiz}>Start Quiz</button>
                    <button id="next-btn" className="btn" onClick={handlenextBtn}>Next</button>
                    {/* <Link to='/quiz'> */}
                    <button id="play-btn" className="btn" onClick={refreshPage}>Play Again</button>
                    {/* </Link> */}
                </div>
            </div>
            <Top></Top>
        </>
    );

};

export default Quiz;