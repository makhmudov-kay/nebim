import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { PartnersComponent } from './components/partners/partners.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { MetalFactoryComponent } from './components/metal-factory/metal-factory.component';
import { FormToSendComponent } from './components/form-to-send/form-to-send.component';
import { SoftwareCustomisableComponent } from './components/software-customisable/software-customisable.component';
import { VideoMessageComponent } from './components/video-message/video-message.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { Settings } from './helpers/settings';
import { Constants } from './configs/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AboutComponent,
    OurProductsComponent,
    PartnersComponent,
    SolutionsComponent,
    MetalFactoryComponent,
    FormToSendComponent,
    SoftwareCustomisableComponent,
    VideoMessageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  constructor(private translate: TranslateService, settings: Settings,) {
    this.translate.setDefaultLang(Constants.DEFAULT_LANGUAGE);
    this.translate.use(settings.language);
  }
}
