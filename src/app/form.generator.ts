import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  inputs: Textarea[] = [];
  form: FormGroup = new FormGroup({});
  payLoad: any;
  constructor(private jsonService: JsonService) {};
	onSubmit(): void {
		for(let i in this.form.value) {
			this.form.value[i] = this.form.value[i].split("\n");
		}
		
		this.payLoad = JSON.stringify(this.form.value, null, "\t");
	}

	ngOnInit(): void {
		this.jsonService.getInputs()
		.subscribe(inputs => {
			this.inputs = inputs;
			this.form = this.jsonService.toFormGroup(inputs);
		});
	}
}