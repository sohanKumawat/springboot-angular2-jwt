/**
 * New typescript file
 */
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operator/map';


export class RxTesting {
  
  RxTesting(){
  Observable.of(1,2,3).map(function (x:number) { return x + '!!!'; });
    
    map.call(of(1,2,3), function (x1:number) { return x1 + '!!!'; });
    
     var foo = Observable.create(function (observer:any) {
  console.log('Hello');
  observer.next(42);
       
});

foo.subscribe(function(x:number) {
  console.log(x);
});
foo.subscribe(function (y:String) {
  console.log(y);
});
    
  }
  

  
}