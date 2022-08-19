import React from "react";
import style from './Works.module.css';
import WorkItem from "./components/WorkItem/WorkItem";
import WorksHead from "./components/WorkHead/WorkHead";

class Works extends React.Component {

    state = {
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

        container: true


    };

    removeItem = (index) => {
         let arr = [...this.state.data];

         arr.splice(index, 1)

         this.setState({
             data: arr
         })
    };

    removeCollumHead = (index, column) => {
        let hideColumns = [...this.state.hideColumns];

        hideColumns.push(column);

        this.setState({
            hideColumns: hideColumns,
        })
    };
    ShowAndHide = () => {
        this.setState({
                container:!this.state.container
            }
        )
    }

    render() {
        const {head, data} = this.state;
        const SowHide = this.state.container
        return (

            <div className={style.green}>
                <button onClick={this.ShowAndHide}>{SowHide?'Скрыть список':'Показать список'}</button>
                {SowHide && (
                    <>
                    <div className={style.skill}>Опыт работы</div>
                    <div className={style.headItem}>
                    {head.map(({column, title}, index) => {
                            if(!this.state.hideColumns.includes(column)) {
                                return <WorksHead
                                    key={index}
                                    column={column}
                                    title={title}
                                    index={index}
                                    removeCollumHead={this.removeCollumHead}
                                    hideColumns={this.state.hideColumns}
                                />
                            }
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
                                        hideColumns={this.state.hideColumns}
                                    />
                                )
                            })}
                        </div>
                    </>
                )}
            </div>
        )
    }
}


export default Works;