import { Component } from '@angular/core';

@Component({
	selector: 'visit-pt-button',
	templateUrl: 'visit-pt-button.pug',
	styleUrls: ['visit-pt-button.scss'],
})
export class VisitPTButton {
	readonly ptLink = 'https://pony.town/';
	readonly enableVisitPTButton = true;
	constructor() {
	}
}
