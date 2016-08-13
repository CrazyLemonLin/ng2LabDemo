import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SearchComponent } from './search/search.component';
import { SearchService} from "./search.service";
import { HttpModule}  from "@angular/http";
import { ArticleComponent } from './article/article.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SearchComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
