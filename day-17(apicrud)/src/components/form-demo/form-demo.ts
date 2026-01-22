import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-demo.html',
  styleUrl: './form-demo.css',
})
export class FormDemo {
// profileForm=new FormGroup({
//     name:new FormControl('',Validators.required),
//     email:new FormControl('',[Validators.required,Validators.email]),
// });
// handleSubmit(){
//   alert(
//     this.profileForm.value.name+'|'+this.profileForm.value.email
//   );
// }
profileForm:FormGroup;
constructor(private fb:FormBuilder){
  this.profileForm=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.required,Validators.email]]
  })
}
onSubmit(){
  console.log(this.profileForm.value);
}
};