import React from "react";
import style from './Obout.module.css';

class Obout extends React.Component{
    render() {
        return <div className={style.red}>
            <div className={style.I}>Обо мне</div>
            <div className={style.oboutMe}>
                <a target="_blank" href="AboutMe.html">Моя история</a>
            </div>
        </div>
    }
}

export default Obout;