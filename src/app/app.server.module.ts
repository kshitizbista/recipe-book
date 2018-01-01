import {AppModule} from './app.module';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent]
})

export class AppServerModule {}
