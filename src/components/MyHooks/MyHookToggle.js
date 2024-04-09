import React from "react";
import { useToggle } from "@uidotdev/usehooks";

function ToggleDemo({ on, toggle }) {
    return (
        <div>
            <label className="toggle">
                <input
                    onChange={toggle}
                    className="toggle-checkbox"
                    type="checkbox"
                    checked={on}
                />
                <div className="toggle-switch"></div>
                <span className="toggle-label">{on ? "On" : "Off"}</span>
            </label>
        </div>
    );
}

const MyHookToggle = () => {
    const [on, toggle] = useToggle(true);
    return (
        <>
            <section>
                <h1>UseToggle</h1>
                <button disabled={on} className="btnTurnOn" onClick={() => toggle(true)}>btn Turn On</button>
                <button disabled={!on} className="btnTurnOff" onClick={() => toggle(false)}>btn Turn Off</button>
                <button className={on ? "btnToggleOn" : "btnToggleOff"} onClick={toggle}>btn Toggle {on ? "On" : "Off"}</button>
                <button className="link" onClick={() => toggle("nope")}>(Also toggles)</button>
                <ToggleDemo toggle={toggle} on={on} />
            </section>
        </>
    );
};

export default MyHookToggle;