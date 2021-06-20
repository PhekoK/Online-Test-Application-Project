import { Injectable } from "@angular/core";

@Injectable()
export class HelperService{
  static toBool(_val: any){
    if(_val === undefined || _val === null || _val === '' || _val === 'false' || _val === 'False'){
      return false;
    } else{
      return true;
    }
  }


  static shuffle(array: any){
    let currentIndex = array.length, temp, randomIndex;

    while(0 !== currentIndex){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temp;
    }
    return array;
  }

  static extend(_out: { [x: string]: any; }){
    _out =_out || {};

    for(let i =  1; i <arguments.length; i++){
      if(!arguments[i]){
        continue;
      }

      for(const key in arguments[i]) {
        if(arguments[i].hasOwnProperty(key)) {
          _out[key] = arguments[i][key];
        }
      }
    }
    return _out;
  }
}