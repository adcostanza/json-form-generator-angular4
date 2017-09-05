import { Component, Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Textarea } from './textarea';

@Component({
  selector: 'textarea-generator',
  templateUrl: 'textarea.generator.html',
  styleUrls: ['form.generator.css'],
  providers: []
})
export class TextareaGenerator {
  @Input('input') input: Textarea;
  @Input() form: FormGroup;
	
}