import React, { useState } from 'react'
import './App.css';
import Questions from './Components/data';
const QuizArea = () => {

    const [data, setData] = useState(Questions.slice(1,11));
    const [currentQuestion , setCurrentQuestion] = useState(1);
    const [showScore , setShowScore] = useState(true);
    const [score , setScore] = useState(0);

    const clickHandler = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 10);
        }
        const next = currentQuestion + 1;
        if(next < data.length){
            setCurrentQuestion(next)
        }else{
            setShowScore(false)
        }
        
    }

    const reloadHandler = ()=>{
        window.location.reload();
    }

    return (
        <>
            <section className="quiz-area">

                <div className="quiz">
                    {
                        !showScore?(
                            <div className="">
                                <h3 style={{fontSize:'30px'}}>You got {score} out of 100</h3>
                                {
                                    score > 39? (<h5 style={{color:'#67d067'}}>Congratulations! You have passed.</h5>):( <h5 style={{color:'#fb8686'}}>Sorry! failed you are.</h5> )
                                }
                                <button className='try-btn' onClick={reloadHandler}>{
                                    score > 39? 'Play again': 'Try again'
                                }</button>
                            </div>
                            
                        ):(
                            <div className="">
                                    <div className="d-flex">
                                        <h2>{currentQuestion}.</h2>
                                        <h3>{currentQuestion}/<small>{data.length}</small></h3>
                                    </div>
                                    <div className="quiz-box">
                                            <div className="change-quesiton">
                                            <h1>Q.</h1>
                                            <h2>{data[currentQuestion].question}</h2>
                                    </div>                                         
                                    <div className="answeres-area">
                                        {
                                            data[currentQuestion].answeres.map((item) => {
                                                return <button onClick= {()=> clickHandler(item.isCorrect)} className="btn">{item.option}</button>
                                            })
                                        }
                                    </div>
                        </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default QuizArea
