import { Component, Input } from '@angular/core';
import { ContactModel } from '../_models/contact-model';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrls: ['./contact-content.component.scss']
})
export class ContactContentComponent {

  @Input()
  contact!: ContactModel;
}
