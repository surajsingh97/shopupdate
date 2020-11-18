import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgForm, EmailValidator } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-loginform',
    templateUrl: './loginform.component.html',
    styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
    @ViewChild('f', { static: false }) loginForm: NgForm;
    msg: any;
    error: any;
    show = false;
    previousUrl: boolean = localStorage.getItem('url') ? true : false;

    constructor(private router: Router, private login: ApiService) {}

    ngOnInit(): void {}

    async onsubmit(form: NgForm): Promise<void> {
        if (this.loginForm.valid) {
            try {
                const username = this.loginForm.controls.email.value;
                const password = this.loginForm.controls.password.value;
                const res = await this.login.request('login', {
                    email: username,
                    password,
                });
                localStorage.setItem('token', res.token);
                const url = localStorage.getItem('url');
                if (this.previousUrl) {
                    this.router.navigateByUrl(url);
                }
                this.router.navigateByUrl('/home');
            } catch (error) {
                this.show = true;
                console.log(error.error.message);
                this.msg = error.error.message;
            }
        }
    }
}
