import { Option } from "./option";

export class Question{
    id: number;
    name: string;
    questionTypeId: number;
    options: Option[];
    answered: boolean = false;

    constructor(data: any){
        data = data || {};
        this.id =  data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach( (ele: any) => {
            this.options.push(new Option(ele));
        });

    }
}