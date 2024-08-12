import { BehaviorSubject } from 'rxjs';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-pipe-learning',
  templateUrl: './pipe-learning.component.html',
  styleUrls: ['./pipe-learning.component.scss']
})
export class PipeLearningComponent {
  studentService: StudentService = inject(StudentService);

  isEditing: boolean = false;
  isInserting: boolean = false;
  stdIdToEdit!: number;

  students!: Student[];
  totalMarks!: number;
  
  //PROPERTIES FOR INSERTING
  @ViewChild('name') Name!: ElementRef;
  @ViewChild('gender') Gender!: ElementRef;
  @ViewChild('dob') Dob!: ElementRef;
  @ViewChild('course') Course!: ElementRef;
  @ViewChild('marks') Marks!: ElementRef;
  @ViewChild('fee') Fee!: ElementRef;

  //PROPERTIES FOR EDITING
  @ViewChild('editName') editName!: ElementRef;
  @ViewChild('editGender') editGender!: ElementRef;
  @ViewChild('editDob') editDob!: ElementRef;
  @ViewChild('editCourse') editCourse!: ElementRef;
  @ViewChild('editMarks') editMarks!: ElementRef;
  @ViewChild('editFee') editFee!: ElementRef;

  filterText: string = 'All';
  totalStudents = new BehaviorSubject(0)
  ngOnInit(){
    this.students = this.studentService.filterStudents(this.filterText);
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.totalStudents.next(this.students.length)
  }

  OnInsertClicked(){
    this.isInserting = true;
  }
  OnInsertCancelled(){
    this.isInserting = false;
  }
  OnInsertSaved(){
    this.studentService.CreateStudent(
      this.Name.nativeElement.value, 
      this.Gender.nativeElement.value, 
      this.Dob.nativeElement.value, 
      this.Course.nativeElement.value, 
      this.Marks.nativeElement.value, 
      this.Fee.nativeElement.value
    );
    this.isInserting = false;
    this.students = this.studentService.filterStudents(this.filterText);
    this.totalStudents.next(this.students.length)
  }

  OnEditClicked(stdId: number){
    this.isEditing = true;
    this.stdIdToEdit = stdId;
  }
  OnEditCancelled(){
    this.isEditing = false;
  }
  onDelete(id:number){
    this.students = this.students.filter(rec => {
      return rec.id !== id
    });
    this.totalStudents.next(this.students.length);
    
  }

  OnEditSaved(student: Student){
      student.name = this.editName.nativeElement.value; 
      student.gender = this.editGender.nativeElement.value; 
      student.dob = this.editDob.nativeElement.value; 
      student.course = this.editCourse.nativeElement.value; 
      student.marks = this.editMarks.nativeElement.value; 
      student.fee = this.editFee.nativeElement.value;

      this.isEditing = false;
      this.students = this.studentService.filterStudents(this.filterText);
      this.totalStudents.next(this.students.length)
  }

  filterRecords(event: any){
    let filterValue = event.target.value;
    this.filterText = filterValue;
    this.students = this.studentService.filterStudents(filterValue);
    this.totalStudents.next(this.students.length)
  }
}
