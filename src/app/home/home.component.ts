import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{ 
constructor(){}
a='2' 
b='5'
test=undefined
ngOnInit(): void {
    //alert('welcome')
  }
printdata($event:any){
alert(this.test)
}
}
