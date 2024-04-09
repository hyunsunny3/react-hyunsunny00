import { useRef, useState } from "react"
import useDetectClose from "../MyHooks/useDetectClose";
import { Link } from "react-router-dom";

const Gnb = () => {
  const gnbRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(gnbRef, false);
  
  return (
    <div className="gnb">
      <button onClick={() => setIsOpen(!isOpen)}>메뉴보기</button>

      <ul ref={gnbRef} className={gnbRef ? "on" : "off"}>
        <li><Link to="/ProductPage">상품</Link></li>
        <li><Link to="/LoginPage">로그인</Link></li>
        <li><Link to="/LoginPage2">로그인2</Link></li>
        <li><Link to="/MyHooks">MyHooks</Link></li>
      </ul>
    </div>
  )
}

export default Gnb;