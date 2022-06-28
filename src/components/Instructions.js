import React, { useState } from 'react';
import '../styles/Instructions.css'

const Instructions = () => {
    const [active, setActive] = useState(true);

    const handleClick = () => setActive(!active);

    const modal = (
        <div className='Modal'>
            <div className='Instructions'>
                <h3>Dota 2 Memory Game</h3>
                <p>Click on as many unique cards as possible! If you choose a previously selected card, the score will reset!</p>
                <button type='button' className='Button Start' onClick={handleClick}>Start</button>
            </div>
        </div>
    );

        return ((active) ? modal : null)
    
};

export default Instructions;