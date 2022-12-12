import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  id: string = ''
  firstname: string = ''
  lastname: string = ''

  staff: Employee[] = []

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) {
    if (route.snapshot.params["id"] != null){
      this.id = route.snapshot.params["id"];
    }
  }

  ngOnInit(): void {
  }

  submit() {
    let obj = {
      id: this.id == '' ? null: +this.id,
      firstname: this.firstname == '' ? null : this.firstname,
      lastname: this.lastname == '' ? null : this.lastname
    }
    this.httpService.getStaff(obj).subscribe(staff => {
      this.staff = staff
    })
  }

  idChange() {
    if (this.id != '') {
      this.firstname = ""
      this.lastname = ""
    }
  }

}
