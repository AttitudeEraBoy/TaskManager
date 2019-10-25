import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularConfirmModalModule } from 'angular-confirm-modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatIconModule,
      MatSnackBarModule,
    MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    AngularConfirmModalModule.forRoot({
    })
  ],
  providers: [
    {provide: 'apiUrl', useValue: 'https://api.limantech.com/todo'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
