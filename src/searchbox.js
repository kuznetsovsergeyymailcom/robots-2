import React from 'react';

const searchbox = ({searchfield, searchChange})=>{
    return (
        <div className="pa2">
            <input type="search" 
            placeholder="robot name" 
            onChange={searchChange}/>
        </div>
        
    );
}
export default searchbox;