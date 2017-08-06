import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-image',
  templateUrl : './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit, OnDestroy {
  public name: string;
  private sub: any;
  public path: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => this.name = params['name']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
  onClick(){
    this.path = "assets/images/" + this.name + ".jpg";
    window.open(this.path, '_parent');
  }


}

