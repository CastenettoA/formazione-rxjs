import { createAction, props } from "@ngrx/store"
import { ITodo } from "../models/todo.models";

/**
 *  @description crea un nuovo todo
 *  @prop 
*/
export const addTodo = createAction('[TODO, ADD TODO]', props<{todo: ITodo}>() );

/**
 * @description cancella todo
 */
export const deleteTodo = createAction('[TODO, DELETE TODO]', props<{id: string}>());

/**
 *  @description modifica un todo
*/
export const updateTodo = createAction('[TODO, UPDATE TODO]',props<{todo: ITodo}>());









