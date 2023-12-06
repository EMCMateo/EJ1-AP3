import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.page.html',
  styleUrls: ['./exercise4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Exercise4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
