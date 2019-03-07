import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  language = 'javascript';
  content = `
  export class AppComponent {
    language = 'html';
    content = '<p>test</p>';
    title = 'project-doc';
  }
  `;
  title = 'project-doc';
}
