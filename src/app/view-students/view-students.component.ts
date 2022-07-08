import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"name":"RAHUL","age":23,"photo":"https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg"},
    {"name":"RAJESH","age":23,"photo":"https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg"},
    {"name":"REMYA","age":30,"photo":"https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg"},
    {"name":"RAMESH","age":28,"photo":"https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg"},
    {"name":"REJINA","age":20,"photo":"https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg"},
    {"name":"RINO","age":23,"photo":"https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg"}
  ]
    
}
