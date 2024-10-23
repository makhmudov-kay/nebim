import { Component, OnInit } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-form-to-send',
  templateUrl: './form-to-send.component.html',
  styleUrls: ['./form-to-send.component.css'],
  standalone: true,
  imports: [NzFormModule, NzInputModule, NzButtonModule, NzIconModule],
})
export class FormToSendComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
