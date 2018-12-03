import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    regoForm: FormGroup;
    formProcessed: boolean;

    constructor(private formBuilder: FormBuilder) {
        this.formProcessed = false;
    }

    ngOnInit() {
        this.setupForm();
    }

    setupForm() {
        this.regoForm = this.formBuilder.group({
            name: [null, Validators.required],
            email: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

    submitForm(form: FormGroup, event: Event) {
        if (this.regoForm.valid) {
            this.formProcessed = true;
        }
    }

    get name() { return this.regoForm.get('name'); }
    get email() { return this.regoForm.get('email'); }
    get password() { return this.regoForm.get('password'); }
}
