import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Test } from "../models/app";
import { Observable } from "rxjs";


@Injectable()
export class QuizService{

    constructor(private _httpClient: HttpClient){ }

    //Gets quizzes/tests questions from their respective json files
    getAllJSQuestions() : Observable<Test[]> {
        return this._httpClient.get<Test[]>('http://localhost:3000/questions')
    }

    getAllDPQuestions() : Observable<Test[]> {
        return this._httpClient.get<Test[]>('http://localhost:3000/dpquestions')
    }

    getAll() {
        return  [
            {  id: 'data/javascriptquiz.json' , name: 'Javascript'},
            {  id: 'data/designpatternsquiz.json', name: 'Design Patterns'}
           
        ]
    }



    get(url: string){
        return this._httpClient.get(url);
    }


}