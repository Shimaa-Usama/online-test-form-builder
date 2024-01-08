import { Validators } from "@angular/forms";

export interface DynamicFormModel {
    id: string,
    formControlName: string,
    label: string,
    fieldType: 'custom' | 'radiobutton' | 'inputText',
    maxLength?: number,
    minLength?: number,
    placeholder?: string,
    validators?: Validators,
}