import { Component } from '@angular/core';

@Component({
	selector: 'visit-pt-button',
	templateUrl: 'visit-pt-button.pug',
	styleUrls: ['visit-pt-button.scss'],
})
export class VisitPTButton {
	readonly ptLink = 'https://bronykindness.net/';
	readonly enableVisitPTButton = true;
	constructor() {
	}
}
