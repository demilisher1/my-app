import React from "react";
import {connect} from 'react-redux'
import style from './Works.module.css';
import WorksFilter from "./components/WorksFilter/WorksFilter";
import WorksTable from "./components/WorksTable/WorksTable";
import Button from "../../../common/Button/Button";
import {changeVisible, setIncomingData} from "../../../../store/worksTableSlice/worksTableSlice";


class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // head: [
            //     {
            //         title:  'Порядковый номер',
            //         column: 'number'
            //     },
            //     {
            //         title:  'Место работы',
            //         column: 'work'
            //     },
            //     {
            //         title:  'Должность',
            //         column: 'dolsnost'
            //     },
            //     {
            //         title:  'Дата работы',
            //         column: 'data'
            //     },
            //
            // ],
            // data: [
            //     {
            //         work: 'ООО ММС',
            //         dolsnost: 'Мастер по изготовлению кухонных гарнитуров',
            //         data: "2003 - 2004",
            //         id: 4
            //     },
            //     {
            //         work: 'ООО Мастер ПАК',
            //         dolsnost: 'Оператор экструзионного оборудования',
            //         data: "2004 - 2005",
            //         id: 1
            //     },
            //     {
            //         work: 'ЗАО Инмарко',
            //         dolsnost: 'Грузчик в холодном цехе',
            //         data: "2005 - 2006",
            //         id: 2
            //     },
            //     {
            //         work: 'ЗАО Манрос-М',
            //         dolsnost: 'Грузчик в теплом складе',
            //         data: "2006 - 2006",
            //         id: 3
            //     },
            //     {
            //         work: 'ЗАО Экоил',
            //         dolsnost: 'Оператор реакторного блока каталитического дигидрирования',
            //         data: "2007 - 2007",
            //         id: 5
            //     },
            //     {
            //         work: 'ООО Никс',
            //         dolsnost: 'Инженер ==> далле Начальник СЦ',
            //         data: "2007 - 2009",
            //         id: 6
            //     },
            //     {
            //         work: 'Одноименное ИП',
            //         dolsnost: 'Директор ==> Инженер микроэлектронщик',
            //         data: "2011 - 2022",
            //         id: 7
            //     },
            //     {
            //         work: 'Ученик программиста',
            //         dolsnost: 'Да мой господин))',
            //         data: '2022 - now',
            //         id: 8
            //     },
            // ],
        }
        // this.state.incomingData = [...this.state.data]
    }

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
               const {visibleTable, head, data} = this.props;
        return (
            <div className={style.green}>
                <Button handleClick={this.changeVariableTable}>
                    {visibleTable?'Скрыть список':'Показать список'}
                </Button>
                <h2 className={style.skill}>Опыт работы</h2>
                <WorksFilter
                    worksHead={head}
                    incomingData={this.state.incomingData}
                    changeDataState={this.changeDataState}
                />
                <WorksTable
                    // worksHead={head}
                    // worksData={data}
                    removeItem={this.removeItem}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        visibleTable: state.worksTable.visible,
        hideColumns: state.worksTable.hideColumns,
        head: state.worksTable.head,
        data: state.worksTable.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeVisible: (event) => dispatch(changeVisible()),
        setIncomingData: (event) => dispatch(setIncomingData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Works)