import { Student } from "../models/student.model";

export class StudentService{
    students: Student[] = [
        new Student(1, 'John Smith', 'Male', new Date('11-12-1997'), 'MBA', 520, 1899),
        new Student(2, 'Mark Vought', 'Male', new Date('10-06-1998'), 'B.Tech', 420, 2899),
        new Student(3, 'Sarah King', 'Female', new Date('09-22-1996'), 'B.Tech', 540, 2899),
        new Student(4, 'Merry Jane', 'Female', new Date('06-12-1995'), 'MBA', 380, 1899),
        new Student(5, 'Steve Smith', 'Male', new Date('12-21-1999'), 'M.Sc', 430, 799),
    ];

    totalMarks: number = 600;

    CreateStudent(name:string, gender:string, dob:Date, course:string, marks:number, fee:number){
        let id = this.students.length + 1;
        let student = new Student(id, name, gender, dob, course, marks, fee);
        this.students.push(student);
    }

    filterStudents(filterText:string){
        if(filterText.toLowerCase() == 'all' || filterText.toLowerCase() == '' || this.students.length == 0){
            return this.students
        } else {
            return this.students.filter((val)=>{
                return val.gender.toLowerCase() == filterText.toLowerCase()
            })
        }
    }
    deleteStudent(id:number){
        return this.students.filter((val)=>{
            return val.id !== id;
        })
    }
}