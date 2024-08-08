import React from "react";

const MyInfo = (props) => {
    return(
        <div>
            <h2>{props.FullName}</h2>
            <img style={{width: '200px', height: '200px'}} src={props.Face} alt="My face" />
            <p><strong>Дата народження:</strong> {props.dateOfBirth}</p>
            <p><strong>Місце проживаня:</strong> {props.Location}</p>
            <p><strong>Телефон:</strong> {props.phone}</p>
            <p><strong>Еелктронна адреса:</strong> {props.Email}</p>
            <p><strong>Досвід:</strong> {props.experience}</p>
            <p><strong>Навички:</strong> {props.skills}</p>
            <br></br><br></br><br></br><br></br>
        </div>
    )
}
export default MyInfo;