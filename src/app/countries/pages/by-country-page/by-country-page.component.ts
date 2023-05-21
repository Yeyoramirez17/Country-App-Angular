import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private countriesServicce: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.countriesServicce.cacheStore.byCountries.countries;
    this.initialValue = this.countriesServicce.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ): void {

    this.isLoading = true;

    this.countriesServicce.searchCountry( term )
    .subscribe( countries => {
        this.countries = countries
        this.isLoading = false;
      } );
  }

}
