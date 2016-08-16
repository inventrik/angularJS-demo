import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./menu.component";
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);