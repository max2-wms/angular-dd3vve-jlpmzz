
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdDatepickerRange } from './datepicker-range';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()], 
  declarations: [AppComponent, NgbdDatepickerRange],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
