import React from "react";
import style from './Works.module.css';
import {isLabelWithInternallyDisabledControl} from "@testing-library/user-event/dist/utils";

class Works extends React.Component{
    state = {
        head: [
            'Место работы',
            'Должность',
            'Дата работы'
        ],
        data: [
            {
                work: 'ООО ММС',
                dolsnost: 'Мастер по изготовлению кухонных гарнитуров',
                data: "2003 - 2004"
            },
            {
                work: 'ООО Мастер ПАК',
                dolsnost: 'Оператор экструзионного оборудования',
                data: "2004 - 2005"
            },
            {
                work: 'ЗАО Инмарко',
                dolsnost: 'Грузчик в холодном цехе',
                data: "2005 - 2006"
            },
            {
                work: 'ЗАО Манрос-М',
                dolsnost: 'Грузчик в теплом складе',
                data: "2006 - 2006"
            },
            {
                work: 'ЗАО Экоил',
                dolsnost: 'Оператор реакторного блока каталитического дигидрирования',
                data: "2007 - 2007"
            },
            {
                work: 'ООО Никс',
                dolsnost: 'Инженер ==> далле Начальник СЦ',
                data: "2007 - 2009"
            },
            {
                work: 'Одноименное ИП',
                dolsnost: 'Директор ==> Инженер микроэлектронщик',
                data: "2011 - 2022"
            },
            {
                work: 'Ученик программиста',
                dolsnost: 'Да мой господин))',
                data: '2022 - now'
            },
        ],
    };

    render() {
        const {head} = this.state;
        const {data} = this.state;

        return (
            <div className={style.green}>
            <div className={style.skill}>Опыт работы</div>
                <div className={style.headItem}>
                    {head.map(function (callBack, key) {
                        return <div key={key}>{callBack}</div>
                    })}
                </div>

                <div className={style.dataItem}>
                    {data.map(function ({work, dolsnost, data}, key) {
                        return (
                            <div key={key} className={style.dataItem2}>
                                <div className={style.work}>{work}</div>
                                <div className={style.dolsnost}>{dolsnost}</div>
                                <div className={style.data}>{data}</div>
                            </div>
                        )
                    })}
                </div>
        </div>
        )
    }
}


export default Works;