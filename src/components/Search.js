import React from 'react';

export default function Search(props) {
    return (
        <input 
            type={'text'} 
            placeholder={'Search...'} 
            className={"border input"} 
            onChange={(e) => props.search(e.target.value)}
        />
    ) 
}