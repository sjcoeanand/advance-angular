import { Injectable } from '@angular/core';

// not provided service class in injectable so optional is preventing from null innjector error
@Injectable()
export class ResolutionModServiceService {

  fromWhere:string = 'resolution service for Optional'
  printMessage(msg:string){
    console.log('msg + fromWhere = >', msg ,'+', this.fromWhere);
    return [this.fromWhere, msg];
  }
}

//self doesnt care about this 
@Injectable({
  providedIn:'root'
})
export class ResolutionModServiceServiceSelf {
  fromWhere:string = 'resolution service for Self'
  printMessage(msg:string){
    return [this.fromWhere, msg];
  }
}
