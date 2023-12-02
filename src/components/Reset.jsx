import React from "react";

import "./Reset.css";

const Reset = ({ onClick }) => {

    return (
        <div className="app__table-reset" onClick={onClick}>
            <img src={require("../assets/reset.png")} alt="reset" />
        </div>
    );
};

export default Reset;
