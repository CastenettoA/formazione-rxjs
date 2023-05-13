import { ITodo } from "./todo.models";

export class TodoClass implements ITodo {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
    constructor({title, description}: {title: string, description: string}) {
        
        this.id = Math.random().toString();
        this.title = title;
        this.description = description;
        this.isCompleted = false;
        this.createdAt = new Date();
    }
    
}