import React from "react";
import {removeColumnHead} from "../../../../../../../store/worksTableSlice/worksTableSlice";
import {connect} from "react-redux";

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
        const { showText  } = this.props;
        const {colors, changeColors} = this.state;

        const style = {
            background: colors[changeColors]
        }

        return (
            <div>
                <div style={style}>{this.props.title}</div>
                <button onClick={this.clickCollumHead}>
                    {showText ? 'Показать' : 'Скрыть'}
                </button>
                <button onClick={this.clickChangeColors}> Смени цвет
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, {column}) =>({
    hideColumns: state.worksTable.hideColumns,
    showText: state.worksTable.hideColumns.includes(column),
})

const mapDispatchToProps = (dispatch, {column}) => ({
    removeColumnHead: () => dispatch(removeColumnHead({column})),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkHead);