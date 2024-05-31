import './ButtonBundle.scss';
import {Link} from 'react-router-dom';

const ButtonBundle = () => {

    return (
        
        <div className="ButtonBundle">
            <Link to='/package'>
            <button className="ButtonBundle__btn">Create Your Bundle</button>
            </Link>
        </div>
     
    )
}

export default ButtonBundle;