import { TodoLinkModel } from './todo-link-model';

export interface TodoListModel {
  name: string,
  todoLinks: TodoLinkModel,
  color: string;
}
