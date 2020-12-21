import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardComponent } from './card/card.component';
import { CardCvComponent } from './card-cv/card-cv.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

const routes: Routes = [
  {path: '', component: CardDeckComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    CardDeckComponent,
    CardComponent,
    CardCvComponent,
    ProjectsComponent,
    NotFoundComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
