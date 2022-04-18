import React from 'react';
import { useState } from 'react';
import '../stylesheets/input.css';


function InputTextarea(props){
    
    const [input, setInput] = useState(String());

    const setChange = e => {
        
        setInput(e.target.value);

        props.onChange(input);
    }

    return(
        <textarea 
            className=''
            cols={20} 
            rows={10}
            onChange={setChange}
            placeholder='Write here...'></textarea>
    );
}

export default InputTextarea;