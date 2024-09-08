import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './two.css';
import arcade from '../../assets/images/icon-arcade.svg';
import advanced from '../../assets/images/icon-advanced.svg';
import pro from '../../assets/images/icon-pro.svg';
import ToggleSwitch from '../../components/toggleswitch/ToggleSwitch';
import PageIndicators from '../../components/PageIndicators/PageIndicators';

const Two = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleSelectPlan = (plan, planPrice) => {
        setSelectedPlan(plan);
        setPrice(planPrice);
    };

    const handleToggleChange = (isChecked) => {
        setIsYearly(isChecked);
    };

    const handleNextStep = () => {
        if (selectedPlan) {
            const billingType = isYearly ? 'Yearly' : 'Monthly'; // Set the billing type based on toggle
            // Adjust price based on the billing type
            const adjustedPrice = isYearly ?
                (selectedPlan === 'Arcade' ? '$90/yr' : selectedPlan === 'Advanced' ? '$120/yr' : '$150/yr') :
                (selectedPlan === 'Arcade' ? '$9/mo' : selectedPlan === 'Advanced' ? '$12/mo' : '$15/mo');

            // Navigate to Three.jsx and pass selectedPlan, price, and billingType
            navigate('/three', { state: { selectedPlan, price: adjustedPrice, billingType } });
        } else {
            alert('Please select a plan before proceeding.');
        }
    };

    return (
        <div className="step-two-container">
            <div className="left-side">
                <div className='page-one'>
                    <PageIndicators /> {/* Render the step indicators */}
                    <div className='content'>
                        {/* Other content specific to Step 1 */}
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="select-plan">
                    <h1>Select your plan</h1>
                    <p>You have the option of monthly or yearly billing.</p>
                    <div className="price-plan">
                        <button
                            className={`arcade ${selectedPlan === 'Arcade' ? 'selected' : ''}`}
                            onClick={() => handleSelectPlan('Arcade', isYearly ? '$90/yr' : '$9/mo')}
                        >
                            <img src={arcade} alt="Arcade" />
                            <h2>Arcade</h2>
                            <p className="price-value">{isYearly ? '$90/yr' : '$9/mo'}</p>
                        </button>

                        <button
                            className={`advanced ${selectedPlan === 'Advanced' ? 'selected' : ''}`}
                            onClick={() => handleSelectPlan('Advanced', isYearly ? '$120/yr' : '$12/mo')}
                        >
                            <img src={advanced} alt="Advanced" />
                            <h2>Advanced</h2>
                            <p className="price-value">{isYearly ? '$120/yr' : '$12/mo'}</p>
                        </button>

                        <button
                            className={`pro ${selectedPlan === 'Pro' ? 'selected' : ''}`}
                            onClick={() => handleSelectPlan('Pro', isYearly ? '$150/yr' : '$15/mo')}
                        >
                            <img src={pro} alt="Pro" />
                            <h2>Pro</h2>
                            <p className="price-value">{isYearly ? '$150/yr' : '$15/mo'}</p>
                        </button>
                    </div>

                    <div className="selector-plan">
                        <p className="month" style={{ color: !isYearly ? 'rgb(12 215 24)' : '#002153' }}>
                            Monthly
                        </p>
                        <ToggleSwitch onToggleChange={handleToggleChange} />
                        <p className="yearly" style={{ color: isYearly ? 'rgb(12 215 24)' : '#002153' }}>
                            Yearly
                        </p>
                    </div>

                    <div className="buttons">
                        <div className="go-back">
                            <button className="back-btn" type="button" onClick={handleGoBack}>
                                Go Back
                            </button>
                        </div>
                        <div className="next-step">
                            <button className="btn-next" type="button" onClick={handleNextStep}>
                                Next Step
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Two;
