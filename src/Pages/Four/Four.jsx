import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './four.css';
import PageIndicators from '../../components/PageIndicators/PageIndicators';

const priceMapping = {
    Arcade: { Monthly: '$9/mo', Yearly: '$90/yr' },
    Advanced: { Monthly: '$12/mo', Yearly: '$120/yr' },
    Pro: { Monthly: '$15/mo', Yearly: '$150/yr' }
};

const Four = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Initialize state with the data from location.state
    const [selectedPlan, setSelectedPlan] = useState(location.state?.selectedPlan || 'No plan selected');
    const [billingType, setBillingType] = useState(location.state?.billingType || 'Monthly');
    const [price, setPrice] = useState(priceMapping[selectedPlan]?.[billingType] || '$0/mo');
    const [addOns, setAddOns] = useState(location.state?.addOns || {});

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    const handleReverseBillingType = () => {
        const newBillingType = billingType === 'Monthly' ? 'Yearly' : 'Monthly';
        setBillingType(newBillingType);
        setPrice(priceMapping[selectedPlan]?.[newBillingType] || '$0/mo');
    };

    // Calculate the total add-ons price
    const addOnPrices = Object.values(addOns).reduce((total, price) => {
        return total + parseFloat(price.replace(/[^0-9.]/g, ''));
    }, 0);

    const totalPrice = parseFloat(price.replace(/[^0-9.]/g, '')) + addOnPrices;

    // Function to navigate to the Success page
    const handleConfirm = () => {
        navigate('/success'); // Navigate to the Success page
    };

    return (
        <div className='step-four-container'>
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
                    <h1>Finishing up</h1>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>

                <div className='finish-container'>
                    <div className='change-plane-confirm'>
                        <div className="container-confirm">
                            <div className='plane-change'>
                                <h2 className='my-plan'>{selectedPlan} ({billingType})</h2> {/* Display selected plan with billing type */}
                                <p className='change-my' onClick={handleReverseBillingType}>Change</p> {/* Handle the change */}
                            </div>
                            <div className="p-plan-confirm">
                                <span className='put-value-price'>{price}</span> {/* Display price */}
                            </div>
                        </div>
                        <div className='storage-service'>
                            <p>Online service</p>
                            <span className='o-service'>{addOns['Online service'] || '+$0/mo'}</span> {/* Display add-on price */}
                        </div>
                        <div className='storage-service'>
                            <p>Larger storage</p>
                            <span className='l-storage'>{addOns['Larger Storage'] || '+$0/mo'}</span> {/* Display add-on price */}
                        </div>
                        <div className='storage-service'>
                            <p>Customizable Profile</p>
                            <span className='c-profile'>{addOns['Customizable Profile'] || '+$0/mo'}</span> {/* Display add-on price */}
                        </div>
                    </div>
                </div>

                <div className='total-confirm'>
                    <p>Total (per {billingType})</p>
                    <span>{`$${totalPrice}/${billingType === 'Monthly' ? 'mo' : 'yr'}`}</span> {/* Display the total price */}
                </div>

                <div className='buttons' id='three-btn'>
                    <div className='go-back'>
                        <button className='back-btn' type='button' onClick={handleGoBack}>Go Back</button>
                    </div>
                    <div className='next-step'>
                        <button className='btn-next confirm' type='button' onClick={handleConfirm}>Confirm</button> {/* Handle the confirm click */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Four;
