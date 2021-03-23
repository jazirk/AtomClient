import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

import * as DataActions from "../actions/data.actions";
import {HttpService} from "@app/core/services/http.service";
import {HttpParams} from "@angular/common/http";
import {AppConstants} from "@app/app.constants";

@Injectable()
export class DataEffects {
    constructor(private actions: Actions, private httpServ: HttpService) {}
    params = new HttpParams().set('q', 'kaplan test prep');


    @Effect()
    loadData = this.actions.pipe(
        ofType(DataActions.ActionTypes.LoadDataBegin),
        switchMap(() => {
            return this.httpServ.get(AppConstants.API_ENDPOINTS.GET_BOOKS, this.params).pipe(
                map(data => new DataActions.LoadDataSuccess({ data: data.body })),
                catchError(error =>
                    of(new DataActions.LoadDataFailure({ error: error }))
                )
            );
        })
    );
}
