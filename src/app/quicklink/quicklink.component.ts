import { Component, Input } from '@angular/core';
import { QuicklinkModel } from '../_models/quicklink-model';

@Component({
  selector: 'app-quicklink',
  templateUrl: './quicklink.component.html',
  styleUrls: ['./quicklink.component.scss']
})
export class QuicklinkComponent {
  @Input()
  quickLink!: QuicklinkModel;
}
