import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Questions.css';

function Questions(
    {
        quesIndex,
        setQuesIndex,
        question,
        score,
        setScore,
        option,
        correct
    }
) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    function handelSubmit(cur) {
        setSelected(cur);
        if (cur === correct) {
            setScore(score + 1);
        }
    }

    function handelSelect(cur) {
        if (selected === cur && selected === correct) return "correct";
        else if (selected === cur && selected !== correct) return "wrong";
        else if (cur === correct) return "correct";
    }

    function handelNext() {
        if (quesIndex > 8) {
            navigate("/result");
        } else if (selected) {
            setQuesIndex(quesIndex + 1);
            setSelected();
            setError(true)
        } else {
            setError("Please select a option first");
        }
    }

    function quiteGame() {
        setQuesIndex(0);
        setScore(0);
        setSelected()
        setError(false);
    }

    return (
        <div className="question">
            <h2>Question no {quesIndex + 1} / {question.length}</h2>
            <h2>{question[quesIndex].question}</h2>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            <div className="myQuestion">
                {option && option.map((cur) => {
                    return (
                        <button
                            className={selected && handelSelect(cur)}
                            disabled={selected}
                            key={cur}
                            onClick={() => handelSubmit(cur)}
                        >
                            {cur}
                        </button>
                    )
                })}
            </div>
            <div className="quit">
                <button className="bt" onClick={quiteGame}>Quit</button>
                <button className="bt" onClick={handelNext}>Next</button>
            </div>
        </div>
    )
};
export default Questions;