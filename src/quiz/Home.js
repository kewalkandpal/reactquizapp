import './Home.css';
import Categories from './categories';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from "../images/quiz.png";

function Home({ name, setName, fetchQuestion }) {
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    function handelSubmit() {
        if (!name || !category || !level) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestion(category, level);
            navigate("/quiz");
        }
    }
    return (
        <div className="home">
            <h2>Welcome To Quiz</h2>
            <div className="home_main">
                <div className="left_side">
                    <div className="quiz_setting">
                        {error && <p className="error_msg">Please select all the field</p>}
                        <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                        <select onChange={(e) => setCategory(e.target.value)}>
                            {
                                Categories.map((cur) => {
                                    return (
                                        <option key={cur.category} value={cur.value}>{cur.category}</option>
                                    )
                                })
                            }
                        </select>
                        <select onChange={(e) => setLevel(e.target.value)}>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                        <button className="btn" onClick={handelSubmit}>Start quiz</button>
                    </div>
                </div>
                <div className="right_side">
                   <img src={img2} alt="homeImage" />
                </div>
            </div>
        </div>
    )
}
export default Home;