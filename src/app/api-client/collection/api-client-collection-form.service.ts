import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Injectable({providedIn: 'root'})
export class ApiClientCollectionFormService {

    formGroup: FormGroup

    constructor() {
        this.createFormGroup()
    }

    private createFormGroup(): void {
        this.formGroup = new FormGroup({
            collectionName: new FormControl(null, Validators.required)
        })
    }

    disableFormGroup(): void {
        this.formGroup.disable()
    }
}
