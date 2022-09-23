import React from "react";
import style from './Contact.module.css';
import FormContact from "./components/FormContact";

class Contact extends React.Component{
    render() {
        return <div className={style.contact}>
            <div className={style.call}>Связаться со мной</div>
            <FormContact/>
            </div>
    }
}

export default Contact;