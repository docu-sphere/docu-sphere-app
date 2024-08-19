import { Component, HostListener, inject } from '@angular/core'
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog'
import { take } from 'rxjs'
import { ApiClientSearchComponent } from './search/api-client-search.component'
import { ApiClientFacade } from './service/api-client.facade'

@Component({
    selector: 'docu-sphere-api-client',
    templateUrl: './api-client.component.html',
    styleUrl: './api-client.component.scss'
})
export class ApiClientComponent {

    private readonly dialog = inject(MatDialog)
    private readonly apiClientFacade: ApiClientFacade = inject(ApiClientFacade)

    private searchDialogRef: MatDialogRef<any> = null

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault()
            if (this.searchDialogRef?.getState() == MatDialogState.OPEN) {
                this.searchDialogRef.close()
            } else {
                this.onOpenSearch()
            }
        }
    }

    onOpenSearch(): void {
        this.searchDialogRef = this.dialog.open(ApiClientSearchComponent, {
            height: '440px',
            width: '540px'
        })

        this.searchDialogRef.afterClosed()
            .pipe(
                take(1)
            ).subscribe()
    }

    onCreateCollection(collectionName: string): void {
    }

    onOpenCollection(): void {
    }
}
