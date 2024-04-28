import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit{
@Output() selectedMenu: EventEmitter<string> = new EventEmitter<string>();

  navItems = [
    {
      title: "Tour and Packages",
      section: "packages"
    }
  ]
  constructor(
  ) {
  }

  ngOnInit(): void {
  }
  
}

