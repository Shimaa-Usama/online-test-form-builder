import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineTestRoutingModule } from './online-test-routing.module';
import { OnlineTestFormBodyComponent } from './components/online-test-form-body/online-test-form-body.component';
import { OnlineTestContainerComponent } from './components/online-test-form-container/online-test-container.component';
import { OnlineTestFormHeaderComponent } from './components/online-test-form-header/online-test-form-header.component';
import { OnlineTestPageComponent } from './online-test-page/online-test-page/online-test-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlineTestAnswersComponent } from './components/online-test-answers/online-test-answers.component';



@NgModule({
  declarations: [
    OnlineTestPageComponent,
    OnlineTestContainerComponent,
    OnlineTestFormHeaderComponent,
    OnlineTestFormBodyComponent,
    OnlineTestAnswersComponent
  ],
  imports: [
    CommonModule,
    OnlineTestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OnlineTestModule { }
