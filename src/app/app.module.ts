import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { RouterModule } from '@angular/router';
import { AnimalformComponent } from './animalform/animalform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeformComponent } from './employeeform/employeeform.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    EmployeelistComponent,
    AnimalformComponent,
    EmployeeformComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'itemlist', component: ItemlistComponent},
      {path: 'employeelist', component: EmployeelistComponent},
    ]),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
