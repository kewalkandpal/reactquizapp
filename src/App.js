import './App.css';
import Quiz from './quiz/Quiz';
import Home from './quiz/Home';
import Result from './quiz/Result';
import {Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import img1 from "./images/bgtwo.jpg";

function App() {
  const [question, setQuestion] = useState();
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  async function fetchQuestion(category = "", level = "") {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${level && `&level=${level}`}&type=multiple`);
    setQuestion(data.results);
  }
  return (
    <div className="app" style={{backgroundImage:`URL(${img1})`,backgroundSize:"cover",backgroundPosition:"center"}}>
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion} />}></Route>
          <Route path="/quiz" element={<Quiz question={question} setQuestion={setQuestion} name={name} score={score} setScore={setScore} />}></Route>
          <Route path="/result" element={<Result name={name} setName={setName} score={score} setScore={setScore} question={question} />}></Route>
        </Routes>
      </div>
  );
}

export default App;
