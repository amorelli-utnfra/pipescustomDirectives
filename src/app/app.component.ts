import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { HighlightDirective } from './directives/highlight.directive';
import { GenderRowColorDirective } from './directives/gender-row-color.directive';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, GenderRowColorDirective, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  users: any;
  search="";
  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.apiService.getUsers()
    .subscribe(users => {
        console.log(users);
        
      this.users = users.results;
    });
  }
  title = 'pipesCustomDirective';
}
