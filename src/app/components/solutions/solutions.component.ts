import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  standalone: true,
  imports: [TranslateModule],
})
export class SolutionsComponent {
  solutions = [
    {
      title: 'solution.title-1',
      text: 'solution.text-1',
    },
    {
      title: 'solution.title-2',
      text: 'solution.text-2',
    },
    {
      title: 'solution.title-3',
      text: 'solution.text-3',
    },
    {
      title: 'solution.title-4',
      text: 'solution.text-4',
    },
    {
      title: 'solution.title-5',
      text: 'solution.text-5',
    },
    {
      title: 'solution.title-6',
      text: 'solution.text-6',
    },
  ];
}
