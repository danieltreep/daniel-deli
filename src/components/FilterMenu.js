import React from 'react';

export default function FilterMenu() {
    return (
        <div className='filterMenu'>
            <div className='filterTerm'>
                <input type={"checkbox"} id={"dairy"}></input>
                <label htmlFor={"dairy"}>Dairy</label>
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"fruit"}></input>
                <label htmlFor={"fruit"}>Fruit</label>  
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"vegetable"}></input>
                <label htmlFor={"vegetable"}>Vegetable</label>  
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"drinks"}></input>
                <label htmlFor={"drinks"}>Drinks</label>           
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"fish"}></input>
                <label htmlFor={"fish"}>Fish</label>    
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"drinks"}></input>
                <label htmlFor={"drinks"}>Drinks</label> 
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"fish"}></input>
                <label htmlFor={"fish"}>Fish</label>
            </div>
            
        </div>
        

        
    ) 
}