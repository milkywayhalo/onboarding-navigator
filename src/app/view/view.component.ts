import { Component } from '@angular/core';
import { contact } from '../_data/contact';
import { quicklink } from '../_data/quicklink';
import { todoList } from '../_data/todo-list';

import { TypeApprenticeship } from '../_enum/type-apprenticeship.enum';
import { ContactModel } from '../_models/contact-model';
import { QuicklinkModel } from '../_models/quicklink-model';
import { TodoListModel } from '../_models/todo-list-model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  allTodoList: TodoListModel[] = todoList.main;

  main_contact: ContactModel[] = contact.main;
  main_quickLink: QuicklinkModel[] = quicklink.main;

  select_contact_a: ContactModel[] = contact.select_SoftwareDeveloper;
  select_contact_s: ContactModel[] = contact.select_SystemsEngineer;

  anwendungsentwicklung: TypeApprenticeship = TypeApprenticeship.ANWENDUNGSENTWICKLUNG;
  systemintegration: TypeApprenticeship = TypeApprenticeship.SYSTEMINTEGRATION;

  typeApprenticeship ?: TypeApprenticeship;

  selectApprenticeshipField(value: TypeApprenticeship): TypeApprenticeship {
   return this.typeApprenticeship = value;
  }

  apprenticeshipTypePresent(): boolean {
    if (this.typeApprenticeship === this.anwendungsentwicklung || this.typeApprenticeship === this.systemintegration) {
      return true;
    } else return false;
  }

  loadData(key: string) {
    return localStorage.getItem(key);
  }

  storeApprenticeShipType(type: TypeApprenticeship){
    localStorage.setItem(type, type)
  }
}
