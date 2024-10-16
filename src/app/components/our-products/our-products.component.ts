import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
  standalone: true,
  imports: [NgClass, ProductComponent],
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
      title: 'Moliyaviy / Hisob',
      text: [
        'Mijoz va Ta’minotchilarBoshqaruvi',
        'BankOperatsiyalari va Integratsiyalar',
        'e-Invoice',
        'Narxlar va NarxO’zgartirish',
        'NarxMarkaziBoshqaruvi',
        'DoimiyAktivlar',
        'e-QaytaHisoblash, e-Arxiv',
        'e-Declaratsiya va e-Kitob',
        'ByudjetBoshqaruvi',
      ],
    },
    {
      title: 'Mahsulot Boshqaruvi',
      text: [
        'Tovar Rejalashtirish',
        'BOM Sotuvlar Konfiguratsiyasi',
        'Raqamli Kanallar uchun Inventarizatsiya Boshqaruvi',
        "Ko'zoynak Mahsulotlarini Boshqarish va Sog'liqni Saqlash Vazirligi (ÜTS) mahsulot monitoring tizimi",
        'KategoriyaBoshqaruvi va MahsulotXususiyatlari',
        'MahsulotTa’minoti, Tugatish va O’tkazish',
        'MahsulotTahlillari',
      ],
    },
    {
      title: 'Xarid qilish',
      text: [
        'XaridJarayoniniBoshqarish, ASN',
        'Takliflar',
        'Import',
        'KMaterial/XomAshyoBoshqaruvi',
        "XaridSo'roviniBoshqarish",
        'Konsignatsiya Xaridlari',
        'NarxBoshqaruvi',
      ],
    },
    {
      title: 'Ishlab Chiqarish',
      text: [
        'Ishlab Chiqarish Rejalashtirish',
        'Namuna/Model Monitoring',
        'Operativ Mahsuldorlik',
        'Ish Buyurtmasi Jarayonini Monitoring',
        'Ehtiyojlarni Rejalashtirish',
        'Mahsulot/Xom Ashyo Sifat Nazorati',
      ],
    },
    {
      title: 'Ombor Boshqaruvi',
      text: [
        "Ko'p Ombor Inventarizatsiya Boshqaruvi",
        'Ombor Polka Inventarizatsiya Boshqaruvi',
        "Mahsulot Kombinatsiyalari (To'plamlar-Paketlar) va Ajratish",
        'Ombor Jarayonlarini Boshqarish',
        'Zaxira va Zaxira Farqi Sinxronizatsiyasi',
        'Logistika va Yuk Tashish Kompaniyalari bilan Integratsiya',
        'Mobil Ombor Ilovalari',
      ],
    },
    {
      title: 'Savdo',
      text: [
        "Ko'pKanalliSavdoBoshqaruvi",
        'NarxPasaytirishKampaniyasiBoshqaruvi',
        'E-DispatchNomi',
        'YangiAvlodNaqdPulQabulQilishUsullari',
        "Ko'zoynakBuyurtmalariVaSavdosi",
        "BepulSavdoDo'konlariniBoshqarish",
        'NarxBoshqaruvi',
        'Nebim V3 POS va Orqa Ofis',
        "Bo'lib Sotish va Keyingi Yetkazib Berish (Buyurtmalar)",
      ],
    },
    {
      title: 'CRM',
      text: [
        "MijozMa'lumotlariningSifatiniYaxshilashvaDeduplikatsiya",
        'OmnichannelMijozSodiqlikBoshqaruvi',
        "ShaxsiyMa'lumotlarniHimoyaQilishBo'yichaQonunTalablari",
        'MijozTahlillariVaSegmentatsiyasi',
        'GuruhE-pochtaYuborish',
        'TashqiSodiqlikBoshqaruvTizimlariBilanIntegratsiya(Como, Hopi, Paro, Zubizu)',
      ],
    },
    {
      title: 'HR / Xodimlar',
      text: [
        'IshgaQabulArizalari va Suhbatlar',
        'IshO’qitish va Sinovlar',
        'TaqdirlashTo’lovlari',
        'XodimlarUchunMaoshRejalashtirish',
        'XodimlarUchunMaoshHisoblash',
        'DoimiyIshchiKuch',
        'XodimlaruchunTa',
        "O'z-o'ziga xizmat ko'rsatish HR",
      ],
    },
  ];
}
