import React from "react";
import "./Results.css";

const Results = props => (
<div className="articleInfo">
    <div id={props.id}>
        <h4>{props.title}
        <button id={props.id} onClick={props.saveButton} className="btn btn-info saves">Save</button>
        </h4>
        <p>{props.date} </p>
        <p>{props.url} </p>
    </div>
</div>
);

export default Results;