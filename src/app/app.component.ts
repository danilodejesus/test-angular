import { Component } from '@angular/core';
import { iif } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-angular';

  users = [
    {
      id: 1,
      name: 'Danilo Viacava',
      description: 'Frontend developer'
    },
    {
      id: 2,
      name: 'Adrian Viacava',
      description: 'Analista digital'
    },
    {
      id: 3,
      name: 'Emma Petersen',
      description: 'Bilingue'
    },
    {
      id: 4,
      name: 'Daniel Cazorla',
      description: 'Chef'
    }
  ];

  deleteUser(index) {
    this.users = this.users.filter(i => {
      return i.id !== index
    })
  }


}
