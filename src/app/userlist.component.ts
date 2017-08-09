import { Component, Input  } from '@angular/core';

@Component({
  selector: 'user-list',
  template: `<ul *ngFor= "let user of users">
  <li>
  {{user}}
  </li>
  </ul>`,
  
})
export class UserlistComponent {
  title = 'rajarshi';
  @Input()
  users:any;
}