import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ContentListComponent } from './content-list/content-list.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    UserInfoComponent,
    ContentListComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
