import React from "react";
import style from './Works.module.css';
import WorksFilter from "./components/WorksFilter/WorksFilter";
import WorksTable from "./components/WorksTable/WorksTable";
import Button from "../../../common/Button/Button";

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            head: [
                {
                    title:  'Порядковый номер',
                    column: 'number'
                },
                {
                    title:  'Место работы',
                    column: 'work'
                },
                {
                    title:  'Должность',
                    column: 'dolsnost'
                },
                {
                    title:  'Дата работы',
                    column: 'data'
                },

            ],
            data: [
                {
                    work: 'ООО ММС',
                    dolsnost: 'Мастер по изготовлению кухонных гарнитуров',
                    data: "2003 - 2004",
                    id: 4
                },
                {
                    work: 'ООО Мастер ПАК',
                    dolsnost: 'Оператор экструзионного оборудования',
                    data: "2004 - 2005",
                    id: 1
                },
                {
                    work: 'ЗАО Инмарко',
                    dolsnost: 'Грузчик в холодном цехе',
                    data: "2005 - 2006",
                    id: 2
                },
                {
                    work: 'ЗАО Манрос-М',
                    dolsnost: 'Грузчик в теплом складе',
                    data: "2006 - 2006",
                    id: 3
                },
                {
                    work: 'ЗАО Экоил',
                    dolsnost: 'Оператор реакторного блока каталитического дигидрирования',
                    data: "2007 - 2007",
                    id: 5
                },
                {
                    work: 'ООО Никс',
                    dolsnost: 'Инженер ==> далле Начальник СЦ',
                    data: "2007 - 2009",
                    id: 6
                },
                {
                    work: 'Одноименное ИП',
                    dolsnost: 'Директор ==> Инженер микроэлектронщик',
                    data: "2011 - 2022",
                    id: 7
                },
                {
                    work: 'Ученик программиста',
                    dolsnost: 'Да мой господин))',
                    data: '2022 - now',
                    id: 8
                },
            ],
            visible: true,
            hideColumns: []
        }
        this.state.incomingData = [...this.state.data]
    }

    removeColumnHead = (column) => {
        const hideColumns = [...this.state.hideColumns];
        const indexHC = hideColumns.indexOf(column);

        if(indexHC !== -1){
            hideColumns.splice(indexHC, 1)
        } else{
            hideColumns.push(column)
        }

        this.setState({
            hideColumns
        })
    };

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
        this.setState({
            visible: !this.state.visible,
        })
    };

    render() {
        const {head, data, visible, hideColumns} = this.state;
        return (
            <div className={style.green}>
                <Button handleClick={this.changeVariableTable}>
                    {visible?'Скрыть список':'Показать список'}
                </Button>
                <h2 className={style.skill}>Опыт работы</h2>
                <WorksFilter
                    worksHead={head}
                    incomingData={this.state.incomingData}
                    changeDataState={this.changeDataState}
                />
                <WorksTable
                    worksHead={head}
                    worksData={data}
                    hideColumn={hideColumns}
                    visible={visible}
                    removeColumnHead={this.removeColumnHead}
                    removeItem={this.removeItem}
                />
            </div>
        )
    }
}

export default Works;