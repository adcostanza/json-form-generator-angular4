import { Component, Input} from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Textarea } from './textarea';

@Component({
  selector: 'textarea-generator',
  templateUrl: 'textarea.generator.html',
  providers: []
})
export class TextareaGenerator {
  @Input('input') input: Textarea;
  @Input() form: FormGroup;
	
}