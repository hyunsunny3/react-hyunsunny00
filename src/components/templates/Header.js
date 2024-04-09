import React from 'react';
import HeaderLogo from './HeaderLogo';
import Gnb from './Gnb';
import { useToggle } from '@uidotdev/usehooks';

function Header() {
    const [on, toggle] = useToggle(true);
  return (
    <header>
        <div className="header_wrap">
            <HeaderLogo />
            <div>{!on ? <Gnb /> : ""}</div>
            <button className={!on ? "btnToggleOn" : "btnToggleOff"} onClick={toggle}>메뉴{!on ? "닫기" : "보기"}</button>
        </div>
    </header>
  )
}

export default Header