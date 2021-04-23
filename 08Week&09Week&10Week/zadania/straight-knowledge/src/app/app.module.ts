import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentOtherComponent } from './content-other/content-other.component';
import { IteratorDirective } from './iterator/iterator.directive';

@NgModule({
  declarations: [AppComponent, ContentComponent, ContentOtherComponent, IteratorDirective],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
