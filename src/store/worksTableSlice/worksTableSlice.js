import { createSlice } from '@reduxjs/toolkit'

export const worksTableSlice = createSlice({
    name: 'worksTableSlice',
    initialState: {
        visible: true,
        data: [
            {
                work: 'ООО ММС',
                dolsnost: 'Мастер по изготовлению кухонных гарнитуров',
                data: "2003 - 2004",
                id: 4
            },
            {
                work: 'ООО Мастер ПАК',
                dolsnost: 'Оператор экструзионного оборудования',
                data: "2004 - 2005",
                id: 1
            },
            {
                work: 'ЗАО Инмарко',
                dolsnost: 'Грузчик в холодном цехе',
                data: "2005 - 2006",
                id: 2
            },
            {
                work: 'ЗАО Манрос-М',
                dolsnost: 'Грузчик в теплом складе',
                data: "2006 - 2006",
                id: 3
            },
            {
                work: 'ЗАО Экоил',
                dolsnost: 'Оператор реакторного блока каталитического дигидрирования',
                data: "2007 - 2007",
                id: 5
            },
            {
                work: 'ООО Никс',
                dolsnost: 'Инженер ==> далле Начальник СЦ',
                data: "2007 - 2009",
                id: 6
            },
            {
                work: 'Одноименное ИП',
                dolsnost: 'Директор ==> Инженер микроэлектронщик',
                data: "2011 - 2022",
                id: 7
            },
            {
                work: 'Ученик программиста',
                dolsnost: 'Да мой господин))',
                data: '2022 - now',
                id: 8
            },
        ],
        head: [
            {
                title:  'Порядковый номер',
                column: 'number'
            },
            {
                title:  'Место работы',
                column: 'work'
            },
            {
                title:  'Должность',
                column: 'dolsnost'
            },
            {
                title:  'Дата работы',
                column: 'data'
            },

        ],
        test: [
            {
                qwe:  'Порядковый номер123123',
                test123: 'lesha'
            },
            {
                qwe:  'Место работы13123',
                test123: 'shu'
            },
        ],
        hideColumns: [],
        incomingData: [],
    },


    reducers: {
        changeVisible: (state, action) => {
            state.visible = !state.visible;
        },

        setIncomingData: (state, action) => {
            state.incomingData = [...state.data]
        },

        removeColumnHead: (state, action) => {
            const column = action.payload.column
            const indexHC = state.hideColumns.indexOf(column);
            if(indexHC !== -1){
                state.hideColumns.splice(indexHC, 1)
            } else{
                state.hideColumns.push(column)
            }
        },

        removeItem: (state, action) => {
             let arr = [...state.data];
             const index = action.payload.index
            arr.splice(index, 1)
            state.data = arr
        },

        changeDataState: (state, action) => {

            state.data = action.payload.data
        },

    }
})

export const { changeVisible, removeColumnHead, setIncomingData, removeItem, changeDataState } = worksTableSlice.actions

export default worksTableSlice.reducer