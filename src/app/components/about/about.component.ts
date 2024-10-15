import { Component, OnInit } from '@angular/core';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [NzTimelineModule]
})
export class AboutComponent implements OnInit {
  stories = [
    {label: '1966', text: 'Neyir Örme Sanayii (matolarni ishlab chiqarish korxonasi) doirasida tashqi xizmatlar'},
    {label: '1977', text: 'Mustaqil korporatsiya sifatida asossolingan'},
    {label: '1981', text: "Turkiyadagi Texas Instrumentsning distribyutori, UNIX+COBOLga asoslangan dasturiy ta'minot (1 chi avlod )"},
    {label: '1995', text: "Ta'minot kanalini o'rnatdi"},
    {label: '1997', text: "Paketli dasturiy ta'minot (Microsoft texnologiya stagi)"},
    {label: '2000', text: "Nebim Winner (2 chi avlod) ishga tushirildi"},
    {label: '2011', text: "Nebim V3 ERP(3 chi avlod) ishga tushirildi"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
