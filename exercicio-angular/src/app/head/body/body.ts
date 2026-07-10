import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import { Main } from "./main/main";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-body',
  imports: [Header, Nav, Main, Footer],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
