import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
array:any=[]
answer:any=[]
question 
option1 
option2 
option3 
option4
i=83;
  constructor(private service:ServiceService) { }

submit(){
 this.i++;
 console.log(this.i)
 this.fun()


 
}
submit1(){
  this.i--;
  console.log(this.i)
  this.fun()
 }
fun(){
  this.service.getqus().subscribe((res)=>{
    console.log(res)
    this.array=res;
   
    this.question=this.array[this.i].Question

    this.option1=this.array[this.i].Option1

    this.option2=this.array[this.i].Option2

    this.option3=this.array[this.i].Option3

    this.option4=this.array[this.i].Option4
    console.log(
      this.question,
      this.option1,
      this.option2 ,

      this.option3,

      this.option4)
  
  })

}

finish(){
alert("submitted  and see Your Result");
  
}

  ngOnInit() {

    console.log()
     this.fun();
  }

  inp
  send(input){
    
    // this.submit()
    this.answer.push(this.question,input);
     this.service.storevalue1(this.answer);
  }

 

}
