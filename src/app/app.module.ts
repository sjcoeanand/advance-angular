import { PercentagePipe } from './pipes/percentage.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoRxjsComponent } from './todo-rxjs/todo-rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeLearningComponent } from './pipe-learning/pipe-learning.component';
import { StudentService } from './services/student.service';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { OptionalParamComponent } from './resolution-modifiers/optional-param/optional-param.component';
import { SelfParamComponent } from './resolution-modifiers/self-param/self-param.component';
import { HostParamComponent } from './resolution-modifiers/host-param/host-param.component';
import { ParentDirective } from './resolution-modifiers/parent.directive';
import { ChildDirective } from './resolution-modifiers/child.directive';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoRxjsComponent,
    PipeLearningComponent,
    PercentagePipe,
    FilterPipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoPageComponent,
    BookStoreComponent,
    OptionalParamComponent,
    SelfParamComponent,
    HostParamComponent,
    ParentDirective,
    ChildDirective,
    SearchbarComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
