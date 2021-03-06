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
                address: 'Av Voluntario da Patria, 2100',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.713484,
                longitude: -74.006739,
                icon: 'home'
            },
            {
                title: '100 - ETA Moinhos de Vento',
                address: 'Av Vinte Quatro Outubro, 200',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.712801,
                longitude: -74.004936,
                icon: 'globe'
            },
            {
                title: 'NYPD',
                address: 'Address,101',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.712199,
                longitude: -74.001675,
                icon: 'map'
            },
            {
                title: 'The Woolworth Building',
                address: 'Address,101',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.712443,
                longitude: -74.008369,
                icon: 'pin'
            },
            {
                title: 'Foley Square',
                address: 'Address,101',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.714541,
                longitude: -74.003091,
                icon: 'pin'
            },
            {
                title: 'Sazon',
                address: 'Address,101',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.715631,
                longitude: -74.008498,
                icon: 'pin'
            },
            {
                title: 'Southbridge Towers',
                address: 'Address,101',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.709206,
                longitude: -74.003434,
                icon: 'pin'
            },
            {
                title: 'Wall St',
                address: 'Address,101',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.707612,
                longitude: -74.011996,
                icon: 'pin'
            },
            {
                title: 'Tribeca Grill',
                address: 'Address,101',
                city: 'Porto Alegre',
                state: 'RS',
                latitude: 40.719518,
                longitude: -74.009807,
                icon: 'pin'
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
