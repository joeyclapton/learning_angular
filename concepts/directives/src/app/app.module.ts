import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PostComponent } from './post/post.component';
import { BackgroundDirective } from './shared/directivas/background.directive';
import { HighlightMouseDirective } from './shared/directivas/highlight-mouse.directive';
import { HighlightDirective } from './shared/directivas/highlight.directive';
import { NgElseDirective } from './shared/directivas/ng-else.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    UserInfoComponent,
    ContentListComponent,
    PostComponent,
    BackgroundDirective,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    CustomDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }