import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.page.html',
  styleUrls: ['./exercise1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Exercise1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
