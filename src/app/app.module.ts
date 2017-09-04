import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormGenerator } from './form.generator';
import { TextareaGenerator } from './textarea.generator';

@NgModule({
  declarations: [
    AppComponent,
	FormGenerator,
	TextareaGenerator
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
