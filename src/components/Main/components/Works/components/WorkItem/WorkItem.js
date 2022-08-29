import React from "react";
import style from './WorkItem.module.css'

class WorkItem extends React.Component {

    clickDeliteDataItem = () => {
        this.props.removeItem(this.props.index)
    }


    render() {
        return (
            <div className={this.props.lesha}  onClick={this.clickDeliteDataItem}>
                <div>
                    {!this.props.hideColumns.includes('number') && this.props.evgeniy}
                </div>
                <div>
                    {!this.props.hideColumns.includes('work') && this.props.work}
                </div>
                <div>
                    {!this.props.hideColumns.includes('dolsnost') && this.props.dolsnost}
                </div>
                <div>
                    {!this.props.hideColumns.includes('data') && this.props.data}
                </div>
            </div>
        )
    }
}

export default WorkItem;