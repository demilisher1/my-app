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
        hideColumns: []
    };

    removeItem = (index) => {
         let arr = [...this.state.data];

         arr.splice(index, 1)

         this.setState({
             data: arr
         })
    };

    removeCollumHead = (index, val) => {
        let arr = [...this.state.head];
        let hideColumns = [...this.state.hideColumns];

        arr.splice(index, 1);

        hideColumns.push(val.column);


        // const arr2 = this.state.data.map((value) => {
        //     delete value[val.column]; // отследить путь путь val в этот map
        //
        //     return value
        // });
        // debugger;
        this.setState({
            head: arr,
            hideColumns: hideColumns
        })
    };

    render() {
        const {head, data} = this.state;

        return (
            <div className={style.green}>
                <button>Очистить таблицу</button>
                <div className={style.skill}>Опыт работы</div>
                <div className={style.headItem}>
                    {head.map((value, index) =>
                        <WorksHead
                            key={index}
                            value={value}
                            index={index}
                            removeCollumHead={this.removeCollumHead}
                        />)}
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
            </div>
        )
    }
}


export default Works;