import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResidentialSectionComponent} from './sections/residential-section/residential-section.component';
import {HomeSectionComponent} from './sections/home-section/home-section.component';
import {CommercialComponent} from './sections/commercial/commercial.component';
import {SectorsComponent} from './sections/sectors/sectors.component';
import {InfoPestsComponent} from './reusable/sections/info-pests/info-pests.component';
import {AboutUsComponent} from './sections/about-us/about-us.component';
import {VisionComponent} from './sections/vision/vision.component';
import {TreatmentsComponent} from './sections/treatments/treatments.component';
import {IndustrySectionComponent} from './sections/industry-section/industry-section.component';

const routes: Routes = [
  {path: '', component: HomeSectionComponent, data: {anim: 'home'}},
  {path: 'residential', component: ResidentialSectionComponent, data: {anim: 'residential'}},
  {path: 'commercial', component: CommercialComponent, data: {anim: 'commercial'}},
  {path: 'industrial', component: IndustrySectionComponent, data: {anim: 'industry'}},

  {path: 'pests', component: InfoPestsComponent, data: {anim: 'pests'}},
  {path: 'sectors', component: SectorsComponent, data: {anim: 'sectors'}},
  {path: 'sobre-nosotros', component: AboutUsComponent, data: {anim: 'about-us'}},
  {path: 'visión', component: VisionComponent, data: {anim: 'vision'}},
  {path: 'tratamientos', component: TreatmentsComponent, data: {anim: 'treatments'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
