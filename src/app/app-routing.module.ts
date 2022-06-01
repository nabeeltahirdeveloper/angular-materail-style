import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalanderComponent } from './myComponents/calander/calender-main/calander.component';
import { ContactComponent } from './myComponents/contact/contact-main/contact.component';
import { MailComponent } from './myComponents/mail/mail-main/mail.component';

const routes: Routes = [
  { path: "", component: MailComponent },
  {path: 'mail', component: MailComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'calander', component: CalanderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
