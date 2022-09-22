import React from "react";
import style from './FormContact.module.css'


class FormContact extends React.Component{
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default FormContact;