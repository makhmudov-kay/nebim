import { NgClass } from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
  standalone: true,
  imports: [NgClass]
})
export class OurProductsComponent {
  currentIndex = -1
  pieChartPieaces = [
    {img: "finans-en.png", id: "finans" },
    {img: "urun-yonetimi-en.png", id: "urun-yonetimi" },
    {img: "satin-alma-en.png", id: "satin-alma" },
    {img: "uretim-en.png", id: "uretim" },
    {img: "depo-yonetimi-en.png", id: "depo-yonetimi" },
    {img: "satis-en.png", id: "satis" },
    {img: "crm-en.png", id: "crm" },
    {img: "ik-personel-en.png", id: "ik" },
  ]
}