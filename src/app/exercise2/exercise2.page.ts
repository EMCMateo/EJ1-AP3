import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.page.html',
  styleUrls: ['./exercise2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Exercise2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
