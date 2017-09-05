import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {JsonService} from './json.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Textarea } from './textarea';
import { TextareaGenerator } from './textarea.generator';

@Component({
  selector: 'form-generator',
  templateUrl: 'form.generator.html',
  styleUrls: ['form.generator.css'],
  providers: [JsonService]
})
export class FormGenerator implements OnInit {
  @Input() file: string;
  inputs: Textarea[] = [];
  form: FormGroup = new FormGroup({});
  payLoad: any;
  constructor(private jsonService: JsonService) {};
	onSubmit(): void {
		for(let i in this.form.value) {
			let temp = this.form.value[i].split("\n");
			
			if(temp.length > 1) this.form.value[i] = temp;
		}
		
		this.payLoad = JSON.stringify(this.form.value, null, 2);
	}

	ngOnInit(): void {
		this.jsonService.getInputs(this.file)
		.subscribe(inputs => {
			this.inputs = inputs;
			this.form = this.jsonService.toFormGroup(inputs);
		});
	}
}