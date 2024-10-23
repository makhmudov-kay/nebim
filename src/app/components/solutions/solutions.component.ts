import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  standalone: true,
  imports: [TranslateModule],
})
export class SolutionsComponent implements OnInit {
  solutions = [
    {
      title: 'Ma’lumotlar havfsizligi va tezlik',
      text: 'Har bir kompaniya uchun databaza va server qurish orqali ma’lumotlar almashish tezligi sezilarli darajada oshiriladi',
    },
    {
      title: 'Moliyaviy va buxgalteriya hisobotlari',
      text: 'Naqd pul oqimlari, bank hisob raqamlari to’g’risida hiosbotlar, mijozlar va ta’minotchilar bilan hisob kitoblarni naqd, bank, to’lov kartalar orqali to’langanligini va holatini kuzatib borish.',
    },
    {
      title: 'Mahsulot sotuvi va holatini baholash',
      text: 'Sotish, inventarizatsiya, yalpi marja, markirovka, inventar aylanish tezligi va sotish darajasiga oid haftalik yoki oylik tendentsiyalarni tahlil qilish orqali mahsulotingizning ishlashini baholash va  kategoriyalar asosida mahsulot samaradorligini tahlil qilish mumkin.',
    },
    {
      title: 'CRM',
      text: 'Mijozlar oqimi, xaridlar, to’lovlarni mijozlarni segmentlash orqali tahlil qilish va kunlik, haftalik, oylik va yillik vaqt oralig’ida hisobot olish va mos davrga nisbatan solishtirish mumkin. ',
    },
    {
      title: 'Ishlab chiqarish',
      text: 'Dastlabki xarajatlar va materiallar ro`yxati, mijoz buyurtmalarini boshqarish, namuna/model monitoring, ish tartibi jarayoni monitoring, ishlab chiqarishni rejalashtirish, xarid qilish va xom ashyoni boshqarish, materiallarga talablarni rejalashtirish MRP, xom ashyo sifatini nazorat qilish, shtrixli kodga asoslangan jarayonni kuzatish, operatsion samaradorlik, tovar sifatini nazorat qilish, shtrixli posilkalarni kuzatish va yuklash, xarajatlarni boshqarish, xarajatlarga asoslangan hisob, talablarni rejalashtirish, mahsulot/xom ashyo sifatini nazorat qilish imkoniyati. ',
    },
    {
      title: 'Hodimlarni samarali boshqarish',
      text: 'Hodimlarni rag’batlantirish, sotuvlarini kuzatib borish, bonuslar, ish vaqtlari, ta’tillarni rejalashtirish mumkin.',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
