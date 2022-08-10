import React from "react";
import style from './WorkHead.module.css'

class WorkHead extends React.Component{

    render() {
        return (
            <div>
                <div>{this.props.value}</div>
            </div>
        )
    }
}

export default WorkHead;