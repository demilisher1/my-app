import React from "react";
import style from './WorkItem.module.css'

class WorkItem extends React.Component {

    clickDeliteDataItem = () => {
        this.props.removeItem(this.props.index)
    }

    render() {
        return (
                 <div className={this.props.lesha} onClick={this.clickDeliteDataItem}>
                     <div>{this.props.evgeniy}</div>
                     <div className={style.work}>{this.props.work}</div>
                     <div className={style.dolsnost}>{this.props.dolsnost}</div>
                     <div className={style.data}>{this.props.data}</div>
                 </div>
        )
    }
}

export default WorkItem;