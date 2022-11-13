import React from 'react';
import { useState } from 'react';
import '../stylesheets/input.css';


function InputTextarea({ onChange }){
    
    const [input, setInput] = useState('');

    const setChange = (e) => {
        
        setInput(e.target.value);

        onChange(e.target.value);
    }

    return(
        <textarea 
            cols={20} 
            rows={10}
            onChange={setChange}
            value={input}
            placeholder='Write here...'
        >
        </textarea>
    );
}

export default InputTextarea;