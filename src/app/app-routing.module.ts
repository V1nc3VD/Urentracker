import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'uren',
    loadChildren: () => import('./uren/uren.module').then( m => m.UrenPageModule)
  },

  {
    path: 'instellingen',
    loadChildren: () => import('./instellingen/instellingen.module').then( m => m.InstellingenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
