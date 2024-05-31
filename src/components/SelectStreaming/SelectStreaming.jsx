import './SelectStreaming.scss';
import netflix from '../../assets/images/netflix.png';
import prime from '../../assets/images/prime.png';
import crave from '../../assets/images/crave.png';
import disney from '../../assets/images/disney.png';
import bigCast from '../../assets/icons/big-cast.svg';


const SelectStreaming = () => {

    return (
           <div className='streaming'>
            <p className='streaming__step'>STEP 6</p>
            <img src={bigCast} alt='streaming-icon' className='streaming__icon'/>
            <h2 className='streaming__title'>Streaming</h2>
            <p className='streaming__description'>Based on your preset budget, you will be able to select 1 streaming service.</p>
            <label className='streaming__label'>SELECT ONE</label>
            <div className='streaming__btn-container'>
                <img src={netflix} />
                <img src={prime} />
                <img src={crave} />
                <img src={disney} />
            </div>
        </div>
    )
}

export default SelectStreaming;