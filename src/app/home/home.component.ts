import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { JobInfo } from '../job-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  desc: JobInfo[];

  constructor(private httpclientservice: DataService) { }
  
    ngOnInit() {
      this.httpclientservice.getJobDesc().subscribe(
        response => this.handleSuccessfulResponse(response)
      );
    }
    handleSuccessfulResponse(response: JobInfo[]): void {
      console.log(response)
      this.desc= response;


}
}