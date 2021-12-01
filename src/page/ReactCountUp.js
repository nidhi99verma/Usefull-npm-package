import React from 'react';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';

export default function ReactCountUp() {

    const { countUp, start, pauseResume, reset, update } = useCountUp({
        duration: 5,
        end: 10000,
        startOnMount: false
    })
    
    return (
        <div className='App' style={{marginTop: '20px'}}>
            <div>
                <h1>Go : {countUp}</h1>
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={pauseResume}>Pause/Resume</button>
                <button onClick={() => update(2000)}>Update to 2000</button>
            </div>
            {/* <h1>
                <CountUp end={200} />
            </h1>
            <h1>
                <CountUp end={200} duration={5} />
            </h1>
            <h1>
                <CountUp start={500} end={1000} duration={5} />
            </h1>
            <h1>
                <CountUp end={1000} duration={5} prefix='$' decimals={2} />
            </h1>
            <h1>
                <CountUp end={1000} duration={5} suffix='USD' decimals={2} />
            </h1> */}
        </div>
    )
}

// package have some bugs