import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SolutionsComponent } from './components/solutions/solutions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, BannerComponent, AboutComponent, OurProductsComponent, PartnersComponent, SolutionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
}
