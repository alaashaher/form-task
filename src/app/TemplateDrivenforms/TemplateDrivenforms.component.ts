import { Component } from '@angular/core';

@Component({
    selector: 'app-templatedrivenforms',
    templateUrl: './TemplateDrivenforms.component.html',
    styleUrls: ['./TemplateDrivenforms.component.scss']
})
export class TemplateDrivenformsComponent {
    model: any = {};

    onSubmit() {
        alert('SUCCESS!)\n\n' + JSON.stringify(this.model));
    }
}
