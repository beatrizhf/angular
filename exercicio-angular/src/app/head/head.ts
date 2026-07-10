import { Component } from '@angular/core';
import { Body } from "./body/body";

@Component({
  selector: 'app-head',
  imports: [Body],
  templateUrl: './head.html',
  styleUrl: './head.css',
})
export class Head {}
