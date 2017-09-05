import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Textarea} from './textarea';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable()
export class JsonService {
	constructor(private http: HttpClient) {};
	json: any;
	getInputs(file: string): Observable<Textarea[]> {
		return this.http.get(file).map(data => {
			let inputs: Textarea[] = [];
			this.json = data;
			for(let ind in this.json) {
				if(typeof(this.json[ind]) != "string") {
					this.json[ind] = this.json[ind].join("\n");
				}
				let _input: Textarea = {name:ind,value:this.json[ind]};
				inputs.push(_input);
			}
			return inputs;
		});
				
	}
	toFormGroup(inputs: Textarea[]): FormGroup {
		let group: any = {};
		inputs.forEach(input => {
			group[input.name] = new FormControl(input.value);
		});
		return new FormGroup(group);
	}
}