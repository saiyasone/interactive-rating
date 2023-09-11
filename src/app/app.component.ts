import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'interactive-rating';
  isDone = false;
  isActive = '';

  buttonList: any[] = ['1', '2', '3', '4', '5'];

  setDone() {
    this.isDone = !this.isDone;
  }

  setActive(active: string) {
    if (active === this.isActive) {
      return;
    }

    this.isActive = active;
  }

  onSave() {
    if (!this.isActive) {
      return;
    }

    this.setDone();
  }
}
