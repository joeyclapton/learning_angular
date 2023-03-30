import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, AlertSuccessComponent, AlertWarningComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
