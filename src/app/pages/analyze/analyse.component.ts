import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
})
export class AnalyzeComponent implements OnInit {
  result: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const state = window.history.state;
      if (state && state.result) {
        this.result = state.result;
        console.log('res:', this.result);
      } else {
        this.result = null;
      }
    });
  }
}
