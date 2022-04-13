import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mailData } from 'src/app/cusomTypes/mailData';

@Component({
  selector: 'app-mail-add',
  templateUrl: './mail-add.component.html',
  styleUrls: ['./mail-add.component.css']
})
export class MailAddComponent implements OnInit {
  addMailData:mailData={
    title: '',
    content: ''
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
