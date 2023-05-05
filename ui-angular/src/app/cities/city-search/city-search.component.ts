import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {LoggingService} from "../../core/services/logging.service";
import {CitySearchRequest, SearchType} from "../../core/models/city-search-request";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'city-search-component',
  templateUrl: 'city-search.component.html',
  styleUrls: ['city-search.component.css']
})
export class CitySearchComponent  implements OnInit {

  constructor(private loggingService: LoggingService,
              private formBuilder: FormBuilder,  private route: ActivatedRoute) {
  }

  @Output() citiesSearchEvent = new EventEmitter<CitySearchRequest>();
  searchForm: FormGroup = this.formBuilder.group({});
  isSearching = false;

  searchType = {
    likeIgnoreCase: {
      value: SearchType.LIKE_IGNORE_CASE,
      humanName: "City name includes"
    },
    startsWith: {
      value: SearchType.STARTS_WITH_IGNORE_CASE,
      humanName: "City name starts with"
    }
  }
  defaultSearchTypeValue = this.searchType.likeIgnoreCase.value;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchForm = this.formBuilder.group({
        name: new FormControl(params['name'] || ''),
        searchType: new FormControl(params['searchType'] || this.defaultSearchTypeValue),
      });
    });

  }

  searchCities() {
    // As i understand you want to disable search button until request is not complete
    // since you are actually performing request in parent component
    // (smart component) you should control loading state there
    // and pass it in here via @Input().
    // Right now it's not working since it's a sync method
    // and is searching will be changed from true to false instantly
    this.isSearching = true;
    const searchRequest = this.searchForm.value as CitySearchRequest;
    this.citiesSearchEvent.emit(searchRequest);
    this.isSearching = false;
  }
}
