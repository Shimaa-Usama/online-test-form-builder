import { Component, Input } from '@angular/core';

@Component({
  selector: 'online-test-form-header',
  templateUrl: './online-test-form-header.component.html',
  styleUrl: './online-test-form-header.component.scss'
})
export class OnlineTestFormHeaderComponent {
  @Input() courseName!: string;

}
