import React from "react";
import style from  './HeadIInfo.module.css';
import ava from './../../../../static/images/IAm.jpg'


class HeadInfo extends React.Component {
    render() {
        return <div className={style.info}>
            <img src={ava} alt={'Здесь могла быть ваша реклама'} className={style.ava}/>
            <div className={style.infoText}>
                <div className={style.iam}>Алексей Шуляков</div>
                <div className={style.ic}>Я основатель сервисного центра <strong>IC-Parts</strong></div>
                <div className={style.love}>Я люблю микроэлектронику, пешие прогулки, изучать что-либо новое</div>
                <div className={style.social}>Мои социальные сети</div>
                <div className={style.ref}>
                <a href="https://vk.com/demilisher" target="_blank">Мой VK</a>
                </div>
            </div>
        </div>
    }
}

export default HeadInfo;