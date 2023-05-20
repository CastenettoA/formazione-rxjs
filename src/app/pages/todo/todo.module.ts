import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TODOREDUCERkEY, reducerTodos } from 'src/app/state/reducer/todos.reducer';
import { TodoClass } from 'src/app/state/models/todo.class';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TODOREDUCERkEY, reducerTodos,{
      initialState:[
        new TodoClass({title: 'prima', description:'descrizione!%'}),
        new TodoClass({title: 'seconda', description:'descrizione..'}),
        new TodoClass({title: 'terzo', description:'descrizione..'}),
        new TodoClass({title: 'quarto', description:'descrizione.'}),
        new TodoClass({title: 'quinto', description:'descrizione...'}),
        new TodoClass({title: 'sesto!', description:'descrizione...'}),
      ]
    })
  ]
})
export class TodoModule { }
