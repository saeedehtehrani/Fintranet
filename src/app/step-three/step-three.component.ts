import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { user } from '../user';
import { UserService } from '../userService';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
  providers: [MessageService]
})
export class StepThreeComponent implements OnInit {
  users: any;
  selectedUser: user;
  
  constructor(private messageService: MessageService,private userService: UserService ,private router: Router) { }

  ngOnInit(): void {


    this.userService.getUsers()
    .subscribe(response => {
      this.users = response;
    });
  }

  onRowSelect(event:any) {
    this.messageService.add({severity:'info', summary:'User Selected', detail: event.data.name});
    this.userService.setUser(event);
    
}

onRowUnselect(event:any) {
    this.messageService.add({severity:'info', summary:'User Unselected',  detail: event.data.name});
}
nextPage() {
  this.router.navigate(['./step-four']);
}
}
