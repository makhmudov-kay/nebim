import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css'],
  standalone: true
})
export class OurProductsComponent implements AfterViewInit {
  @ViewChild('circleCanvas') circleCanvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private centerX = 200;
  private centerY = 200;
  private radius = 200;
  private numSections = 8;
  private sectionColors = ['#4DA6FF', '#FF5722', '#FFC107', '#8BC34A', '#03A9F4', '#9C27B0', '#FF9800', '#E91E63'];
  private sectionLabels = [
    "Product Management", "Purchasing", "Manufacturing", "Warehouse Management",
    "Sales", "CRM", "HR/Staff", "Finance"
  ];

  ngAfterViewInit(): void {
    const canvas = this.circleCanvas.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.drawCircle();
  }

  // Функция для рисования трапеций
  private drawSection(startAngle: number, endAngle: number, color: string, label: string) {
    this.ctx.beginPath();
    this.ctx.moveTo(this.centerX, this.centerY);

    // Наружная дуга (внешний радиус)
    this.ctx.arc(this.centerX, this.centerY, this.radius, startAngle, endAngle);

    // Внутренняя дуга (внутренний радиус)
    this.ctx.arc(this.centerX, this.centerY, this.radius - 70, endAngle, startAngle, true);

    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();

    // Рисуем текст по центру секции
    this.drawTextInSection(label, startAngle, endAngle);
  }

  // Функция для рисования текста по центру секции с переносом слов
  private drawTextInSection(text: string, startAngle: number, endAngle: number) {
    const radius = (this.radius - 70) + (70 / 2); // Центр секции по радиусу
    const angle = (startAngle + endAngle) / 2; // Средний угол секции
    const words = text.split(' '); // Разбиваем текст на слова
    const lineHeight = 15; // Высота каждой строки (расстояние между словами)

    this.ctx.save();
    this.ctx.translate(this.centerX, this.centerY); // Перемещаем точку отсчета в центр круга
    this.ctx.rotate(angle); // Поворачиваем контекст к средней точке секции

    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'center';

    // Центрируем текст по вертикали в секции
    const totalHeight = words.length * lineHeight; // Общая высота текста
    let startY = -totalHeight / 2; // Начальная позиция Y для центрации по вертикали

    // Проходим по каждому слову и размещаем его
    words.forEach((word) => {
      this.ctx.fillText(word, 0, startY - radius); // Рисуем слово по центру
      startY += lineHeight; // Смещаем Y на высоту строки
    });

    this.ctx.restore();
  }

  // Основная функция для отрисовки круга с секциями
  private drawCircle() {
    for (let i = 0; i < this.numSections; i++) {
      const startAngle = (i * 2 * Math.PI) / this.numSections;
      const endAngle = ((i + 1) * 2 * Math.PI) / this.numSections;
      this.drawSection(startAngle, endAngle, this.sectionColors[i], this.sectionLabels[i]);
    }

    // Центральный логотип
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY, 70, 0, 2 * Math.PI);
    this.ctx.fillStyle = '#008CFF';
    this.ctx.fill();

    // Текст логотипа
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'bold 30px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('V3', this.centerX, this.centerY + 10);
  }
}