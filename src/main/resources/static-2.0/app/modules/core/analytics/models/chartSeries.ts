/**
 * New typescript file
 */
export class ChartSeries {
  id:String='1';
  allowPointSelect:Boolean=true;
  constructor(public name :String,public data:any[]) {
  this.name=name;
  this.data=data;
}
}