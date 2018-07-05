import React from "react";
import "./Results.css";

const Results = props => (
    <div id="articleInfo">
        <h4>{props.title}
        <button href="/api/saved" id="saveButton" type="submit" className="btn btn-info">Save</button>
        </h4>
        <p>{props.date} </p>
        <p>{props.url} </p>
    </div>
);

export default Results;