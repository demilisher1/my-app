import React from "react";
import style from './WorkItem.module.css'
import {connect} from "react-redux";
import {removeItem} from "../../../../../../../store/worksTableSlice/worksTableSlice";

class WorkItem extends React.Component {

    clickDeliteDataItem = () => {
        this.props.removeItem()
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

function mapStateToProps(state, props) {
    return {
        hideColumns: state.worksTable.hideColumns,}
}

function mapDispatchToProps(dispatch, {index}) {
    return {
       removeItem: () => dispatch(removeItem({index}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkItem)