// this is our main routing file
import {
	Route
} from '@angular/router';
import {
	Meteor
} from 'meteor/meteor';
import {
	ALL_DECLARATIONS
} from './modules';
import {
	registerComponent
} from './modules/components/register/register.component';// this is our main routing file
import {
	Route
} from '@angular/router';
import {
	Meteor
} from 'meteor/meteor';
import {
	ALL_DECLARATIONS
} from './modules';
import {
	registerComponent
} from './modules/components/register/register.component';

export const routes: Route[] = [{
		path: '',
		redirectTo: "register",
		pathMatch: "full"
	},
	{
		path: 'register',
		component: registerComponent
	},
];
export const ROUTES_PROVIDERS = [{
	provide: 'canActivateForLoggedIn',
	useValue: () => !!Meteor.userId()
}];
export const routes: Route[] = [{
		path: '',
		redirectTo: "register",
		pathMatch: "full"
	},
	{
		path: 'register',
		component: registerComponent
	},

];


export const ROUTES_PROVIDERS = [{
	provide: 'canActivateForLoggedIn',
	useValue: () => !!Meteor.userId()
}];
