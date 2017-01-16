import { Component } from '@angular/core';
import {HighlightDirective1 } from './directives/index';

@Component({
    selector: 'root-app',
    templateUrl: 'app/app.component.html',
    providers:[HighlightDirective1]
    
})

export class AppComponent { }