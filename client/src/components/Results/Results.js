import React from "react";
import "./Results.css";

const Results = props => (
    <div id="articleInfo">
        <h4>{props.title} <button id="saveButton" type="submit" className="btn btn-info">Save</button></h4>
        
    </div>
);

export default Results;