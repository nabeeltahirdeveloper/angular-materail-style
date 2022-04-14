import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { calanderData } from 'src/app/cusomTypes/calanderData';
import { CalanderAddComponent } from '../calander-add/calander-add.component';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  allCalanders: calanderData[]=[];
  localItem:any;
  constructor(public dialog: MatDialog) { 
    this.localItem= localStorage.getItem('calander');
    if (this.localItem==null){
      
      this.allCalanders=[]
    }
      else{
        this.allCalanders=JSON.parse(this.localItem)
      }
    }
    
  

  ngOnInit(): void {
  }


  editContact(calander:any, index:number){
    const dialogRef = this.dialog.open(CalanderAddComponent, {
      data: {
        task: calander.task,
        date: calander.date
      }
    }

    
    )
    dialogRef.afterClosed().subscribe(result => {
      this.allCalanders[index] = result;
      localStorage.setItem('calander', JSON.stringify(this.allCalanders))
    })
  } 
  
  
  deleteContact( index:number){
    this.allCalanders.splice(index, 1);
    localStorage.setItem('calander', JSON.stringify(this.allCalanders))
  }
  openDialog(){
    const dialogRef = this.dialog.open(CalanderAddComponent)
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.allCalanders.push(result);
      localStorage.setItem('calander', JSON.stringify(this.allCalanders))
    })
  }

}
