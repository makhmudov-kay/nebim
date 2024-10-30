import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  standalone: true,
  imports: [TranslateModule, NzTypographyModule],
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'solution.title-1',
      text: 'solution.text-1',
      img: './assets/images/security.svg',
    },
    {
      title: 'solution.title-2',
      text: 'solution.text-2',
      img: './assets/images/finance.svg',
    },
    {
      title: 'solution.title-3',
      text: 'solution.text-3',
      img: './assets/images/planning.svg',
    },
    {
      title: 'solution.title-4',
      text: 'solution.text-4',
      img: './assets/images/crm.svg',
    },
    {
      title: 'solution.title-5',
      text: 'solution.text-5',
      img: './assets/images/produce.svg',
    },
    {
      title: 'solution.title-6',
      text: 'solution.text-6',
      img: './assets/images/lead-management.svg',
    },
  ];
}
