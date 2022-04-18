import React from 'react';
/**
 * Me parece opcional pasar los datos desde App.js hasta Show.js. 
 * 
 * Simplemente, voy a trabajar los datos ingresados en App.js
 *  
 * 
 */
function Show({ text }){

    function word(text){
        let matches = text.match(/\S+/g);
        return matches ? matches.length : 0;
    }

    return(
        <p>There are {text.length < 1 ? 0 : text.length + 1} characters and {word(text)} words</p>
    );
}

export default Show;