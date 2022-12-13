
const UP = 'count/UP'
const DOWN = 'count/DOWN'
const RESET = 'count/RESET'

export const up = () => ({ type: UP})
export const down = () => ({ type: DOWN})
export const reset = () => ({ type: RESET})

const init = {count: 0}

const reducer = (state = init,action) =>{
    switch(action.type){
        case UP:
            return {count: state.count+1}
        case DOWN: 
            return {count: state.count-1}
        case RESET:    
            return init
        default : 
            return state 
    }
}

export default reducer;