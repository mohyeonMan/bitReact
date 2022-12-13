import React, { useRef, useState } from 'react';
import styles from '../css/TodoForm.module.css'

const TodoForm = ({onAdd}) => {
    const [text,setText] = useState('')
    const textRef = useRef()

    const onInput=(e)=>{
        const {value} = e.target
        setText(value)
    }
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text) return
        onAdd(text)
        setText('')
        textRef.current.focus()
    }
    

    return (
        <form className={styles.TodoForm} onSubmit={onSubmit}>
            <input type='text' value={text} ref={textRef} onChange={onInput} placeholder="해야 할 일 입력."/>
            <button type='submit'>추가</button>
        </form>
    );
};

export default TodoForm;