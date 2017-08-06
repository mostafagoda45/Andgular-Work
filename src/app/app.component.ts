import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router:Router){}
  public index;
  public title = 'Monuments';
  public monuments = [
    {Name: 'Pyramids', City: 'Giza' },
    {Name: 'Egyptian museum', City: 'Cairo' },
    {Name: 'Islamic museum', City: 'Cairo' },
    {Name: 'Abo Simbel temple', City: 'Aswan' },
    {Name: 'Qaitbay castle', City: 'Alexanderia' },
  ];

  public myStyle = {
    'backgroundColor' : 'lightgray',
    'textAlign' : 'center',
    'fontWeight' : 'bold'
  };

  public myClass = {
    'title': true,
  };

  @Input()
  public name:string;

  public onClick(data){
    this.name = data.Name;
    this.router.navigate(["/image" , this.name]);
  }
}
