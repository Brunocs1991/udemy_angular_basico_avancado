import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  public id!: number;
  public username!: number;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.id = res['id'];
      this.username = res['username'];
      console.log(res);
    });
    this.activatedRoute.queryParams.subscribe((res) => {
      console.log(res);
    });
  }
}
