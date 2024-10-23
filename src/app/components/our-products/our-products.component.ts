import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
  standalone: true,
  imports: [NgClass, ProductComponent, TranslateModule],
})
export class OurProductsComponent {
  currentIndex = -1;
  pieChartPieaces = [
    { img: 'finans-en.png', id: 'finans' },
    { img: 'urun-yonetimi-en.png', id: 'urun-yonetimi' },
    { img: 'satin-alma-en.png', id: 'satin-alma' },
    { img: 'uretim-en.png', id: 'uretim' },
    { img: 'depo-yonetimi-en.png', id: 'depo-yonetimi' },
    { img: 'satis-en.png', id: 'satis' },
    { img: 'crm-en.png', id: 'crm' },
    { img: 'ik-personel-en.png', id: 'ik' },
  ];

  products = [
    {
      title: 'products.list.block-1.title',
      text: [
        'products.list.block-1.text-1',
        'products.list.block-1.text-2',
        'products.list.block-1.text-3',
        'products.list.block-1.text-4',
        'products.list.block-1.text-5',
        'products.list.block-1.text-6',
        'products.list.block-1.text-7',
        'products.list.block-1.text-8',
        'products.list.block-1.text-9',
      ],
    },
    {
      title: 'products.list.block-2.title',
      text: [
        'products.list.block-2.text-1',
        'products.list.block-2.text-2',
        'products.list.block-2.text-3',
        'products.list.block-2.text-4',
        'products.list.block-2.text-5',
        'products.list.block-2.text-6',
        'products.list.block-2.text-7',
      ],
    },
    {
      title: 'products.list.block-3.title',
      text: [
        'products.list.block-3.text-1',
        'products.list.block-3.text-2',
        'products.list.block-3.text-3',
        'products.list.block-3.text-4',
        'products.list.block-3.text-5',
        'products.list.block-3.text-6',
        'products.list.block-3.text-7',
      ],
    },
    {
      title: 'products.list.block-4.title',
      text: [
        'products.list.block-4.text-1',
        'products.list.block-4.text-2',
        'products.list.block-4.text-3',
        'products.list.block-4.text-4',
        'products.list.block-4.text-5',
        'products.list.block-4.text-6',
      ],
    },
    {
      title: 'products.list.block-5.title',
      text: [
        'products.list.block-5.text-1',
        'products.list.block-5.text-2',
        'products.list.block-5.text-3',
        'products.list.block-5.text-4',
        'products.list.block-5.text-5',
        'products.list.block-5.text-6',
        'products.list.block-5.text-7',
      ],
    },
    {
      title: 'products.list.block-6.title',
      text: [
        'products.list.block-6.text-1',
        'products.list.block-6.text-2',
        'products.list.block-6.text-3',
        'products.list.block-6.text-4',
        'products.list.block-6.text-5',
        'products.list.block-6.text-6',
        'products.list.block-6.text-7',
        'products.list.block-6.text-8',
        'products.list.block-6.text-9',
      ],
    },
    {
      title: 'products.list.block-7.title',
      text: [
        'products.list.block-7.text-1',
        'products.list.block-7.text-2',
        'products.list.block-7.text-3',
        'products.list.block-7.text-4',
        'products.list.block-7.text-5',
        'products.list.block-7.text-6',
      ],
    },
    {
      title: 'products.list.block-8.title',
      text: [
        'products.list.block-8.text-1',
        'products.list.block-8.text-2',
        'products.list.block-8.text-3',
        'products.list.block-8.text-4',
        'products.list.block-8.text-5',
        'products.list.block-8.text-6',
        'products.list.block-8.text-7',
        'products.list.block-8.text-8',
      ],
    },
  ];
}
