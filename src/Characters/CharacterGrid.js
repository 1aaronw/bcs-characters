import React from "react";

const CharacterGrid = ({items}) => {
    return (
        <div>
            {items.map(item => (
                <h1 key={item.char_id}>{item.name}</h1>
            ))}
        </div>
    )
}
export default CharacterGrid