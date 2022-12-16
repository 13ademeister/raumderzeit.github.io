import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-cups',
  templateUrl: './all-cups.component.html',
})
export class AllCupsComponent implements OnInit {
  cupId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cupId = params.get('id');
    });
  }
}
