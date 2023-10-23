import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { HttpClientModule } from '@angular/common/http';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}