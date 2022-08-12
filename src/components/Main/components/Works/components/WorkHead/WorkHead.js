import React from "react";
// import style from './WorkHead.module.css'

class WorkHead extends React.Component{

    clickCollumHead = () => {
        console.log(this.props)
        this.props.removeCollumHead(this.props.index)
        this.props.removeCollumData()
    }

      render() {
        return (
            <div>
                <div >{this.props.value}</div>
                <button onClick={this.clickCollumHead}>x</button>
            </div>
        )
    }
}

export default WorkHead;