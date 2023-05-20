import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { addTodo, completeTodo, deleteTodo, updateTodo } from "../actions/todos.actions";
import { ITodo } from "../models/todo.models";

export const TODOREDUCERkEY = 'todos';

/**
 * @description interface state
 */
export interface IState {
    todos: ReadonlyArray<ITodo>,
    home: 'home'
}

/**
 * @description initi state todos
 */
export const initStateTodos: ReadonlyArray<ITodo> = [];

export const selectFeatureTodos = createFeatureSelector<ReadonlyArray<ITodo>>(TODOREDUCERkEY)
export const selectFeatureTodos_uppercase = createSelector(
    selectFeatureTodos,
    (todos: ReadonlyArray<ITodo>) => todos.map(todo => ({...todo, title: todo.title.toUpperCase()}))
)
export const selectFeatureTodos_complete = createSelector(
    selectFeatureTodos,
    (todos: ReadonlyArray<ITodo>) => todos.filter(item => item.isCompleted))
    
export const selectFeatureTodos_notComplete = createSelector(
    selectFeatureTodos,
    (todos: ReadonlyArray<ITodo>) => todos.filter(item => !item.createdAt))


/**
 * @description todos reducer (func. date change the State)
 */
export const reducerTodos = createReducer(
    initStateTodos,
    on(addTodo, (state, {todo}) => ([...state, todo])),
    on(deleteTodo, (state, {id}) => ([...state.filter(item => item.id !== id)])),
    on(updateTodo, (state, {todo}) => ([...state.map(item => item.id === todo.id ? todo : item) ])),
    on(completeTodo, (state, {todo}) => ([...state.map(item => item.id === todo.id ? {...todo, isCompleted: true} : item)]))

    
)






// /**
//  * @description 
//  */
// export const initStateTodos_: ReadonlyArray<ITodo> = [];

// export const reducerTodos_ = createReducer(
//     initStateTodos_
// );