import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Employee } from '../../../modals/employee';

@Component({
  selector: 'app-employees',
  imports: [DatePipe],
  templateUrl: './employees.html',
  styleUrls: ['./employees.css'],
})

export class EmployeesComponent {

  employees:Employee[] = [
    {
      id: 101,
      name: "Ravi Kumar",
      salary: 45000,
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      phoneNo: "9876543210",
      dateOfJoining: new Date("2022-03-15")
    },
    {
      id: 102,
      name: "Sneha Reddy",
      salary: 52000,
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      phoneNo: "9123456780",
      dateOfJoining: new Date("2021-11-08")
    },
    {
      id: 103,
      name: "Amit Sharma",
      salary: 60000,
      imageUrl: "https://randomuser.me/api/portraits/men/54.jpg",
      phoneNo: "9988776655",
      dateOfJoining: new Date("2020-06-21")
    },
    {
      id: 104,
      name: "Priya Verma",
      salary: 48000,
      imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      phoneNo: "9012345678",
      dateOfJoining: new Date("2023-01-10")
    },
    {
      id: 105,
      name: "Suresh Naidu",
      salary: 70000,
      imageUrl: "https://randomuser.me/api/portraits/men/76.jpg",
      phoneNo: "9345678123",
      dateOfJoining: new Date("2019-09-30")
    }
  ];
}
