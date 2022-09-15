import React from "react";
import style from './WorksTable.module.css';
import WorksHead from "./WorkHead/WorkHead";
import WorkItem from "./WorkItem/WorkItem";
import PropTypes from "prop-types";
import {changeVisible} from "../../../../../../features/worksTable/worksTable";
import {connect} from "react-redux";


class WorksTable extends React.Component{

    render() {
        const {worksHead, worksData, visibleTable, removeItem} = this.props
        return (
            <div>
                {visibleTable && worksData.length &&  (
                    <>
                        <div className={style.headItem}>
                            {worksHead.map(({column, title}, index) => {
                                    return <WorksHead
                                        key={index}
                                        column={column}
                                        title={title}
                                        index={index}
                                    />
                                }
                            )}
                        </div>
                        <div>
                            {worksData.map(({work, dolsnost, data, id}, index) =>  {
                                let lesha = style.dataItem2;
                                let evgeniy = index + 1;
                                if (index %2 !== 0) {
                                    lesha = lesha + ' ' + style.odd
                                    evgeniy = `#${evgeniy}`
                                } else {
                                    lesha = lesha + ' ' + style.even
                                    evgeniy = `*${evgeniy}`
                                }
                                return (
                                    <WorkItem
                                        key={id}
                                        lesha={lesha}
                                        index={index}
                                        evgeniy={evgeniy}
                                        work={work}
                                        dolsnost={dolsnost}
                                        data={data}
                                        removeItem={removeItem}
                                    />
                                )
                            })}
                        </div>
                    </>
                ) ||  (
                    <div>Нет данных для отображения!</div>
                )}
            </div>

        )
    }
}
WorksTable.propTypes = {
    worksHead: PropTypes.array.isRequired,
    worksData: PropTypes.array.isRequired,
    field: PropTypes.string,
    hideColumn: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired
}


function mapStateToProps(state) {
    return {
        visibleTable: state.worksTable.visible,
        hideColumn: state.worksTable.hideColumns
    }
}

export default connect(mapStateToProps)(WorksTable)
