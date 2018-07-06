import React from "react";
import "./Saved.css";

const Saved = props => (
<div className="allOfTheSavedContent">
<h4>YOUR SAVED ARTICLES</h4>
    <div className="savedArticles">
        <div className="articleList">
            <h6> {props.title}
                <button id={props.id} className="btn btn-primary savedAlready">Delete</button>
            </h6>
        </div>
    </div>
</div>
);

export default Saved;