import { Component, EventEmitter, inject, Output } from '@angular/core'
import { ApiClientCollectionFormService } from './api-client-collection-form.service'
import { FormGroup } from '@angular/forms'

@Component({
    selector: 'docu-sphere-api-client-collection',
    templateUrl: './api-client-collection.component.html',
    styleUrl: './api-client-collection.component.scss'
})
export class ApiClientCollectionComponent {

    private readonly apiClientCollectionFormService: ApiClientCollectionFormService = inject(ApiClientCollectionFormService)

    formGroup: FormGroup = this.apiClientCollectionFormService.formGroup
    create: boolean = false

    @Output() createCollection: EventEmitter<string> = new EventEmitter<string>()
    @Output() openCollection: EventEmitter<void> = new EventEmitter<void>()

    onCreateCollection(event: any): void {
        event.preventDefault()
        this.create = true
    }

    onSaveNewCollection(): void {
        this.apiClientCollectionFormService.disableFormGroup()
        this.createCollection.emit(this.formGroup.value.collectionName)
    }
}
