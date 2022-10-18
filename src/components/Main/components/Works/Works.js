import React from "react";
import {connect} from 'react-redux'
import style from './Works.module.css';
import WorksFilter from "./components/WorksFilter/WorksFilter";
import WorksTable from "./components/WorksTable/WorksTable";
import Button from "../../../common/Button/Button";
import {changeVisible, setIncomingData} from "../../../../store/worksTableSlice/worksTableSlice";


class Works extends React.Component {

    changeVariableTable = () => {
        this.props.changeVisible()
    };

    componentDidMount() {
        this.props.setIncomingData()
    }

    render() {
        const {visibleTable} = this.props;
        const test1 = {
            abs: '123',
            lesha: 'привет'
        }

        let test2 = {
            qwe: '1234555',
            abb: 'try'
        }
        let test3 = {
            abs: '123',
            lesha: 'привет',
            qwe: '1234555',
            abb: 'try'
        }

        function test (data, fields) {

// let a = Object.entries(data);
// for (let value of a) {
//     debugger;
//     if (!value.includes(fields)) {
//     }
// }

            // for (let key in data) {
            //     // debugger;
            //     if (fields.includes(key)) {
            //
            //     }
            // }

        }

        const result = test(test3, ['lesha', 'abb']);

// const result2 = test3.removeFields(['lesha', 'abb']);



        console.log(result);
// console.log(result2);
// {
//     abs: '123',
//     qwe: '1234555',
// }

        return (
            <div className={style.green}>
                <Button handleChange={this.changeVariableTable}>
                    {visibleTable?'Скрыть список':'Показать список'}
                </Button>
                <h2 className={style.skill}>Опыт работы</h2>
                <WorksFilter/>
                <WorksTable/>
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