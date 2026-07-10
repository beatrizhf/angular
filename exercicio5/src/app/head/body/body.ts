import { Component } from '@angular/core';
import { Footer } from "./footer/footer";
import { Main } from "./main/main";
import { Header } from "./header/header";

@Component({
  selector: 'app-body',
  imports: [Footer, Main, Header],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
