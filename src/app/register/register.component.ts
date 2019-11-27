import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emp: Employee= new Employee("","","","","","",[],[]); 
  qualifications:string[] = ["", "", ""];
  
  constructor(private httpclientservice:DataService) { }

  ngOnInit() {
  }
  createprofile():void{
    console.log(this.emp)
    this.emp.qualifications = this.qualifications;
    this.httpclientservice.createprofile(this.emp)
      .subscribe(data => {
        alert("Employee created successfully.");
      });
    
  } 
}
