import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GlobalContainerComponent } from './shared/containers/global/global-container.component';

const routes: Routes = [
    {
        path: '',
        component: GlobalContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
