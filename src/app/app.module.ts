import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HereMapComponent } from './here-map/here-map.component';
import { DistributorCardComponent } from './distributor-card/distributor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HereMapComponent,
    DistributorCardComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
