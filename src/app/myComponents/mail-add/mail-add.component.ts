import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mailData } from 'src/app/cusomTypes/mailData';
import { ContactAddComponent } from '../contact-add/contact-add.component';

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
  constructor(public dialogRef: MatDialogRef<ContactAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

  noClick(): void{
    this.dialogRef.close();

  }

}
