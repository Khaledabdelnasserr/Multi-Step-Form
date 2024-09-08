import React from 'react';
import { useLocation } from 'react-router-dom';
import './pageIndicators.css'; // Ensure this CSS file is created

const PageIndicators = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Function to determine if the indicator is active
    const isActive = (path) => {
        return currentPath === path;
    };

    return (
        <div className="page-indicators">
            <div className={`your-info ${isActive('/') ? 'active' : ''}`}>
                <div className='h1' id='s-1'>
                    <h1>1</h1>
                </div>
                <div className='p-h2'>
                    <p>STEP 1</p>
                    <h3>YOUR INFO</h3>
                </div>
            </div>
            <div className={`your-info ${isActive('/two') ? 'active' : ''}`}>
                <div className='h1' id='s-2'>
                    <h1>2</h1>
                </div>
                <div className='p-h2'>
                    <p>STEP 2</p>
                    <h3>SELECT-PLAN</h3>
                </div>
            </div>
            <div className={`your-info ${isActive('/three') ? 'active' : ''}`}>
                <div className='h1' id='s-3'>
                    <h1>3</h1>
                </div>
                <div className='p-h2'>
                    <p>STEP 3</p>
                    <h3>ADD-ONS</h3>
                </div>
            </div>
            <div className={`your-info ${isActive('/four') ? 'active' : ''}`}>
                <div className='h1' id='s-4'>
                    <h1>4</h1>
                </div>
                <div className='p-h2'>
                    <p>STEP 4</p>
                    <h3>SUMMARY</h3>
                </div>
            </div>
            <div className={`your-info ${isActive('/success') ? 'active' : ''}`}>
                <div className='h1' id='s-4'>
                    <h1>5</h1>
                </div>
                <div className='p-h2'>
                    <p>STEP 5</p>
                    <h3>Success</h3>
                </div>
            </div>
        </div>
    );
};

export default PageIndicators;
