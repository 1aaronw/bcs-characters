import React from "react";
//gets name, nickname, portrayal,img
const CharacterGrid = ({items}) => {
    return (
        <div className="cards">
            {items.map(item => (
                <>
                <ul>
                    <li>
                        <img src ={item.img} className="img-cards"alt="image" />
                    </li>
                    <li>
                        {item.name}
                     </li>
                    <li>
                        ({item.nickname})
                    </li>
                    <li>
                        Portrayed By: {item.portrayed}
                    </li>
                 </ul>
                </>
            ))}

        </div>
    )
}
export default CharacterGrid