import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { DemoComponent } from './components/demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        DemoComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        DemoRoutingModule,
        FormsModule
    ]
})
export class DemoModule{

}
