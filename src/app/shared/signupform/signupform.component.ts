import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-signupform',
    templateUrl: './signupform.component.html',
    styleUrls: ['./signupform.component.css'],
})
export class SignupformComponent implements OnInit {
    msg: any = 'Create An Account';
    signupform: FormGroup;
    genders = ['Male', 'Female', 'Others'];
    forbiddennames = ['suraj', 'vikul', 'vishal', 'shivani'];
    pattern1 = '^((\\+91-?)|0)?[0-9]{10}$';
    show = false;

    constructor(private router: Router, private register: ApiService) {}

    ngOnInit(): void {
        this.signupform = new FormGroup({
            userName: new FormControl(null, [
                Validators.required,
                this.foorbiddenname.bind(this),
            ]),
            fullName: new FormControl(null, Validators.required),
            gender: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            mobileNumber: new FormControl(null, [
                Validators.required,
                Validators.maxLength(10),
                Validators.pattern(this.pattern1),
            ]),
            password: new FormControl(null, [Validators.required]),
            confirmPassword: new FormControl(null, [
                Validators.required,
                this.passwordcheck,
            ]),
            privacy: new FormControl(null, Validators.requiredTrue),
        });
    }

    foorbiddenname(control: FormControl): object {
        if (this.forbiddennames.indexOf(control.value) !== -1) {
            return { nameisforbiddentrue: true };
        }
        return null;
    }

    validateAllFormFields(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    passwordcheck(control): object {
        if (control.value != null) {
            const conpass = control.value;
            const pass = control.root.get('passwordc');
            if (pass) {
                const password = pass.value;
                if (conpass !== '' && password !== '') {
                    if (conpass !== password) {
                        return {
                            passwordvalidty: true,
                        };
                        return null;
                    }
                }
            }
        }
    }

    async onsubmit(): Promise<void> {
        if (this.signupform.valid) {
            console.log(this.signupform.value);
            try {
                const res = await this.register.request(
                    'verify',
                    this.signupform.value
                );
                this.msg = res.msg;
            } catch (error) {
                this.msg = error.statusText;
            }
        } else {
            this.validateAllFormFields(this.signupform);
        }
    }
}
