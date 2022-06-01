import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { contactData } from 'src/app/cusomTypes/contactData';
import { ContactAddComponent } from '../contact-add/contact-add.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  allContacts: contactData[] = [];
  localItem:any;
  constructor(public dialog: MatDialog) {
    this.localItem=localStorage.getItem('contact')
    if (this.localItem==null){
      this.allContacts=[]
    }
    else{
      this.allContacts=JSON.parse(this.localItem)
    }
   }

  ngOnInit(): void {
  }


  editContact(contact:any, index:number){
    const dialogRef = this.dialog.open(ContactAddComponent, {
      data: {
        name: contact.name,
        number: contact.number
      }
    }

    )
    dialogRef.afterClosed().subscribe(result => {
      this.allContacts[index] = result;
      localStorage.setItem('contact', JSON.stringify(this.allContacts))
    })
  } 


  deleteContact( index:number){
    this.allContacts.splice(index, 1);
    localStorage.setItem('contact', JSON.stringify(this.allContacts))

  }
  openDialog(){
    const dialogRef = this.dialog.open(ContactAddComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.name.length>0){
      this.allContacts.push(result);
      localStorage.setItem('contact', JSON.stringify(this.allContacts))
      }
    })
  }

}
