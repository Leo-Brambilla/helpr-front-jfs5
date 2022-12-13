import { ThisReceiver } from '@angular/compiler';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public theme: string = "light-theme" //

  constructor() { }

  ngOnInit(): void {
    let theme = localStorage.getItem("theme")
    theme != null ? this.theme = theme : this.theme 
  }

  public logout(): void {
    // LOGOUT
  }

  @HostBinding('class')
  public get themeMode(): string {
   return this.theme == "light-theme" ? "light-theme" : "dark-theme"

  }
 public switchTheme(): void{
   this.theme == "light-theme" ? this.theme = "dark-theme" : this.theme = "light-theme"
   localStorage.setItem("theme", this.theme)
}


  
}
