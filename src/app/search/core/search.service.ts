import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

    private _observableSearchTerm: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }

    get observableSearchTerm(): Observable<string> {
        return this._observableSearchTerm.asObservable();
    }

    updateSearchTerm(value: string): void {
        this._observableSearchTerm.next(value);
    }

    
}
