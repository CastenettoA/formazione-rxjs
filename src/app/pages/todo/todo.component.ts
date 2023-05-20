import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo, completeTodo, deleteTodo, updateTodo } from 'src/app/state/actions/todos.actions';
import { TodoClass } from 'src/app/state/models/todo.class';
import { ITodo } from 'src/app/state/models/todo.models';
import { IState, selectFeatureTodos_uppercase } from 'src/app/state/reducer/todos.reducer';

export type selectorType = 'all' | 'complete' | 'notComplete'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  title = 'formazione-rxjs';
  todos$ = this.store.select(selectFeatureTodos_uppercase);
  isEdit = false;
  todoEdit?:ITodo;

  form:FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private readonly store: Store<IState>
  ) {}

  addTodo(): void {
    let form:{title: string, description: string} = this.form.getRawValue();
    
    if(this.isEdit && this.todoEdit) {
      this.store.dispatch(updateTodo({todo: {...this.todoEdit, ...form}}));
    } else {
      this.store.dispatch(addTodo({ todo: new TodoClass({...form})} ));
    }
  }

  deleteTodo(id:string) {
    this.store.dispatch(deleteTodo({id}));
  }

  editTodo(todo:ITodo) {
    this.form.patchValue({...todo}); // set form to selected todo
    this.todoEdit= {...todo}; // save todo values to todoEdit var 
    this.isEdit = true; // enable edit mode status
  }

  completeTodo(todo:ITodo) {  
    this.store.dispatch(completeTodo({todo}));
  }
  
  /**
   * 
   * @description filtro i todo visualizzati a seconda del selectorType
   */

  changeSelector(selector: selectorType){
    switch(selector){
      default:
        this.
    }
  } 
    
}
