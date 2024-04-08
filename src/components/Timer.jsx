import { useState } from "react"

export default function Timer(){
const [hours,setHours]=useState(0);
const [minutes,setMinutes]=useState(0);
const [seconds,setSeconds]=useState(0);
const increaseHour=()=>{
    setHours(hours+1);
};
const decreaseHour=()=>{
    setHours(hours-1);
}
const increaseMinutes=()=>{
    
    if(minutes===59){
     setHours(hours+1)
     setMinutes(0);
     return;
    }
    setMinutes(minutes+1);
    
}
const decreaseMinutes=()=>{
    if(minutes===0)
    {
        if(hours===0)
        return;
        setHours(hours-1);
        setMinutes(59);
        return;
    }
    setMinutes(minutes-1);
}
const increaseSeconds=()=>{
    if(seconds===59)
    {
        increaseMinutes();
        setSeconds(0);
        return;
    }
    setSeconds(seconds+1);
}
const decreaseSeconds=()=>{
    if(seconds===0)
    {
        if(minutes===0)
        {
            if(hours===0)return;
            setHours(hours-1);
            setMinutes(59)
            setSeconds(59);
            return;
        }
        setMinutes(minutes-1);
        setSeconds(59);
        return;

    }
    setSeconds(seconds-1);
};


    return (
    <div>Timer
    <button onClick={increaseHour}>+1 hour</button>
    <button onClick={decreaseHour}>-1 hour</button>
    <button onClick={increaseMinutes}>+1 Minutes</button>
    <button onClick={decreaseMinutes}>-1 Minutes</button>
    <button onClick={increaseSeconds}>1 second</button>
    <button onClick={decreaseSeconds}>1 second</button>
    </div>
    )
}

