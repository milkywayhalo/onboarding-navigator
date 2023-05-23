import { Component, Input } from '@angular/core';
import { Task } from '../_models/task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input()
  todoLink!: Task;

  storeSelectedData(): void {
    localStorage.setItem(this.todoLink.name, this.todoLink.link);
  }
}
