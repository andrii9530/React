import React from "react";

const FavoriteMovie = (props) => {
    return(
        <div>

            <h2>{props.title}</h2>
            <img style={{width: '300px', height: '300px'}} src={props.poster} alt="Афіша фільму" />
            <p><strong>Режисер:</strong> {props.director}</p>
            <p><strong>Рік випуску:</strong> {props.releaseYear}</p>
            <p><strong>Кіностудія:</strong> {props.studio}</p>
            <p><strong>Опис:</strong> {props.description}</p>
            <br></br><br></br><br></br><br></br>
        </div>
    )
}
export default FavoriteMovie;