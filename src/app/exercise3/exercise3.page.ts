import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.page.html',
  styleUrls: ['./exercise3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Exercise3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
