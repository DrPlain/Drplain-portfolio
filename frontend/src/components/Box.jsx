import { useState } from "react";

export default function Box({ on, toggle, id }) {

    const boxColor = on ? 'maroon' : 'grey';
    return (
        <>
            {/* <h2>What is your name?</h2> */}
            <div className="box" 
            style={{backgroundColor: boxColor, width: '100px', height: '100px', margin: '5px', display: 'inline-block'}}
            onClick={toggle}>
                {}
        </div>
        </>
        
    );
}