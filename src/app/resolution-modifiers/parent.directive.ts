import { Directive, Host, Optional, Self } from '@angular/core';
import { ResolutionModServiceService } from '../services/resolution-mod-service.service';

@Directive({
  selector: '[appParent]',
  providers: [ResolutionModServiceService]
})
export class ParentDirective {

  constructor(@Optional() @Self()  private resolutionInst: ResolutionModServiceService) { 
    this.resolutionInst.fromWhere = 'Parent Directive';
    this.resolutionInst.printMessage("Parent directive for host annotation test");
  }

}
