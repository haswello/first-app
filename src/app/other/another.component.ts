import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
      <article>
            Test Article
      </article>
  `,
  styles: [`
      article {
          border: 1px solid black;
      }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
