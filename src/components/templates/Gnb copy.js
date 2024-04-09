// rfce
import React from 'react';
import { Link } from "react-router-dom";

function Gnb() {
  return (
    <div className="nav">
      <Link to="/ProductPage">상품</Link>
      <Link to="/LoginPage">로그인</Link>
      <Link to="/LoginPage2">로그인2</Link>
      {/* <Link to="/SunnyDice">주사위</Link> */}
      <Link to="/MyHooks">MyHooks</Link>
    </div>
  )
}

export default Gnb