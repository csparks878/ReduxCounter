import React, { Component } from "react";

const DecrementButton = (props) => {
    return (
        <button type="button" onClick={props.decrement}>Decrement</button>
    )
}

export default DecrementButton;