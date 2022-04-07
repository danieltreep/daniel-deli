import React from 'react';

export default function FilterMenu() {
    return (
        <div className='filterMenu'>
            <div className='filterTerm'>
                <input type={"checkbox"} id={"dairy"}></input>
                <label for={"dairy"}>Dairy</label>
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"fruit"}></input>
                <label for={"fruit"}>Fruit</label>  
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"vegetable"}></input>
                <label for={"vegetable"}>Vegetable</label>  
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"drinks"}></input>
                <label for={"drinks"}>Drinks</label>           
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"fish"}></input>
                <label for={"fish"}>Fish</label>    
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"drinks"}></input>
                <label for={"drinks"}>Drinks</label> 
            </div>
            
            <div className='filterTerm'>
                <input type={"checkbox"} id={"fish"}></input>
                <label for={"fish"}>Fish</label>
            </div>
            
        </div>
        

        
    ) 
}