
import './success.css'
import { useNavigate } from 'react-router-dom';
import PageIndicators from '../../components/PageIndicators/PageIndicators';
import success from '../../assets/images/icon-thank-you.svg'

const Success = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className='success-container'>
            <div className="left-side">
                <div className='page-one'>
                    <PageIndicators /> {/* Render the step indicators */}
                    <div className='content'>
                        {/* Other content specific to Step 1 */}
                    </div>
                </div>
            </div>
            <div className="success">
                <img className='success-img' src={success} alt="" />
                <h2 className='success-h2'>Thank you!</h2>
                <p className='success-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis doloremque obcaecati maiores quos sint! Consequuntur, ex? Sequi, minus amet enim, molestiae dolorem, soluta maxime facilis odit placeat quae ut praesentium.</p>
            </div>
            {/* <div className="go-back">
                <button className="back-btn" type="button" onClick={handleGoBack}>
                    Go Back
                </button>
            </div> */}
        </div>
    )
}

export default Success
