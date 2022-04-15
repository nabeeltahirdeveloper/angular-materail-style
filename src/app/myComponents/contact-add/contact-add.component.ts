import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { contactData } from 'src/app/cusomTypes/contactData';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  addContactData:contactData={
    name: '',
    number: ''
  }
  constructor(public dialogRef: MatDialogRef<ContactAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}


