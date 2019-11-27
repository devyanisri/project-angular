import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { JobInfo } from '../job-info';
declare const clickCounter: any;
@Component({
  selector: 'app-jobdescription',
  templateUrl: './jobdescription.component.html',
  styleUrls: ['./jobdescription.component.css']
})
export class JobdescriptionComponent implements OnInit {
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
onClick(){
  clickCounter();
}
}
