import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-form-to-send',
  templateUrl: './form-to-send.component.html',
  styleUrls: ['./form-to-send.component.css'],
  standalone: true,
  imports: [NzFormModule, NzInputModule],
})
export class FormToSendComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
