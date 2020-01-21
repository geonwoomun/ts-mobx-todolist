import { action, computed, observable } from 'mobx';
import TodoItem from './todo-item';

export class TodoList {  // TodoList 는 TodoItem으로 이루어진 배열이고 기본값은 []이다.
    @observable.shallow list: TodoItem[] = []; // 관찰할 state 값
    // list 는 TodoItem[] 형식이여야 하고 [] 기본값.
    constructor(todos : string[]){
        todos.forEach(this.addTodo); 
    } // 생성자  string 배열인 todos를 받아서 만들어진다. 
    // 각각을 addTodo해서 list에 추가하고 mobx가 list가 바뀐것을 알아차린다. observable이니깐.
    @action // state 값을 바꾸는 녀석
    addTodo = (text: string) => {
        this.list.push(new TodoItem(text));   
    }

    @action // state 값을 바꾸는 녀석
    removeTodo = (todo: TodoItem) => { // 삭제하는것 indexof로 인덱스를 찾아서 splice로 인덱스부터 1개를 지운다
        this.list.splice(this.list.indexOf(todo), 1);
    };

    @computed // 계산 된 값   Done 된애를 빼는 것인듯.
    get finishedTodos(): TodoItem[] {
        return this.list.filter(todo => todo.isDone);
    }

    @computed  // 아직 done 안 된 애만 빼내는 것.
    get openTodos(): TodoItem[] {
        return this.list.filter(todo => !todo.isDone);
    }
}