import React, { useEffect} from 'react';
import classes from './Cockpit.css'
const cockpit = (props) => {
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        //http request...
        const timer = setTimeout(()=> {
            alert('saved data to cloud!');
        },1000);
        return ()=> {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]);//[props.persons] when use the persons; [] only run one time at the beginning

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    })
    const assignedClasses = [];
    let btnClass="";
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)//classes = ['red']

    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)//classes = ['red','bold']

    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>

    )
}
export default cockpit;