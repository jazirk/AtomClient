import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import * as DataActions from "../../store/actions/data.actions";
import {AppState, getAllItems, getDataState} from "@app/store/reducers";

@Injectable({
    providedIn: 'root'
})
export class DatastoreService {

    constructor(private store: Store<AppState>) {
    }

    load() {
        this.store.dispatch(new DataActions.LoadDataBegin());
    }

    getData() {
        return this.store.select(getDataState);
    }

    getItems() {
        return this.store.select(getAllItems);
    }
}
