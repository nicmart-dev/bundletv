import './Budget.scss';

const Budget = () => {

    return (
        <div>
            <p>STEP-1</p>
            <h2>Your budget</h2>
            <p> Start with a preset budget and see what your options are.</p>
            <label>SELECT ONE</label>
            <div className='btn-container'>
                <button className='btn-container__primary'>Less than $30/mo</button>
                <button className='btn-container__primary'>Less than $50/mo</button>
                <button className='btn-container__primary btn-container__primary--active'>Less than $100/mo</button>
                <button className='btn-container__primary'>No present budget</button>
            </div>
            
        </div>
    )
}

export default Budget;