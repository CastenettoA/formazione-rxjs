import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IState } from './state/reducer/todos.reducer';
import { addTodo, deleteTodo, updateTodo } from './state/actions/todos.actions';
import { TodoClass } from './state/models/todo.class';
import { ITodo } from './state/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formazione-rxjs';
  todos$ = this.store.select('todos');
  isEdit = false;
  todoEdit?:ITodo;

  form:FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(
    private readonly store: Store<IState>
  ){

  }

  

  addTodo(): void {
    let form:{title: string, description: string} = this.form.getRawValue();
    
    if(this.isEdit && this.todoEdit) {
      this.store.dispatch(updateTodo({todo: this.todoEdit}))
    } else {
      this.store.dispatch(addTodo({ todo: new TodoClass({...form})} ))
    }
  }

  deleteTodo(id:string){
    this.store.dispatch(deleteTodo({id}))
  }

  editTodo(todo:ITodo) {
    this.form.patchValue({...todo});
    this.todoEdit= {...todo};
    this.isEdit = true;
  }
}
