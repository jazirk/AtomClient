import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastMessageService } from '@app/core/services/toast-message.service';
import { AppConstants } from '@app/app.constants';


@Injectable()
export class HTTPConfigInterceptor implements HttpInterceptor {
    STATUS_CODES = [200, 201];
    updatedRequest: any;
    constructor(
        private toastMsgService: ToastMessageService
    ) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {


        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && this.STATUS_CODES.includes(event.status) && event.body) {
                    const body = event.body;
                    if (body.status === AppConstants.HTTP_MESSAGE_TYPE.FAIL && body.errorCode) {
                        const message = { shortMsg: body?.errorMessage, detail: body?.detail };
                        this.toastMsgService.showToastMessageByType(AppConstants.ALERT_TYPE.ERROR, message);
                    }
                    else if (event.status === AppConstants.STATUS_CODE.SUCCESS) {
                        // const message = { shortMsg: body?.message, detail: body?.detail };
                        const message = { shortMsg: body?.kind};
                        this.toastMsgService.showToastMessageByType(AppConstants.ALERT_TYPE.SUCCESS, message);
                    }
                }
            }));
    }
}
