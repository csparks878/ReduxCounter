import React, { Component } from "react";

const IncrementButton = (props) => {
    return(
        <button type="button" onClick={props.increment}>Increment</button>
    )
}

export default IncrementButton;