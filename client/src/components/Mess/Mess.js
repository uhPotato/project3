import React from "react";
import "./Mess.css";

const Mess = (props) => {
  return (
    <div className={props.className === "messes" ? "card messes" : "card resolvedMess"} id={props.id}>
      <div className="card-body">
        <img id="messImage" src={props.image} alt="sight"></img>
        <ul>
          <li>Title: {props.title}</li>
          <li>Location: {props.location}</li>
          <li>Level of Concern: {props.levelOfConcern}</li>
          <li>Reported: {props.timestamp}</li>
          {/* <li>Description: {props.description}</li> */}
        </ul>

      </div>
    </div>
  );
}
export default Mess;