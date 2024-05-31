import React from 'react';
import  {Link, Route} from 'react-router-dom';
import { useState } from 'react';
import filmIcon from '../../assets/icons/big-film.svg';

import "./HDChannels.scss";

function HDChannels() {
    const [selectedButton, setSelectedButton] = useState(null);

    const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

    return (
       <section className='hd-channels'>
              <p className="hd-channels__select" >Step 5</p>
              <div className='hd-channels__icon'>
                    <img src={filmIcon} alt="HD Channels" />
              </div>
              
              <h3 className='hd-channels__title' >HD Channels</h3>
              <p className='hd-channels__description'>Based on your preset budget, you will be able to select 5 HD channels.</p>
              <p className="hd-channels__select2" >Select 5</p>
                <div className='hd-channels__buttons'>
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedButton(index)}
                            className={selectedButton === index ? 'selected' : ''}
                        >
                            {button}
                        </button>
                    ))}
                </div>

       </section>
    );

}
export default HDChannels;