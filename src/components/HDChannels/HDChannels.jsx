import React from 'react';
import  {Link, Route} from 'react-router-dom';
import { useState } from 'react';
import filmIcon from '../../assets/icons/big-film.svg';
import MultiSelect from "../MultiSelect/MultiSelect";

import "./HDChannels.scss";

function HDChannels() {

    const channels = [
        { value: "bbc", label: "BBC" },
        { value: "cnn", label: "CNN" },
        { value: "fox-news", label: "Fox News" },
        { value: "al-jazeera", label: "Al Jazeera" },
        { value: "nbc", label: "NBC" },
        { value: "abc", label: "ABC" },
        { value: "cbs", label: "CBS" },
        { value: "msnbc", label: "MSNBC" },
        { value: "cnbc", label: "CNBC" },
        { value: "bloomberg", label: "Bloomberg" },
        { value: "espn", label: "ESPN" },
        { value: "sky-sports", label: "Sky Sports" },
        { value: "fox-sports", label: "Fox Sports" },
        { value: "nfl-network", label: "NFL Network" },
        { value: "nba-tv", label: "NBA TV" },
        { value: "mlb-network", label: "MLB Network" },
        { value: "nhl-network", label: "NHL Network" },
        { value: "hbo", label: "HBO" },
        { value: "netflix", label: "Netflix" },
        { value: "amazon-prime", label: "Amazon Prime" },
      ];
    const handleChannelChange = (selectedChannels) => {
        console.log("Selected channels:", selectedChannels);
    };

    return (
       <section className='hd-channels'>
              <p className="hd-channels__select" >STEP 5</p>
              <div className='hd-channels__icon'>
                    <img src={filmIcon} alt="HD Channels" />
              </div>

              <h2 className='hd-channels__title' >HD Channels</h2>
              <p className='hd-channels__description'>Based on your preset budget, you will be able to select 5 HD channels.</p>
              <p className="hd-channels__select2" >SELECT 5</p>
              <div className='hd-channels__select-channels'>
                <MultiSelect
                        options={channels}
                        placeholder="Select HD channels..."
                        onChange={handleChannelChange}
                    />
              </div> 


       </section>
    );
}

export default HDChannels;