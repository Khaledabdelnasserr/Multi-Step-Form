import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './three.css';
import PageIndicators from '../../components/PageIndicators/PageIndicators';

const Three = () => {
    const [checkedOptions, setCheckedOptions] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    // Get the selectedPlan, price, and billingType from Two.jsx
    const { selectedPlan, price, billingType } = location.state || {};

    // Add-on prices
    const addOnPrices = {
        'Online service': '+$1/mo',
        'Larger Storage': '+$2/mo',
        'Customizable Profile': '+$2/mo'
    };

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleCheckboxChange = (label) => {
        setCheckedOptions(prev => ({
            ...prev,
            [label]: !prev[label] // Toggle the state for the checkbox
        }));
    };

    const handleNextStep = () => {
        const selectedAddOns = Object.keys(checkedOptions).filter(label => checkedOptions[label]);
        if (selectedAddOns.length) {
            // Pass the selected plan, price, billingType, and add-ons to Four.jsx
            navigate('/four', {
                state: {
                    selectedPlan,
                    price,
                    billingType,
                    addOns: selectedAddOns.reduce((acc, cur) => ({
                        ...acc,
                        [cur]: addOnPrices[cur]
                    }), {})
                }
            });
        } else {
            alert('Please select at least one option before proceeding.');
        }
    };

    return (
        <div className='step-three-container'>
            <div className="left-side">
                <div className='page-one'>
                    <PageIndicators /> {/* Render the step indicators */}
                    <div className='content'>
                        {/* Other content specific to Step 1 */}
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="pick-add-ons">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience</p>
                </div>
                {['Online service', 'Larger Storage', 'Customizable Profile'].map((label, index) => (
                    <div
                        key={index}
                        className="option"
                        style={{ backgroundColor: checkedOptions[label] ? 'white' : '' }}
                    >
                        <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            onChange={() => handleCheckboxChange(label)}
                        />
                        <div className="online">
                            <h2>{label}</h2>
                            <p>{label === 'Online service' ? 'Access to multiplayer games' :
                                label === 'Larger Storage' ? 'Extra 1TB of cloud save' :
                                    'Custom theme on your profile'}</p>
                        </div>
                        <span>{addOnPrices[label]}</span>
                    </div>
                ))}
                <div className='buttons' id='three-btn'>
                    <div className='go-back'>
                        <button className='back-btn' type='button' onClick={handleGoBack}>Go Back</button>
                    </div>
                    <div className='next-step'>
                        <button className='btn-next' type='button' onClick={handleNextStep}>Next Step</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Three;
