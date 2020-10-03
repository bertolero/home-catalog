import { html, LitElement } from 'lit-element';
import '@material/mwc-dialog';
import '@material/mwc-button';

export class HomeCatalogApp extends LitElement {
	constructor() {
		super();
	}

	render() {
		return html`
			<mwc-dialog title="Are you sure ?" open @closed=${this.onDialogClose}>
				<div>are you sure to perform this action ?</div>
				<mwc-button slot="secondaryAction" dialogAction="no" label="no"></mwc-button>
				<mwc-button slot="primaryAction" dialogAction="yes" label="yes" raised></mwc-button>
			</mwc-dialog>
		`;
	}

	onDialogClose(e: CustomEvent) {
		if (e.detail.action === 'yes') {
			alert('BOOM');
		} else if (e.detail.action === 'no') {
			alert('nothing happens');
		}
	}
}

customElements.define('home-catalog-app', HomeCatalogApp);
