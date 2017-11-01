import { Component, OnInit } from '@angular/core';
import { SearchService } from './core/search.service';

@Component({
  selector: 'stottle-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
