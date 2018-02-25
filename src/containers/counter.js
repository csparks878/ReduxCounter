import React, { Component } from "react";
import { connect } from "react-redux";

import "./counter.css";

import IncrementButton from "../components/incrementbutton";
import DecrementButton from "../components/decrementbutton";
import Number from "../components/number";

class Counter extends Component {
    render(){
        return(
            <div className="counter">
                <IncrementButton increment={this.props.incrementNumber}/>
                <DecrementButton decrement={this.props.decrementNumber}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementNumber: dispatch({type: "INCREMENT"}),
        decrementNumber: dispatch({type: "DECREMENT"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);