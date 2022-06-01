import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { calanderData } from 'src/app/cusomTypes/calanderData';
import { ContactAddComponent } from '../../contact/contact-add/contact-add.component';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { MY_FORMATS } from 'src/app/cusomTypes/dateFormat';
import * as _moment from 'moment';
import { FormControl } from '@angular/forms';
import { Moment } from "moment";

// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';

const moment = _moment;

@Component({
  selector: 'app-calander-add',
  templateUrl: './calander-add.component.html',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  styleUrls: ['./calander-add.component.css']
})
export class CalanderAddComponent implements OnInit {
  date = new FormControl(moment());

  addCalanderData: calanderData={
    task: '',
    date: ""
  }
  constructor(public dialogRef: MatDialogRef<ContactAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    console.log(this.addCalanderData)
    this.dialogRef.close();
  }

}
