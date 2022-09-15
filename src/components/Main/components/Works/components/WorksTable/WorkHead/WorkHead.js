import React from "react";
import {removeColumnHead} from "../../../../../../../features/worksTable/worksTable";
import {connect} from "react-redux";
// import style from './WorkHead.module.css'

class WorkHead extends React.Component {
    state = {
        colors: [
            'blue',
            'green',
            'aqua',
            'beige',
            'rgba(125, 134, 142, 1)',
            'white',
            '#e5ffe7'
        ],
        changeColors: null
    }

    clickCollumHead = () => {
        this.props.removeColumnHead();
    }
    clickChangeColors = () => {
            let currentColor = this.state.changeColors;
        if (currentColor === null || currentColor === this.state.colors.length -1) {
            currentColor = -1
        }
        currentColor ++

        this.setState({
            changeColors: currentColor
        })
    }

    render() {
        const {hideColumns, column} = this.props;
        const {colors, changeColors} = this.state;

        const style = {
            background: colors[changeColors]
        }

        return (
            <div>
                <div style={style}>{this.props.title}</div>
                <button onClick={this.clickCollumHead}>
                    {hideColumns.includes(column) ? 'Показать' : 'Скрыть'}
                </button>
                <button onClick={this.clickChangeColors}> Смени цвет
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    hideColumns: state.worksTable.hideColumns
})

const mapDispatchToProps = (dispatch, {column}) => ({
    removeColumnHead: () => dispatch(removeColumnHead({column})),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkHead);
