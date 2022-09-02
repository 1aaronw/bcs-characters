import React from "react";
//gets name, nickname, portrayal,img
const CharacterGrid = ({items}) => {
    return (
        <div className="cards">
            {items.map(item => (
                <div className="card"> 
                    <ul>
                        <li>
                            <div className="character-card">
                                <img src ={item.img} className="img-cards"alt="image" />
                            </div>
                        </li>
                        <div class="text">
                            <li>
                                {item.name}
                            </li>
                            <li>
                                ({item.nickname})
                            </li>
                            <li>
                                Portrayed By: {item.portrayed}
                            </li>
                        </div>
                        
                    </ul>
                </div>
                
               
            ))}

        </div>
    )
}
export default CharacterGrid