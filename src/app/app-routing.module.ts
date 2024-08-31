import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { TodoRxjsComponent } from './todo-rxjs/todo-rxjs.component';
import { PipeLearningComponent } from './pipe-learning/pipe-learning.component';
import { BookStoreComponent } from './book-store/book-store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'todo',
    component:TodoRxjsComponent
  },
  {
    path: 'pipes',
    component:PipeLearningComponent
  },
  {
    path: 'books',
    component: BookStoreComponent
  },
  {
    path: '**',
    component: NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
