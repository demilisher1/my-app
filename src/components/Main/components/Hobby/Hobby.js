import React from "react";
import style from './Hobby.module.css';

class Hobby extends React.Component{
    render() {
        return <div className={style.yellow}>
            <div className={style.ho}>Мои хобби</div>
            <div className={style.list}>
                <div className={style.link}>
                    <a href="https://kttc.ru/wot/ru/user/demilisher/" target="_blank">WorldOfTanks</a>
                </div>
                <div className={style.UE}>UnrealEngine 5</div>
                <div className={style.walk}>Гулять</div>
                <div className={style.sport}>Спорт: Настольный тенис</div>
            </div>
        </div>
    }
}

export default Hobby;