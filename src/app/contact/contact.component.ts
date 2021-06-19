import { Component, OnInit } from '@angular/core';
import { InContact } from '../models/contact';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contact: InContact = new InContact();

  ContactUs(){
    alert("Thank you for letting us know. We'll be in contact with you soon :)");
    console.log(this.contact);
    this.resetForm();
  }

  resetForm(){
    this.contact = new InContact();
  }

}
