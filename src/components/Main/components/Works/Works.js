import React from "react";
import {connect} from 'react-redux'
import style from './Works.module.css';
import WorksFilter from "./components/WorksFilter/WorksFilter";
import WorksTable from "./components/WorksTable/WorksTable";
import Button from "../../../common/Button/Button";
import {changeVisible, setIncomingData} from "../../../../store/worksTableSlice/worksTableSlice";


class Works extends React.Component {

    removeItem = (index) => {
        let arr = [...this.state.data];

        arr.splice(index, 1)

        this.setState({
            data: arr
        })
    };

    changeDataState = (data) => {
        this.setState({
            data
        })
    }

    changeVariableTable = () => {
        this.props.changeVisible()
    };

 componentDidMount() {
     this.props.setIncomingData()
 }

    render() {
               const {visibleTable} = this.props;
        return (
            <div className={style.green}>
                <Button handleClick={this.changeVariableTable}>
                    {visibleTable?'Скрыть список':'Показать список'}
                </Button>
                <h2 className={style.skill}>Опыт работы</h2>
                <WorksFilter
                    changeDataState={this.changeDataState}
                />
                <WorksTable
                    removeItem={this.removeItem}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        visibleTable: state.worksTable.visible,
        incomingData: state.worksTable.incomingData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeVisible: (event) => dispatch(changeVisible()),
        setIncomingData: (event) => dispatch(setIncomingData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Works)