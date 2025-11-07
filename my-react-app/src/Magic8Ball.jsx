import React, { useState } from 'react'; 

function MagicEight() {
    const responses = [
        "Yes, definitely",
        "Ask again later",
        "Cannot predict now",
        "My sources say no",
        "Outlook good",
        "Very doubtful",
    ];

    const [currentPhase, setCurrentPhase] = useState(''); 

    const pickOne = () => {
        const randomINdex = Math.floor(Math.random() * responses.length); 
        setCurrentPhase(responses[randomINdex]); 
    }; 
    
    return (
        <div>
            <button onClick={pickOne}>Get Fortune</button>
            {currentPhase && <p>{currentPhase}</p>}
        </div>
    );
}

export default MagicEight;