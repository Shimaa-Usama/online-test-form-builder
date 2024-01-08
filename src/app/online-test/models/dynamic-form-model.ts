import { Validators } from "@angular/forms";

export interface DynamicFormModel {
    id: string,
    formControlName: string,
    label: string,
    fieldType: 'custom' | 'radiobutton' | 'inputText',
    placeholder?: string,
    validators?: Validators,
}