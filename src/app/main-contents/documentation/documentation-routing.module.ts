import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignPatternsComponent } from './design-patterns/design-patterns.component';
import { DocumentationComponent } from './documentation.component';
import { GlobalStyleComponent } from './global-style/global-style.component';
import { ScssComponent } from './scss/scss.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: 'scss',
        component: ScssComponent
      },
      {
        path: 'globalStyle',
        component: GlobalStyleComponent
      },
      {
        path: 'designPattern',
        component: DesignPatternsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
