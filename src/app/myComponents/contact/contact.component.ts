import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { mailData } from 'src/app/cusomTypes/mailData';
import { MailAddComponent } from '../mail-add/mail-add.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  allMails: mailData[] = [];
  constructor(public dialog: MatDialog) { }

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
    })
  } 


  deleteMail( index:number){
    this.allMails.splice(index, 1);
  }
  openDialog(){
    const dialogRef = this.dialog.open(MailAddComponent)
    dialogRef.afterClosed().subscribe(result => {
      this.allMails.push(result);
    })
  }

}
