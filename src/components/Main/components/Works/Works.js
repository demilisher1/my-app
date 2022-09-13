import React from "react";
import style from './Works.module.css';
import WorkItem from "./components/WorkItem/WorkItem";
import WorksHead from "./components/WorkHead/WorkHead";
import WorksFilter from "./components/WorksFilter/WorksFilter";

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

            hideColumns: [],

            visible: true,

        }

        this.state.incomingData = [...this.state.data]
    }

    removeItem = (index) => {
        let arr = [...this.state.data];

        arr.splice(index, 1)

        this.setState({
            data: arr
        })
    };

    removeCollumHead = (column) => {
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

    changeVariableTable = () => {
        this.setState({
            visible: !this.state.visible,
        })
    };

    filterIncomingData = (selectValue, searchValue) => {
        return this.state.incomingData.filter((item) => {
            if (!item[selectValue]) {
                return true
            } else {
                return item[selectValue].toLowerCase().includes(searchValue.toLowerCase())
            }
        })
    }

    render() {
        const {head, data, visible, hideColumns} = this.state;
        return (
            <div className={style.green}>
                <Button handleClick={this.changeVariableTable}>
                    {visible?'Скрыть список':'Показать список'}
                </Button>
                <h2 className={style.skill}>Опыт работы</h2>
                <WorksFilter
                    filterIncomingData={this.filterIncomingData}
                    worksHead={head}
                />
                {visible && data.length  && (
                    <>
                        <div className={style.headItem}>
                            {head.map(({column, title}, index) => {
                                    return <WorksHead
                                        key={index}
                                        column={column}
                                        title={title}
                                        index={index}
                                        removeCollumHead={this.removeCollumHead}
                                        hideColumns={hideColumns}
                                    />
                                }
                            )}
                        </div>
                        <div className={style.dataItem}>
                            {data.map(({work, dolsnost, data, id}, index) =>  {
                                let lesha = style.dataItem2;
                                let evgeniy = index + 1;
                                if (index %2 !== 0) {
                                    lesha = lesha + ' ' + style.odd
                                    evgeniy = `#${evgeniy}`
                                } else {
                                    lesha = lesha + ' ' + style.even
                                    evgeniy = `*${evgeniy}`
                                }

                                return (
                                    <WorkItem
                                        key={id}
                                        lesha={lesha}
                                        index={index}
                                        evgeniy={evgeniy}
                                        work={work}
                                        dolsnost={dolsnost}
                                        data={data}
                                        removeItem={this.removeItem}
                                        hideColumns={hideColumns}
                                    />
                                )
                            })}
                        </div>
                    </>
                ) ||  (
                    <div>Нет данных для отображения!</div>
                )}
            </div>
        )
    }
}


export default Works;