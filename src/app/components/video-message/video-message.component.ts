import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-video-message',
  templateUrl: './video-message.component.html',
  styleUrls: ['./video-message.component.less'],
  standalone: true,
  imports: [NzIconModule],
})
export class VideoMessageComponent implements OnInit {
  isVisible = false;
  constructor() {}

  ngOnInit() {}

  openVideo() {
    this.isVisible = true;
  }

  closeVideo() {
    this.isVisible = false;
  }
}
