import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(private service:ServiceService) { }
  storey
  fun(){
  

    this.storey=this.service.storevalue()

  }
storee
  func(){
this.storee=this.service.value();
// console.log(this.storee)
  }
  result()
  {
    document.getElementById('btn').style.display="none"
    document.getElementById('txtid').style.display="block"

  }
array:any=[];
quset
i=0
  calculate(){
    return this.service.getuserdetail().subscribe((res)=>
    {
       this.i++
      this.array=res
this.quset=this.array[this.i].name;


    })
  }
a
  math(){
   this.a=40
    // console.log(this.storey[this.a]+this.storee[this.a])
    // for(var i=36;i<=this.storey.length;i=i+2)
    // {
      
    if(this.storey[this.a]==this.storee[this.a])
    {
     
      // console.log(this.a)
      alert("pass");
      this.a++;
    }
    else{
      alert("Try NextTime");
    }
  
}
arrays:any=[]
storage
values
show(){
    
   this.service.getqus().subscribe((res)=>
  { 
    console.log(this.arrays.length);
   
    this.arrays=res;
     
    for(let i=84;i<this.arrays.length;i++)
    {
      this.values=this.arrays[i];
       console.log( this.valuesdd);
   
    }

    
    
  })

}
  ngOnInit() {
    this.fun()
    this.func()
    this.calculate()
    this.math()
    this.show()
 
 
  }

}
