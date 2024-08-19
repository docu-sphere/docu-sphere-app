import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'docu-sphere-api-client-sidebar',
    templateUrl: './api-client-sidebar.component.html',
    styleUrl: './api-client-sidebar.component.scss'
})
export class ApiClientSidebarComponent {

    @Output() openSearch: EventEmitter<void> = new EventEmitter<void>()
    @Output() createCollection: EventEmitter<string> = new EventEmitter<string>()
    @Output() openCollection: EventEmitter<void> = new EventEmitter<void>()

}
