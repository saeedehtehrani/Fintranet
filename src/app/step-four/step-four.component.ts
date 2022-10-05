import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../userService';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  selectedUser: user;
  constructor(private userService: UserService) { 

  }

  ngOnInit(): void {
    this.userService.selectedUser$.subscribe((value) => {
      this.selectedUser = value.data;
      console.log(this.selectedUser);
      
    });
  }

  
}
