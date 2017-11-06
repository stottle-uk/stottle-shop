import { Component, OnInit } from '@angular/core';
import { FilterService } from './core/filter.service';
import { Observable } from 'rxjs/Observable';
import { IFilter, IFilterItem } from './core/IFilterItem';

@Component({
  selector: 'stottle-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters: Observable<IFilter[]>;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filters = this.filterService.observableFilters; 
  }

  toggleFilter(filterItem: IFilterItem): void {
    filterItem.isSelected = !filterItem.isSelected;
    this.filterService.toggleFilter(filterItem);
  }

}
