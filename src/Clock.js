import {useEffect, useState} from 'react';
import './Clock.css';

function getTime(d){

    const ret ={

    };

    const secs = d.getSeconds().toString().padStart(2,'0');          
    ret.firstSecond=secs.charAt(0);
    ret.secondSecond=secs.charAt(1);
        
    const mins = d.getMinutes().toString().padStart(2,'0');
    ret.firstMinute=mins.charAt(0);
    ret.secondMinute=mins.charAt(1);
    
    const hours = d.getHours().toString().padStart(2,'0');    
    ret.firstHour=hours.charAt(0);
    ret.secondHour=hours.charAt(1);

    return ret;
}

function Clock({country, timezone}){

        const t = Date.now()+3600*timezone*1000;
        const dateIni = new Date(t);
        const defaultTime = getTime(dateIni);

        const [date, setDate] = useState(dateIni);
         //second
         const [firstSecond, setFirstSecond] = useState(defaultTime.firstSecond);
         const [secondSecond, setSecondSecond] = useState(defaultTime.secondSecond);
         //second
         const [firstMinute, setFirstMinute] = useState(defaultTime.firstMinute);
         const [secondMinute, setSecondMinute] = useState(defaultTime.secondMinute)
          //second
          const [firstHour, setFirstHour] = useState(defaultTime.firstHour);
          const [secondHour, setSecondHour] = useState(defaultTime.secondHour)

        useEffect(() => {
           const interval = setInterval(() => {
                const time = date.getTime()+1000;
                const defaultTime = getTime(dateIni);
                
                const d = new Date(time);
                
                      
                setFirstSecond(defaultTime.firstSecond);
                if (secondSecond !== defaultTime.secondSecond) {
                    setSecondSecond(defaultTime.secondSecond)
                };
                
                if(firstMinute !== defaultTime.firstMinute) {
                    setFirstMinute(defaultTime.firstMinute)
                };        
                if (secondMinute !== defaultTime.secondMinute){
                    setSecondMinute(defaultTime.secondMinute)
                };
                
                if(firstHour !== defaultTime.firstHour){
                    setFirstHour(defaultTime.firstHour);
                }      
                if(secondHour !== defaultTime.secondHour){
                    setSecondHour(defaultTime.secondHour);
                }
                setDate(d)
            }, 1000);
            return () => {
                clearInterval(interval)
            };
        }, [date]);

   
        return (
            <div class="clock">
            <div class="hours">
              <div class="first">
                <div class="number">{firstHour}</div>
              </div>
              <div class="second">
                <div class="number">{secondHour}</div>
              </div>
            </div>
            <div class="tick">:</div>
            <div class="minutes">
              <div class="first">
                <div class="number">{firstMinute}</div>
              </div>
              <div class="second">
                <div class="number">{secondMinute}</div>
              </div>
            </div>
            <div class="tick">:</div>
            <div class="seconds">
              <div class="first">
                <div class="number">{firstSecond}</div>
              </div>
              <div class="second infinite">
                <div class="number">{secondSecond}</div>
              </div>
            </div>
          </div>
        )
      
      
}   


export default Clock;