import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss'],
  providers: [MessageService]
})
export class StepOneComponent implements OnInit {

  constructor(private messageService: MessageService,private router: Router) { }

  ngOnInit(): void {
  }

  onBasicUpload(event:any) {
    this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
}
nextPage() {
  this.router.navigate(['./step-two']);
}
}
