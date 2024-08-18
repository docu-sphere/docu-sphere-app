import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './common/component/layout/layout.component'
import { ApiClientComponent } from './api-client/api-client.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'api-client',
        pathMatch: 'full'
    }, {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'api-client',
                component: ApiClientComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
