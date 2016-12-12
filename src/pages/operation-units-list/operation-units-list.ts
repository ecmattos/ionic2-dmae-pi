import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { OperationUnits } from '../../providers/operation-units';
import 'rxjs/add/operator/debounceTime';
 
@Component({
  selector: 'page-operation-units-list',
  templateUrl: 'operation-units-list.html'
})

export class OperationUnitsListPage {
 
    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;
 
    constructor(public navCtrl: NavController, public dataService: OperationUnits) {
        this.searchControl = new FormControl();
    }
 
    ionViewDidLoad() {
 
        this.setFilteredItems();
 
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
            this.searching = false;
            this.setFilteredItems();
 
        });
 
 
    }
 
    onSearchInput(){
        this.searching = true;
    }
 
    setFilteredItems() {
 
        this.items = this.dataService.filterItems(this.searchTerm);
 
    }
}