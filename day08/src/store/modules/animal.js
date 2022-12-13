const TIGER= 'animal/TIGER'
const DOG= 'animal/DOG'
const CAT= 'animal/CAT'
const CHICK= 'animal/CHICK'

export const tiger = () => ({type:TIGER})
export const dog = () => ({type:DOG})
export const cat = () => ({type:CAT})
export const chick = () => ({type:CHICK})

const init = {name:'HUMAN', crying:'엉엉~'}

const reducer = (state = init,action) =>{
    switch(action.type){
        case TIGER:
            return {name:'TIGER', crying:'어흥~'}
        case DOG:
            return {name:'DOG', crying:'멍~'}
        case CAT: 
            return {name:'CAT', crying:'야옹~'}
        case CHICK:
            return {name:'CHICK', crying:'삐약~'}
        default:
            return state
    }
}
export default reducer;