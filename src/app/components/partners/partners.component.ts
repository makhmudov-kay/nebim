import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-carousel-ease';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  standalone: true,
  imports: [CarouselModule, NgFor, TranslateModule]
})
export class PartnersComponent implements OnInit {

  slidesArray = [
    { image: 'assets/images/1.png' },
    { image: 'assets/images/2.png' },
    { image: 'assets/images/3.png' },
    { image: 'assets/images/4.png' },
    { image: 'assets/images/5.png' },
    { image: 'assets/images/6.png' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
