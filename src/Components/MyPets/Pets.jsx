import React from "react";

const Pet = (props) => {
    return(
        <div>
            <h2>{props.FullName}</h2>
            <img style={{width: '200px', height: '200px'}} src={props.Photo} alt="Фото улюбленця" />
            <p><strong>Вид:</strong> {props.Kind}</p>
            <p><strong>Порода:</strong> {props.Breed}</p>
            <p><strong>Стать:</strong> {props.Sex}</p>
            
        </div>
    )
}
export default Pet;