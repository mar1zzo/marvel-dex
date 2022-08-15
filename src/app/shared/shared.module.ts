import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MarvelHeaderComponent } from './marvel-header/marvel-header.component';
import { MarvelSearchComponent } from './marvel-search/marvel-search.component';
import { MarvelListComponent } from './marvel-list/marvel-list.component';

@NgModule({
  declarations: [
    MarvelHeaderComponent,
    MarvelSearchComponent,
    MarvelListComponent
  ],
  exports: [
    MarvelHeaderComponent,
    MarvelSearchComponent,
    MarvelListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
