import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  emp: Employee[];
  constructor(private httpclientservice: DataService) { }

  ngOnInit() {
    this.httpclientservice.getProfile().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response: Employee[]): void {
    console.log(response)
    this.emp = response;
  }

}
