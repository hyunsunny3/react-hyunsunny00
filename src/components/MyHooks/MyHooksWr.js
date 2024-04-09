import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import MyHookToggle from "./MyHookToggle";

const MyHooksMenu = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="MyHookToggle">useToggle</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

const MyHooksWr = () => {
    return (
        <>
            <div id="wrap">
                현선이의 커스텀 Hooks 연습장~♥
                
                <Routes>
                    <Route path="/" element={<MyHooksMenu />}>
                        <Route path="MyHookToggle" element={<MyHookToggle />} />
                    </Route>
                </Routes>
            </div>
        </>
    );
};

export default MyHooksWr;