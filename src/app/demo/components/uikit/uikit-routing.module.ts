import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule) },
        { path: 'charts', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.module').then(m => m.ChartsDemoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule, ChartModule]
})
export class UIkitRoutingModule { }
