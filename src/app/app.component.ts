import { Component } from '@angular/core';
import { Student } from 'src/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// anything in this classs is useable in the matching view
export class AppComponent {
  title = 'intro';

  index : number = 10;

  jimmy : Student = {age :18, major: "Biology", name: "Jimmy Buffet", isPassing :true}

  students: Student[] = [ this.jimmy, 
                          {name : " hannah Monsanto", major : "Toxicology", age : 1000, isPassing: true},
                          {name:"james", major :"History", age:25, isPassing:false }]

}
