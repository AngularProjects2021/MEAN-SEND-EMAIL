import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public to: string;
  public subject: string;
  public body: string;



  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
  }




  sendContact({value}) {
    this.contactService.sendContact(value).subscribe(res => {
      this.router.navigateByUrl('login');
    });
  }

}
