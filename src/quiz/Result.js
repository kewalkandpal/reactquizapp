import { useNavigate } from "react-router-dom";
import "./Result.css";
function Result({ name, setName, score, setScore, question }) {
    const navigate = useNavigate();
    function goToHome() {
        setName("")
        setScore(0);
        navigate("/");
    }
    return (
        <div className="result">
            <h2>Congratulations <span>{name}</span></h2>
            <h2>Your total score is <span>{score} out of {question.length}</span></h2>
            <button className="bt" onClick={goToHome}>Go back to home</button>
        </div>
    )
}
export default Result;