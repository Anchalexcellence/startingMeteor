import {
	NgModule
} from "@angular/core";
import {
	BrowserModule
} from "@angular/platform-browser";
import {
	AppComponent
} from "./app.component";

import {
	ALL_DECLARATIONS
} from './modules';
import {
	routes,
	ROUTES_PROVIDERS
} from './app.routes';
import {
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';
import {
	RouterModule
} from '@angular/router';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forRoot(routes),
],
	declarations: [
		AppComponent,
		...ALL_DECLARATIONS
],
	providers: [
],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
	constructor() {
}
}
