import {useState} from 'react';
import React from 'react';
import Calendar from 'react-calendar'; 

export default function CalendarApp(){
    const [date, setDate] = useState(new Date())
    return (
     <div className="app">
       <div className="react-calendar, center-screen">
         <Calendar onChange={setDate} value={date}/>
       </div>
     </div>
      )
    
    }