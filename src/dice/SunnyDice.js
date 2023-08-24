import React from "react";

const SunnyDice = () => {
    
    const WINS = {
        rock: 'scissor',
        scissor: 'paper',
        paper: 'rock',
    };
    
    function getResult(left, right) {
        if (WINS[left] === right) return '승리';
        else if (left === WINS[right]) return '패배';
        return '무승부';
    }
    
    function handleClick() {
        console.log('가위바위보!');
    }
    
    const me = 'rock';
    const other = 'scissor';
    
    return (
      <>
        <div id="wrap">
            주사위 Game~
            <h1 id="title">가위바위보</h1>
            <h2>{getResult(me, other)}</h2>
            <button onClick={handleClick}>가위</button>
            <button onClick={handleClick}>바위</button>
            <button onClick={handleClick}>보</button>
        </div>
      </>
    );
  };

  export default SunnyDice;