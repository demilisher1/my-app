import React from "react";
import style from './Contact.module.css';

class Contact extends React.Component{
    render() {
        return <div className={style.contact}>
            <div className={style.call}>Связаться со мной</div>
                <div className={style.row}>
                    <div className={style.formGroup}>
                        <label htmlFor="name">Ваше имя</label>
                        <input type="text" id="name" placeholder="Введите ваше имя..."/>
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="email">Ваш email</label>
                        <input type="text" id="email" placeholder="Введите ваш email..."/>
                    </div>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="text">Введите ваш текст</label>
                    <textarea id="text" cols="15" rows="2"></textarea>
                </div>
            <div>
                <input className={style.btn} type="submit" value="Связаться!"/>
            </div>
        </div>
    }
}

export default Contact;