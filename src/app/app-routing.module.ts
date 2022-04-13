import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalanderComponent } from './myComponents/calander/calander.component';
import { ContactComponent } from './myComponents/contact/contact.component';
import { MailComponent } from './myComponents/mail/mail.component';

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
