// src/Pages/One.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './one.css';
import PageIndicators from '../../components/PageIndicators/PageIndicators';

const One = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        phone: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleNextStep = () => {
        // Check if all inputs are filled
        const isFormValid = Object.values(inputs).every(value => value.trim() !== '');

        if (!isFormValid) {
            // Set errors if any input is empty
            setErrors({
                name: !inputs.name,
                email: !inputs.email,
                phone: !inputs.phone,
            });
            // alert('Please fill out all fields before proceeding.');
            return;
        }

        // Clear errors if form is valid
        setErrors({
            name: false,
            email: false,
            phone: false,
        });

        navigate('/two'); // Navigate to the Two component
    };

    return (
        <div className="step-one-container">
            <div className="left-side">
                <div className='page-one'>
                    <PageIndicators /> {/* Render the step indicators */}
                    <div className='content'>
                        {/* Other content specific to Step 1 */}
                    </div>
                </div>
                {/* Add other steps here */}
            </div>
            <form className="right-side">
                <div className="personal-info">
                    <h1>Personal info</h1>
                    <p>Please provide your name, email address, and phone number.</p>
                    <h4>Name</h4>
                    {errors.name && <p className='error-message'>required</p>}
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleInputChange}
                        className={errors.name ? 'error' : ''}
                        placeholder='e.g. Stephen King'
                    />
                    <h4>Email Address</h4>
                    {errors.email && <p className='error-message'>required</p>}
                    <input
                        type="text"
                        name="email"
                        value={inputs.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'error' : ''}
                        placeholder='e.g. StephenKing@lorem.com'
                    />
                    <h4>Phone Number</h4>
                    {errors.phone && <p className='error-message'>required</p>}
                    <input
                        type="number"
                        name="phone"
                        value={inputs.phone}
                        onChange={handleInputChange}
                        className={errors.phone ? 'error' : ''}
                        placeholder='e.g. +1 234 567 890'
                    />
                </div>
                <div className='next-step' >
                    <button type='button' onClick={handleNextStep}>Next Step</button>
                </div>
            </form>
        </div>
    );
};

export default One;
