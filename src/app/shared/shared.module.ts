import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDirective } from './directives/accordion.directive';
import { LabelTagsComponent } from './components/label-tags/label-tags.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        FormsModule,
    ],
    declarations: [
        AccordionDirective,
        LabelTagsComponent,

    ],
    exports: [
        AccordionDirective,
        LabelTagsComponent,

    ]
})
export class SharedModule { }