import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LayoutModule} from '@angular/cdk/layout';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MainNavComponent} from './menus/top-nav/main-nav/main-nav.component';
import {ResidentialSectionComponent} from './sections/residential-section/residential-section.component';
import {HomeSectionComponent} from './sections/home-section/home-section.component';
import {HeaderComponent} from './reusable/components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StepTwoComponent} from './sections/residential-section/step-two/step-two.component';
import {IndicatorComponent} from './sections/residential-section/indicator/indicator.component';
import {StepThreeComponent} from './sections/residential-section/step-three/step-three.component';
import {CarouselComponent} from './reusable/components/carousel/carousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {SecondCarouselComponent} from './reusable/components/carousel/second-carousel/second-carousel.component';
import {FooterComponent} from './reusable/components/footer/footer.component';
import {CommercialComponent} from './sections/commercial/commercial.component';
import {StepOneComponent} from './sections/residential-section/step-one/step-one.component';
import {SplitByFirstWordPipe} from './pipes/splitByFirstWord.pipe';
import {SectorsComponent} from './sections/sectors/sectors.component';
import {CarouselImageCoverComponent} from './reusable/components/carousel-image-cover/carousel-image-cover.component';
import {SubSectionsHelperComponent} from './menus/top-nav/main-nav/sub-sections-helper/sub-sections-helper.component';
import {SocialNetworkNavComponent} from './reusable/components/social-network-nav/social-network-nav.component';
import {InfoPestsComponent} from './reusable/sections/info-pests/info-pests.component';
import {AboutUsComponent} from './sections/about-us/about-us.component';
import {VisionComponent} from './sections/vision/vision.component';
import {TreatmentsComponent} from './sections/treatments/treatments.component';
import {RelationalPagesComponent} from './reusable/components/relational-pages/relational-pages.component';
import {CardsComponent} from './reusable/components/cards/cards.component';
import {IndustrySectionComponent} from './sections/industry-section/industry-section.component';
import {BranchOfficeComponent} from './menus/top-nav/main-nav/branch-office/branch-office.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ResidentialSectionComponent,
    HomeSectionComponent,
    HeaderComponent,
    StepTwoComponent,
    StepThreeComponent,
    IndicatorComponent,
    CarouselComponent,
    SecondCarouselComponent,
    FooterComponent,
    CommercialComponent,
    StepOneComponent,
    SplitByFirstWordPipe,
    SectorsComponent,
    CarouselImageCoverComponent,
    SubSectionsHelperComponent,
    SocialNetworkNavComponent,
    InfoPestsComponent,
    AboutUsComponent,
    VisionComponent,
    TreatmentsComponent,
    RelationalPagesComponent,
    CardsComponent,
    IndustrySectionComponent,
    BranchOfficeComponent
  ],
  imports: [
    IvyCarouselModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
