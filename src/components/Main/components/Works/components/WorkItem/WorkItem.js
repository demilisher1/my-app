import React from "react";
import style from './WorkItem.module.css'

class WorkItem extends React.Component {

    clickDeliteDataItem = () => {
        this.props.removeItem(this.props.index)
    }


    render() {
        return (
            <div className={this.props.lesha}  onClick={this.clickDeliteDataItem}>
                {!this.props.hideColumns.includes('number') && (
                    <div>{this.props.evgeniy}</div>
                )}
                {!this.props.hideColumns.includes('work') && (
                    <div className={style.work}>{this.props.work}</div>
                )}
                {!this.props.hideColumns.includes('dolsnost') && (
                    <div className={style.dolsnost}>{this.props.dolsnost}</div>
                )}
                {!this.props.hideColumns.includes('data') && (
                    <div className={style.data}>{this.props.data}</div>
                )}
            </div>
        )
    }
}

export default WorkItem;