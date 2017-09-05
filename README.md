# FormGeneratorModule

`import { FormGeneratorModule } from './form-generator/form.generator.module';
...
@NgModule({
imports: [...,
	FormGeneratorModule.forRoot(),
	...
	]
})`

# FormGenerator

Use the following HTML to generate a form automatically from a JSON file:
<form-generator [file]="'form-content.json'"></form-generator>

# Demo
You can demo this on your own computer by running `ng serve`

# Build

To easily build this with AOT for production you can run `npm run prod`