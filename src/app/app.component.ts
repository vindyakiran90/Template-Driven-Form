import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  topics = ['Angular', 'Cloud', 'Python'];

  userModel = new User('Vindya', 'vindya.k90@gmail.com', 9538504310, 'default', 'morning', 'Aayi matha road',
  'Bengaluru', 'Karnataka', 560057, true);

  constructor(private_enrollmentService: EnrollmentService){}

  topicHasError = true;

  validateTopic(value){
      if(value === 'default'){
          this.topicHasError = true;
      } else{
      this.topicHasError = false;
      }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error', error)
    )
  }
 
}