import React from 'react';
import classes from './title.module.css';
const Title = (props) => {
    return (
        <div>
            <div className={classes.title} >
                <h1 className={classes.part1} >Welcome To</h1>
                <h1 className={classes.part2}>CAP</h1>
            </div>
            <div>
                <p>Managing tasks has never been this easy</p>
            </div>
        </div>
    );
}
 
export default Title;