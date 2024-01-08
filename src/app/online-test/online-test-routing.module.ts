import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTestPageComponent } from './online-test-page/online-test-page/online-test-page.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineTestPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'online-test',
        pathMatch: 'full'
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OnlineTestRoutingModule { }
