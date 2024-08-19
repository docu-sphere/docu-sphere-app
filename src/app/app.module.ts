import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MaterialModule } from './common/material.moduls'
import { LayoutComponent } from './common/component/layout/layout.component'
import { ApiClientComponent } from './api-client/api-client.component'
import { DarkModeSwitcherComponent } from './common/component/dark-mode-switcher/dark-mode-switcher.component'
import { ApiClientSidebarComponent } from './api-client/sidebar/api-client-sidebar.component'
import { ApiClientCollectionComponent } from './api-client/collection/api-client-collection.component'
import { ApiClientRestComponent } from './api-client/rest-client/api-client-rest.component'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { ApiClientSearchComponent } from './api-client/search/api-client-search.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FocusDirective } from './common/directive/focus.directive'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        MaterialModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        DarkModeSwitcherComponent,
        ApiClientComponent,
        ApiClientSidebarComponent,
        ApiClientSearchComponent,
        ApiClientCollectionComponent,
        ApiClientRestComponent,
        FocusDirective
    ],
    providers: [
        provideAnimationsAsync(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {appearance: 'outline'}
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
