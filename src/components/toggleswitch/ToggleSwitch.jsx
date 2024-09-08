// Filename: ./components/ToggleSwitch.js

import React, { useState } from "react";
import "../../components/toggleswitch/toggleswitch.css";

const ToggleSwitch = ({ onToggleChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        if (onToggleChange) {
            onToggleChange(newCheckedState);
        }
    };

    return (
        <div className="container">
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    id="toggleSwitch"
                    checked={isChecked}
                    onChange={handleToggle}
                />
                <label className="switch-label" htmlFor="toggleSwitch">
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;
