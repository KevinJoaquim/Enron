import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public emails: Email[] = [];
  constructor() { }

  ngOnInit() {
    this.emails.push(new Email('21769550.1075859177511',
     'Cayenne',
     'vanderbilt',
     'rora-h',
     'lee.jackson@enron.com',
     ['harry.arora@enron.com','kristin.gandy@enron.com'],
     [],
     [],
     'Summer Interns',
     'Here is my summary of our second round summer interviews.  Top 3 candidates below.1.	Craig -	 Well rounded, Military background, excellent leadership experience (aircraft carrier pilot), did not have a finance background, but performed very well on Harrys analytical interview.  Very personable, confident and sold himself well.  I think he is very interested in Enron and would likely accept.2.	Victor -	He was a strong candidate in my more subjective interview, but I didnt think he was quite as strong as Ajay.  However he outperformed Ajay in the analytical interview.  With that feedback from Harry I feel comfortable placing Victor ahead of Ajay.  Also very interested in Enron.3.	Ajay - 	Very polished, presented/sold himself very well, Excellent understanding of Enrons business (did his homework),  Relative to others based on my interview he ranked in the top 2, However did not perform as well as others in the top 4-5 in the analytical interview.  For this reason I d push him back to number three.Aside from these three there were two others that are worth discussing.  Casey JonesAndrew RosenbergWe Understand these two may have outstanding offers from firms that they are very interested in.  I would not consider either of these two ahead of Craig, but might place Casey ahead of Victor.  However I think Casey is least likely to accept the offer.  My suggestion would be to make offers to Craig & Victor, then consider a 3rd offer to Andrew, recognizing we would likely get a maximum of 2/3.Lee Jackson',
     '2001-01-29 21:43:00.000' ));
  }

}

class Email {
  constructor(
    public messageId : String ='',
    public raw : String ='',
    public mailbox : String ='',
    public user : String ='',
    public from : String ='',
    public to : String[] =[],
    public cc : String[] =[],
    public bcc : String[] =[],
    public subject : String ='',
    public content : String ='',
    public date : String =''
  ) { }
}



