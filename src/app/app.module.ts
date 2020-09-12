import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { IntroComponent } from './intro/intro.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciesComponent } from './experiencies/experiencies.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillComponent } from './skills/skill/skill.component';
import { ExpertiseItemComponent } from './expertise/expertise-item/expertise-item.component';
import { EducationItemComponent } from './education/education-item/education-item.component';
import { InterestComponent } from './interests/interest/interest.component';
import { ExperienceComponent } from './experiencies/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IntroComponent,
    ExpertiseComponent,
    SkillsComponent,
    ExperienciesComponent,
    EducationComponent,
    InterestsComponent,
    PortfoliosComponent,
    ContactsComponent,
    SkillComponent,
    ExpertiseItemComponent,
    EducationItemComponent,
    InterestComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
