import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hasfavorite',
  templateUrl: './hasfavorite.component.html',
  styleUrls: ['./hasfavorite.component.css']
})
export class HasfavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    if(confirm("Do you want to delete")){
      var c = confirm("Are you sure you want to delete?");
      var status = document.getElementById("content");
      if (c == true) {  
        "You confirmed, thanks"; 
        console.log("Deleted") 
      } else {  
        "You cancelled the action";  
        }
    }      
  }
}