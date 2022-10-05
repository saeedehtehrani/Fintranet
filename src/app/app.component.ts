import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finteranet';
  items: MenuItem[] =[];    

  constructor() {}

  ngOnInit() {
    this.items = [{
            label: 'Step one',
            routerLink: 'step-one'
        },
        {
            label: 'Step two',
            routerLink: 'step-two'
        },
        {
            label: 'Step three',
            routerLink: 'step-three'
        },
        {
            label: 'Step four',
            routerLink: 'step-four'
        }
    ];}
  
}
