//////순수 javascript 파일.

//1. action 생성
// 파일 명 + action 중복방지.
const RED = 'color/RED'
const GREEN = 'color/GREEN'
const BLUE = 'color/BLUE'
const PURPLE = 'color/PURPLE'
const ORANGE = 'color/ORANGE'


//2. action 보내기
export const red = () =>({ type: RED })
export const green = () =>({ type: GREEN })
export const blue = () =>({ type: BLUE })
export const purple = () =>({ type: PURPLE })
export const orange = () =>({ type: ORANGE })


//3. 초기값 
const init = {color: 'gray'}

//4. reducer 함수 만들기 - state, action 파라미터 참조하여 새로운 상태 객체를 만들어서 반환.
//                      - state: 현재 상태, action: 액션 객체
const reducer = (state = init,action) =>{
    switch(action.type){
        case RED:
            return {color: 'red'};
        case GREEN:   
            return {color: 'green'};
        case BLUE:   
            return {color: 'blue'};
        case PURPLE:   
            return {color: 'purple'};
        case ORANGE:   
            return {color: 'orange'};
        default:
            return state
    }
}                   

export default reducer;