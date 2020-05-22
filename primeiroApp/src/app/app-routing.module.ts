import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ContarRouters } from './contar';

export const rotas = [
    {path:'index', pathMatch:'full', redirectTo:'localhost:4200'},
    ...ContarRouters
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports:[
    RouterModule
  ],
  providers: [],

})
export class AppRoutingModule { }
