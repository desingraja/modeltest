import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  array: any = []
  value: any = []
   

  constructor(private service: ServiceService) { }

  _name
  _id
  _mail



  ngOnInit() {

    this.fun()


  }

  fun() {
    this.service.getuserdetail().subscribe(res => {

      this.array = res;
      console.log(this.array);

      for (let i = 0; i < this.array.length; i++) {
        this._name = this.array[i].name;
        this._id = this.array[i].empid;
        this._mail = this.array[i].mail;

        if ((this._name != null && this._name != undefined) && (this._id != null && this._id!=undefined
           ) && (this._mail != null && this._mail != undefined)) {


        console.log(this._id)

          // this.value.push(this._name);
          // this.value.push(this._id);
          // this.value.push(this._mail)

          var detail={
            name:this._name,
            empid:this._id,
            mail:this._mail
            
           }
           
           this.value.push(detail);
          //  console.log(this.value)



        }

      }


    })

  }


}

// function print()
// {
// let array=[];
// var obj={};
// obj['name']=" shanthosh";
// obj['age']="20";
// array.push(obj);
// var obj1={};
// obj1['name']="kumar"
// obj1['age']="";
// array.push(obj1);
// var obj2={};
// obj2['name']='';
// obj2['age']="22";
// array.push(obj2);for(let i=0;i<array.length;i++)
// {
//     let _name=array[i].name.trim();
//    let _age=array[i].age.trim();
//    if(( _name!='') && (_age!=''))
//    {
//    console.log(array[i]);
//    }
// }}