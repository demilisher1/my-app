import React from "react";
import style from './WorkItem.module.css'
import {connect} from "react-redux";
import {removeItem} from "../../../../../../../store/worksTableSlice/worksTableSlice";

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

function mapStateToProps(state) {
    return {
        hideColumns: state.worksTable.hideColumns,
    }
}
// Не понял как сюда попадает индек и почему я должен пользоваться фигурными скобками,
// как в dispatch(removeItem({index})) попадает индекс из стата
function mapDispatchToProps(dispatch, {index}) {
    return {
       removeItem: () => dispatch(removeItem({index}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkItem)