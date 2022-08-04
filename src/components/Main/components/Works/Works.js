import React from "react";
import style from './Works.module.css';

class Works extends React.Component{
    state = {
        head: [
         'Место работы',
            'Должность',
            'Дата работы'
        ],
        data: [
            {work: 'ООО ММС',
                dolsnost: 'Мастер по изготовлению кухонных гарнитуров',
                data: 2003 - 2004
            },
            {work: 'ООО Мастер ПАК',
                dolsnost: 'Оператор экструзионного оборудования',
                data: 2004 - 2005
            },
            {work: 'ЗАО Инмарко',
                dolsnost: 'Грузчик в холодном цехе',
                data: 2005 - 2006
            },
            {work: 'ЗАО Манрос-М',
                dolsnost: 'Грузчик в теплом складе',
                data: 2003 - 2004
            },
            {work: 'ЗАО Экоил',
                dolsnost: 'Оператор реакторного блока каталитического дигидрирования',
                data: 2007 - 2007
            },
            {work: 'ООО Никс',
                dolsnost: 'Инженер ==> далле Начальник СЦ',
                data: 2007 - 2009
            },
            {work: 'Одноименное ИП',
                dolsnost: 'Директор ==> Инженер микроэлектронщик',
                data: 2011 - 2022
            },
            {work: 'Ученик программиста',
                dolsnost: 'Принеси-подай',
                data: '2022 - now'
            },
        ],
    };

    render() {
        return <div className={style.green}>
            <div className={style.skill}>Опыт работы</div>
        </div>
    }
}

export default Works;