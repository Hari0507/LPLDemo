import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Userdetails } from 'src/app/models/userdetails.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  users:Userdetails[]=[];
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(frmData:NgForm)
  {
    this.addUser(frmData);
  }

  getUsers(){
    this._userService.getUsers()
    .subscribe(res=>{
      this.users=res as Userdetails[];
    })
  }

  addUser(userInfo:any){
    this._userService.addUser(userInfo)
    .subscribe(res=>{
      console.log(res);
    })
    
  }

}
