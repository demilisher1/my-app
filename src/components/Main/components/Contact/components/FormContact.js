import React from "react";
import style from './FormContact.module.css'
import Label from "../../../../common/Label/Label";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

class FormContact extends React.Component{
    state = {
        nameValue: '',
        emailValue: '',
    }

    handleSubmit = (event) => {
        alert(this.state.nameValue + ' Вам поступит письмо на почту ' +  this.state.emailValue );
        event.preventDefault();
    }

    handleChange = ( value, field) => {
        this.setState({
            [field]: value
        })
    }

    onFocus = (event) => {
        // console.log(event)

    }

    render() {
        const {nameValue, emailValue} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
              <div>
                  <Label >
                      <Input
                          theme={'formContactInput'}
                          onFocus={this.onFocus}
                          field="nameValue"
                          value={nameValue}
                          handleChange={this.handleChange}
                          placeholder="Введите ваше имя..."
                      />
                  </Label>
                  <Label >
                      <Input
                          theme={'formContactInput'}
                          validate={false}
                          type="email"
                          field="emailValue"
                          value={emailValue}
                          handleChange={this.handleChange}
                          placeholder="Введите ваш email..."
                      />
                  </Label>
              </div>
                <Label>
                    <textarea
                        cols="15" rows="2"
                        placeholder={'Ваш текст'}
                    ></textarea>
                </Label>
                <Button
                    theme={'secondaryDark' }
                    handleChange={this.handleChange}
                    type="submit"
                    value={'Связаться'}
                    />
            </form>
        );
    }
}

export default FormContact;