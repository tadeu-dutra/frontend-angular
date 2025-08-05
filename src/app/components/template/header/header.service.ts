import { Injectable } from '@angular/core';
import { HeaderData } from './header-data.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

    private _headerData = new BehaviorSubject<HeaderData>({
        title: 'Dashboard',
        icon: 'Home',
        routerUri: ''
    })

    readonly headerData = this._headerData.asObservable();

    setHeaderData(data: HeaderData): void {
        this._headerData.next(data);
    }

}