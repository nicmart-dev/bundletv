import React, { useState } from 'react';
import './SelectStreaming.scss';
import netflix from '../../assets/images/netflix.png';
import prime from '../../assets/images/prime.png';
import crave from '../../assets/images/crave.png';
import disney from '../../assets/images/disney.png';
import bigCast from '../../assets/icons/big-cast.svg';

const SelectStreaming = () => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (service) => {
        setSelected(service);
    };

    return (
        <div className='streaming'>
            <p className='streaming__step'>STEP 6</p>
            <img src={bigCast} alt='streaming-icon' className='streaming__icon'/>
            <h2 className='streaming__title'>Streaming</h2>
            <p className='streaming__description'>Based on your preset budget, you will be able to select 1 streaming service.</p>
            <label className='streaming__label'>SELECT ONE</label>
            <div className='streaming__btn-container'>
                <img 
                    src={netflix} 
                    alt="Netflix"
                    className={`streaming__btn-container-item ${selected === 'netflix' ? 'selected' : ''}`}
                    onClick={() => handleSelect('netflix')} 
                />
                <img 
                    src={prime} 
                    alt="Prime"
                    className={`streaming__btn-container-item ${selected === 'prime' ? 'selected' : ''}`}
                    onClick={() => handleSelect('prime')} 
                />
                <img 
                    src={crave} 
                    alt="Crave"
                    className={`streaming__btn-container-item ${selected === 'crave' ? 'selected' : ''}`}
                    onClick={() => handleSelect('crave')} 
                />
                <img 
                    src={disney} 
                    alt="Disney"
                    className={`streaming__btn-container-item ${selected === 'disney' ? 'selected' : ''}`}
                    onClick={() => handleSelect('disney')} 
                />
            </div>
        </div>
    )
}

export default SelectStreaming;
