import {combineReducers} from 'redux'
import color from './modules/color'
import count from './modules/count'
import animal from './modules/animal'

export default combineReducers({
    //이름 : 리듀서 파일
    colorReducer : color,
    countReducer : count,
    animalReducer : animal
})