import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { mailData } from 'src/app/cusomTypes/mailData';
import { MailAddComponent } from '../mail-add/mail-add.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  allMails: mailData[] = [];
  localItem:any;
  constructor(public dialog: MatDialog) {
    this.localItem=localStorage.getItem('mails')
    if (this.localItem==null){
      this.allMails=[]

    }
    else{
      this.allMails=JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }


  editMail(mail:any, index:number){
    const dialogRef = this.dialog.open(MailAddComponent, {
      data: {
        title: mail.title,
        content: mail.content
      }
    }

    )
    dialogRef.afterClosed().subscribe(result => {
      this.allMails[index] = result;
      localStorage.setItem('mails', JSON.stringify(this.allMails))
    })
  } 


  deleteMail( index:number){
    this.allMails.splice(index, 1);
    localStorage.setItem('mails', JSON.stringify(this.allMails))

  }
  openDialog(){
    const dialogRef = this.dialog.open(MailAddComponent)
    dialogRef.afterClosed().subscribe(result => {
      this.allMails.push(result);
      localStorage.setItem('mails', JSON.stringify(this.allMails))

    })
  }

}
