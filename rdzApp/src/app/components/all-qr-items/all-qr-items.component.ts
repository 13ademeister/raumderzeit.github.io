import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-qr-items',
  templateUrl: './all-qr-items.component.html',
})
export class AllQrItemsComponent implements OnInit {
  objectId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.objectId = params.get('id');
    });
  }
}
