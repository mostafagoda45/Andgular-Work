import { Routes } from '@angular/router'
import { ShowImageComponent } from './src/app/show-image/show-image.component'

export const routes:Routes =[
    {path: '', redirectTo: '/image/Pyramids', pathMatch: 'full'},
    {path: 'image/:name', component:ShowImageComponent}
]