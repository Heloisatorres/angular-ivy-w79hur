import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {GithubService} from './github.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent ],
  providers:   [GithubService],
  bootstrap:   [ AppComponent ],
})
export class AppModule { }
