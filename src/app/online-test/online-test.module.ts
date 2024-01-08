import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineTestRoutingModule } from './online-test-routing.module';
import { OnlineTestFormBodyComponent } from './components/online-test-form-body/online-test-form-body.component';
import { OnlineTestFormContainerComponent } from './components/online-test-form-container/online-test-form-container.component';
import { OnlineTestFormHeaderComponent } from './components/online-test-form-header/online-test-form-header.component';
import { OnlineTestPageComponent } from './online-test-page/online-test-page/online-test-page.component';



@NgModule({
  declarations: [
    OnlineTestPageComponent,
    OnlineTestFormContainerComponent,
    OnlineTestFormHeaderComponent,
    OnlineTestFormBodyComponent
  ],
  imports: [
    CommonModule,
    OnlineTestRoutingModule
  ]
})
export class OnlineTestModule { }
