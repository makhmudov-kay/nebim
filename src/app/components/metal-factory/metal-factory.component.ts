import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-metal-factory',
  templateUrl: './metal-factory.component.html',
  styleUrls: ['./metal-factory.component.css'],
  standalone: true,
  imports: [TranslateModule],
})
export class MetalFactoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
