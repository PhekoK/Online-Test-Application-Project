export class Option {

    id: number;
    questionId: number;
    name: string;
    isAnswer: boolean;
    selected: boolean = false;
    
    constructor(data: any){
        data =  data || {};
        this.id = data.id;
        this.questionId =  data.questionId;
        this.isAnswer = data.isAnswer;
        this.name = data.name;
    }
}