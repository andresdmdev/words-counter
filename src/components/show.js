import React from 'react';

function Show({ text }){

    function word(text){
        let matches = text.match(/\S+/g);
        return matches ? matches.length : 0;
    }

    return(
        <p>There are {text.length < 1 ? 0 : text.length} characters and {word(text)} words</p>
    );
}

export default Show;