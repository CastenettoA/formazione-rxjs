import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducerTodos } from './state/reducer/todos.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // 1 lo store, 2 le configurazioni
    StoreModule.forRoot({
      todos: reducerTodos
    }, {
      initialState: {
        todos: [
          {
            id: 'primo',
            description: 'nessuna descrizione',
            title: 'prima todo',
            createdAt: new Date(),
            isCompleted: false
          },
          {
            id: 'primo',
            description: 'nessuna descrizione',
            title: 'prima todo',
            createdAt: new Date(),
            isCompleted: false
          }
        ]
        /* todo: [],
        pratiche: [],
        users: [],
        config: {
          token: '',
        } */
      }
    }),


    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
