import { useState, useEffect } from "react";
import "./Quiz.css";
import Questions from "./Questions";
function Quiz({ question, setQuestion, name, score, setScore }) {
    const [quesIndex, setQuesIndex] = useState(0);
    const [option, setOptions] = useState();
    useEffect(() => {
        setOptions(
            question &&
            handleShuffle([
                question[quesIndex]?.correct_answer,
                ...question[quesIndex]?.incorrect_answers,
            ])
        );
    }, [quesIndex, question]);
    const handleShuffle = (qAnswer) => {
        return qAnswer.sort(() => Math.random() - 0.5);
    };
    return (
        <div className="quiz">
            <h2 className="user_name"> Welcome <span>{name}</span> best of luck 👍</h2>
            {
                question ? (
                    <>
                        <div className="uesr_details">
                            <span>Category - {question[quesIndex].category}</span>
                            <span>Score {score} </span>
                        </div>
                        <Questions
                            quesIndex={quesIndex}
                            setQuesIndex={setQuesIndex}
                            question={question}
                            setQuestion={setQuestion}
                            score={score}
                            setScore={setScore}
                            option={option}
                            setOptions={setOptions}
                            correct={question[quesIndex].correct_answer}
                        />
                    </>
                ) : (
                    <h1 className="questionWait">Please wait some moment ...</h1>
                )
            }
        </div>
    )
};
export default Quiz;