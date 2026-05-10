import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

/*@Injectable({
  providedIn: 'root'
})
export class MembersService {
  constructor(private http: HttpClient) { }

  readonly baseUrl = "https://localhost:44336/api/Member";

  postMember(formData: Members) {
    return this.http.post(this.baseUrl, formData);
  }
}*/

/*[HttpBackend]
public IActionResult Post([FromBody] MyModel model)
{

}*/

// import { RouterOutlet } from '@angular/router';

class User {
  constructor(
    public name: string,
    public email: string,
    public telephone: string,
    public message: string,
    public numbers: string
  ) {}
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgxMaskDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [provideNgxMask()],
})
export class App {
  public user: User = new User('', '', '', '', '');

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  integer = this.getRandomInt(10000, 99999);
  randomNumber = this.integer.toString();

  max = 3;
  min = 0;

  randomIntForNumberOfTheDigitStyle: number[] = [
    Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
    Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
    Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
    Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
    Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
  ];
}
