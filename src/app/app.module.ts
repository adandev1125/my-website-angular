import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgParticlesModule } from 'ng-particles';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ServiceComponent } from './components/service/service.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    TypewriterComponent,
    MainPageComponent,
    HeadingComponent,
    ServiceComponent,
    SkillComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RoundProgressModule,
    NgParticlesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
