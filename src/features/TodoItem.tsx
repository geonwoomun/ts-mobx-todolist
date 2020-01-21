import React, {useState} from 'react';
import TodoItemClass from '../stores/todo-item';
import {useStore} from '../helpers/use-store';
import {onEnterPress} from '../helpers/use-enter';

interface Props { // 프롭스로는 todo가 들어올 것이다~
    todo: TodoItemClass;
}

export const TodoItem = ({todo}: Props) => { // Props로 todo값 들어옴
    const todoList = useStore(); // useStore 사용해서 context 사용할 수 있게 하는 것인듯. Context 공부해야겠다.
    const [newText, setText] = useState('');
    const [isEditing, setEdit] = useState(false);

    const saveText = () => {
        todo.updateText(newText); // saveText를 누르면 todo 의 updateText를 실행해 store의 todo의 text값을 바꾼다.
        setEdit(false); // state 값들 변경.
        setText('');
    };
    
    return (
        <div className="todo-item">
            {
                isEditing ?
                <div>
                    <input type="text" onKeyDown={onEnterPress(saveText)} onChange={(e) => setText(e.target.value)}/>
                    <button onClick={saveText}>save</button>
                </div>
                :
                <div>
                    <span>{todo.text}</span>
                    <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}/>
                    <button onClick={() => setEdit(true)}>edit</button>
                    <button onClick={() => todoList.removeTodo(todo)}>X</button> 
                </div>
            }
        </div>
    )
};