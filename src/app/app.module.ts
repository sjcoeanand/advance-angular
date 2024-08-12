import { PercentagePipe } from './pipes/percentage.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoRxjsComponent } from './todo-rxjs/todo-rxjs.component';
import { FormsModule } from '@angular/forms';
import { PipeLearningComponent } from './pipe-learning/pipe-learning.component';
import { StudentService } from './services/student.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoRxjsComponent,
    PipeLearningComponent,
    PercentagePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
