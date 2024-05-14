import { Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { AsusComponent } from './asus/asus.component';
import { AppComponent } from './app.component';
import { HpComponent } from './hp/hp.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { SamsungComponent } from './samsung/samsung.component';

export const routes: Routes = [
    {path:"",component:AppComponent},
    {path:"apple",component:AppleComponent},
    {path:"asus",component:AsusComponent},
    {path:"hp",component:HpComponent},
    {path:"lenovo",component:LenovoComponent},
    {path:"samsung",component:SamsungComponent}


];