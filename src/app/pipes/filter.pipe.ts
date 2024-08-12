import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';
@Pipe({
    name : 'customFilter'
})
export class FilterPipe implements PipeTransform{
    transform (list: Student[], filterText:string) {
        if(filterText.toLowerCase() == 'all' || filterText.toLowerCase() == '' || list.length == 0){
            return list
        } else {
            return list.filter((val)=>{
                return val.gender.toLowerCase() == filterText.toLowerCase()
            })
        }
    }

}