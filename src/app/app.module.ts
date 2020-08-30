import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxImageEditorModule } from "ngx-image-editor";
import { DrawComponent } from './draw/draw.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,NgxImageEditorModule],
  declarations: [ AppComponent, HelloComponent, DrawComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
