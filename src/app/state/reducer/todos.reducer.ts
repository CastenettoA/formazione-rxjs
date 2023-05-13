import { createReducer, on } from "@ngrx/store";
import { addTodo, deleteTodo, updateTodo } from "../actions/todos.actions";
import { ITodo } from "../models/todo.models";



/**
 * @description interface state
 */
export interface IState {
    todos: ReadonlyArray<ITodo>
}

/**
 * @description initi state todos
 */
export const initStateTodos: ReadonlyArray<ITodo> = [];

/**
 * @description todos reducer
 */
export const reducerTodos = createReducer(
    initStateTodos,
    on(addTodo, (state, {todo}) => ([...state, todo])),
    on(deleteTodo, (state, {id}) => ([...state.filter(item => item.id !== id)])),
    on(updateTodo, (state, {todo}) => ([...state.map(item => item.id === todo.id ? todo : item) ]))
)






// /**
//  * @description 
//  */
// export const initStateTodos_: ReadonlyArray<ITodo> = [];

// export const reducerTodos_ = createReducer(
//     initStateTodos_
// );