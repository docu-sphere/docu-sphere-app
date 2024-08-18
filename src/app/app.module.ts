import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MaterialModule } from './common/material.moduls'
import { LayoutComponent } from './common/component/layout/layout.component'
import { ApiClientComponent } from './api-client/api-client.component'
import { DarkModeSwitcherComponent } from './common/component/dark-mode-switcher/dark-mode-switcher.component'

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        DarkModeSwitcherComponent,
        ApiClientComponent
    ],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
