import { ReactiveFormsComponent } from './ReactiveForms.component';
import { Routes } from '@angular/router';

export const ReactiveFormsRoutes: Routes = [{
    path: '',
    component: ReactiveFormsComponent,
    data: {
        heading: 'ReactiveFormsComponent'
    }
}
];
