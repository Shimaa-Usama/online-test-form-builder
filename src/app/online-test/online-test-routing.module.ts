import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTestPageComponent } from './online-test-page/online-test-page/online-test-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'online-test',
    pathMatch: 'full'
  },
  {
    path: 'online-test',
    component: OnlineTestPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OnlineTestRoutingModule { }
