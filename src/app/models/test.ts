import { Question } from "./question";
import { QuizConfig } from "./quiz-configuration";

export class Test{
    id: number = 0; 
    name: string = '';
    description: string = '';
    config!: QuizConfig;
    questions: Array<Question> = [];

    constructor(data: any){
        if(data){
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            data.questions.forEach((q:any) => {
                this.questions.push(new Question(q));
            });
        }
            
        
    }
}