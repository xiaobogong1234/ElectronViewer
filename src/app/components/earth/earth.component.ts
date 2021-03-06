import { Component, OnInit } from '@angular/core';
import { ViewerService } from 'src/app/service/viewer.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.scss']
})
export class EarthComponent implements OnInit {
  public viewer: any;

  constructor(private viewerService: ViewerService) {}

  ngOnInit() {
    this.viewer = this.viewerService.init('map');
  }
}
