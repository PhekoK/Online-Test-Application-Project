import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService{

    constructor(private _httpClient: HttpClient){ }

    //Gets quizzes/tests questions from their respective json files
    getAll(){
        
    }


}