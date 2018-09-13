import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldComponent } from './field/field';

@NgModule({
	declarations: [ FieldComponent ],
	imports: [CommonModule],
	exports: [ FieldComponent ],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
