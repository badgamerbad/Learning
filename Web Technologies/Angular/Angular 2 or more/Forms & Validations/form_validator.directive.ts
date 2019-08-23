import { ValidatorFn } from "@angular/forms/src/directives/validators";
import { AbstractControl } from "@angular/forms/src/model";


/** Hero's name cant match given regular exp */
export function forbiddenNameValidator (nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {'forbiddenName': {value: control.value}} : null;
    }
}