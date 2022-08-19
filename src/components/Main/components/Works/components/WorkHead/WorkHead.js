import React from "react";
import style from "../WorkItem/WorkItem.module.css";
// import style from './WorkHead.module.css'

class WorkHead extends React.Component{

    clickCollumHead = () => {
        this.props.removeCollumHead(this.props.index, this.props.column)
    }

    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <button onClick={this.clickCollumHead}>Удалить</button>
            </div>
        )
    }
}

export default WorkHead;