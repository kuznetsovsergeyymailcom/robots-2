import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // if(true){
    //     return new Error("Hooo error!!");
    // }

    const cardComponent = robots.map((user, index)=>{
        return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>;            
    });

    return (
        <div>{cardComponent}</div>
    );
}

export default CardList;