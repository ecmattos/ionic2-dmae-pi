import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OperationUnits {

  	items: any;
 
    constructor(public http: Http) {
 
        this.items = [
            {
                title: '101 - EBAB Moinhos de Vento',
                address: 'Av Voluntario da Patria, 1001',
                latitude: 40.713484,
                longitude: -74.006739
            },
            {
                title: '100 - ETA Moinhos de Vento',
                address: 'Av Vinte Quatro Outubro, 200',
                latitude: 40.712801,
                longitude: -74.004936
            },
            {
                title: 'NYPD',
                address: 'Address,101',
                latitude: 40.712199,
                longitude: -74.001675
            },
            {
                title: 'The Woolworth Building',
                address: 'Address,101',
                latitude: 40.712443,
                longitude: -74.008369
            },
            {
                title: 'Foley Square',
                address: 'Address,101',
                latitude: 40.714541,
                longitude: -74.003091
            },
            {
                title: 'Sazon',
                address: 'Address,101',
                latitude: 40.715631,
                longitude: -74.008498
            },
            {
                title: 'Southbridge Towers',
                address: 'Address,101',
                latitude: 40.709206,
                longitude: -74.003434
            },
            {
                title: 'Wall St',
                address: 'Address,101',
                latitude: 40.707612,
                longitude: -74.011996
            },
            {
                title: 'Tribeca Grill',
                address: 'Address,101',
                latitude: 40.719518,
                longitude: -74.009807
            }
        ]


        //this.http.get('/assets/data/operation-units.json')
        //    .map(res => res.json())
        //    .subscribe(data => {
        //        this.items = data;
         //       alert(this.items);
        //    });

        
    
    }

    getAll() {
        
        if(this.items){
            return Promise.resolve(this.items);
        }
 
        return new Promise(resolve => { 
            this.http.get('/assets/data/operation-units.json')
                .map(res => res.json())
                .subscribe(data => {
                    this.items = data.locations
                    resolve(this.items);
                    console.log(this.items);
                });
 
        });
    }

    filterItems(searchTerm){
 
        return this.items.filter(item => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
}
