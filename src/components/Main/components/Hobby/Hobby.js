import React from "react";
import style from './Hobby.module.css';

class Hobby extends React.Component{
    state = {
        item: [
            {
                hobby: "UnrealEngine",
            },
            {
                hobby: "Гулять"
            },
            {
                hobby: "Спорт: Настольный тенис"
            },
            {
                hobby: "WorldOfTanks"
            },

        ]
    }
    render() {
        const {item} = this.state;
        return <div className={style.yellow}>
            <div className={style.ho}>Мои хобби</div>
            <div className={style.list}>
                {item.map(item => (
                    <div key={item.hobby} value={item.hobby}>
                        {item.hobby}
                    </div>
                ))}
            </div>
        </div>
    }
}

export default Hobby;