import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JsonService} from './json.service';
import { TextareaGenerator } from './textarea.generator';
import { FormGenerator } from './form.generator';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule],
  declarations: [
    TextareaGenerator,
	FormGenerator
  ],
  
  exports: [FormGenerator]
})
export class FormGeneratorModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormGeneratorModule,
      providers: [JsonService]
    }
  }
}