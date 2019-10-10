import {MatButtonModule, MatCheckboxModule,} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';

@NgModule({
    imports:[MatButtonModule, MatCheckboxModule, MatMenuModule,MatCardModule, MatInputModule],
    exports:[MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule, MatInputModule]
})
export class MyMaterial{


}