import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Option, Question, Test, QuizConfig } from '../models/app';

@Component({
  selector: 'app-dptest',
  templateUrl: './dptest.component.html',
  styleUrls: ['./dptest.component.css'],
  providers: [QuizService]
})
export class DptestComponent implements OnInit {

  test: Test =  new Test(null);

  quizList: Array<Test> = [];

  constructor(private _quizService: QuizService) { }

  ngOnInit(): void {
    this._quizService.getAllDPQuestions().subscribe(res => {
      this.quizList = res;
    }, (error) => { console.log(error); })
  }

}
