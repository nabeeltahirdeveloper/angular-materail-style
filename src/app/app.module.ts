import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { MainComponent } from './myComponents/main/main.component';
import { SideBarComponent } from './myComponents/side-bar/side-bar.component';
import { MailComponent } from './myComponents/mail/mail.component';
import { ContactComponent } from './myComponents/contact/contact.component';
import { CalanderComponent } from './myComponents/calander/calander.component';
import { BodyComponent } from './myComponents/body/body.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MailAddComponent } from './myComponents/mail-add/mail-add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';







@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    MailComponent,
    ContactComponent,
    CalanderComponent,
    BodyComponent,
    MailAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatDialogModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule, MatFormFieldModule, FormsModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
