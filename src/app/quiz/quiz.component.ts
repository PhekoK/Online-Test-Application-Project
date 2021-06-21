import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { Option, Question, Test, QuizConfig } from '../models/app';
import { HelperService } from '../services/helper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {

  //test: Test = new Test();
  //id: any;
  //test: Test = new Test();
  //id: any;
  quizes: any[] = [];
  quiz: Test = new Test(null);
  mode = 'quiz';
  quizName: string = '';
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question when answered.
    'duration': 300,  // indicates the time (in secs) in which the test needs to be finished
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager ={
    index:0,
    size: 1,
    count: 1
  };

  timer: any = null;
  startTime: Date = new Date();
  endTime: Date = new Date();
  ellapsedTime = '00:00';
  duration = '';
  id: any;


  constructor(private _router: Router,
              private _quizService: QuizService){  }

  ngOnInit() {
    this.quizes = this._quizService.getAll(); //fetches quizes from backend 
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
    
    //User ID
  }

  /*ngOnInit(): void{
    this.id = this._activatedRouter.snapshot.paramMap.get('http://localhost:3000/dpquestions');
    this._quizService.getAllJSQuestions().subscribe(results => {
      this.id = results;
    }, (error) => { console.log(error); })
  }*/

  loadQuiz(quizName: string) {
    this._quizService.get(quizName).subscribe(res => {
      this.quiz = new Test(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }
  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }


  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }
  
  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };


  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  goBack(){
    this._router.navigate(['./quizhome']);
  }

  onSubmit(){
    let answers = [];
    this.quiz.questions.forEach(i => answers.push({ 'testId': this.id , 'questionId': i.id, 'answered': i.answered}));

    alert('You are about to submit the test...!!')
    console.log(this.quiz.questions);
    this.mode = 'result';
  }

}
