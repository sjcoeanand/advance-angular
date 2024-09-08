import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employeeForm:FormGroup;
  constructor(private fb: FormBuilder){
    this.employeeForm = this.fb.group({
      empName: '',
      empDept: '',
      exEmployee:false,
      empSkills: this.fb.array([])
    })
  }

  get empSkillsArray():FormArray{
    return this.employeeForm.get('empSkills') as FormArray;
  }
  newSkill():FormGroup{
    return this.fb.group({
      skill:''
    })
  }
  addSkills(){
    this.empSkillsArray.push(this.newSkill());
  }

  removeSkill(i:number){
    this.empSkillsArray.removeAt(i);
  }

  saveDate(formData:FormGroup){
    console.log('formData = ', formData);    
  }
}
