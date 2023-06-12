import { React, useState } from 'react'
 
export default function App() {
  const [likeCounter, setLikeCounter] = useState(100);
  const [dislikeCounter, setDislikeCounter] = useState(25);
  const [likeToggle, setLikeToggle] = useState(false)
  const [dislikeToggle, setDislikeToggle] = useState(false)
  //increase counter
  const likeIncrease = () => {
    if(likeToggle===false){
      setLikeCounter(count => count + 1);
      setDislikeCounter(count => count - 1);
      setLikeToggle(true);
    }else{
      setDislikeCounter(count => count + 1);
      setLikeCounter(count => count - 1);
      setLikeToggle(false);
    }    
  };
 
  //decrease counter
  
  const dislikeIncrease = () => {
    if(dislikeToggle === false){
      setDislikeCounter(count => count + 1);
      setLikeCounter(count => count - 1);
      setDislikeToggle(true);
    }else{
      setLikeCounter(count => count + 1);
      setDislikeCounter(count => count - 1);
      setDislikeToggle(false);
    } 
    
  };
 
  //decrease counter
  
  //reset counter 
  
 
  return (
    <div className="counter">
      <h1>React Like and Dislike Counters</h1>
      {/* <span className="counter__output">{counter}</span> */}
      <div className="btn__container">
        <button className="control__btn" onClick={likeIncrease}>Like | <span>{likeCounter}</span></button>
        <button className="control__btn" onClick={dislikeIncrease}>Dislike | <span>{dislikeCounter}</span></button>
        
      </div>
    </div>
  );
}