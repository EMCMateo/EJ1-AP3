import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exercise5',
  templateUrl: './exercise5.page.html',
  styleUrls: ['./exercise5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Exercise5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
