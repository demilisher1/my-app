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

        function FIO({firstName, lastName, middleName}) {
            debugger;
            return `${firstName} ${lastName} ${middleName}`
        }

        let user = {
            get firstName() {
                debugger;
                return this._firstName || 'текст по дефолту';
            },
            set firstName(value) {
                debugger;
                if(value.length > 0){
                    this._firstName = value;
                    this.fio = FIO(this)
                } else {
                    this.validUser = false;
                }

            },
            get lastName() {
                return this._lastName || 'текст по дефолту';
            },

            set lastName(value) {
                if(value.length > 0){
                    this._lastName = value;
                    this.fio = FIO(this)
                } else {
                    this.validUser = false;
                }
            },
            get middleName() {
                return this._middleName || 'текст по дефолту';
            },

            set middleName(value) {
                this._middleName = value;
                if(value.length > 0){
                    this._middleName = value;
                    this.fio = FIO(this)
                } else {
                    this.validUser = false;
                }
            },

            validUser: true,
            fio: 'пока тут ничего нет'
        };

        user.firstName = 'Алексей';
        debugger;
        user.lastName = 'Шуляков';

        user.middleName = 'Юрич';

        user.firstName = '';
        debugger;

        user.lastName = '';

        user.middleName = '';

        console.log(user.fio)

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