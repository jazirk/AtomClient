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

        // Pass headers for API.
        const headers = request.headers
            .set('Content-Type', AppConstants.AUTH_DATA.HEADERS.APP_JSON_CONTENT_TYPE)
            .set('Access-Control-Allow-Headers', 'Content-Type')
            .set('Access-Control-Allow-Origin', '*')
            .set('accept', '*/*')
            .set("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization")
            

        this.updatedRequest = request.clone({ headers });
        // return next.handle(this.updatedRequest);

        return next.handle(this.updatedRequest).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && this.STATUS_CODES.includes(event.status) && event.body) {
                    // const apiUrlShowingInlineMessages = AppConstants.API_URLS_SHOWING_INLINE_MESSAGES;
                    // if (!apiUrlShowingInlineMessages.find(element => event.url.indexOf(element) > -1)) {
                        const body = event.body;
                        if (body.status == AppConstants.HTTP_MESSAGE_TYPE.FAIL && body.errorCode) {
                            const message = { shortMsg: body?.errorMessage, detail: body?.detail };
                            this.toastMsgService.showToastMessageByType(AppConstants.ALERT_TYPE.ERROR, message);
                            // switch (body?.errorCode) {
                            //     case AppConstants.STATUS_CODE.APZ_CODE.PSWD_EXP:
                            //         this.toastMsgService.showToastMessageByType(AppConstants.ALERT_TYPE.ERROR, message);
                            //         this.authService.redirectToChangePwsd(this.updatedRequest.body?.userId);
                            //         break;
                            //     default:
                            //         this.toastMsgService.showToastMessageByType(AppConstants.ALERT_TYPE.ERROR, message);
                            //         break;
                            // }
                            // need to check with back end team
                            // } else if (body.status == AppConstants.HTTP_MESSAGE_TYPE.SUCCESS && body.httpStatus == AppConstants.STATUS_CODE.CREATED) {
                        }
                        else if (body.status == AppConstants.STATUS_CODE.SUCCESS) {
                            // if (!event.url.includes(AppConstants.API_ENDPOINTS.AUTH.GET_TOKEN)) {
                                const message = { shortMsg: body?.message, detail: body?.detail };
                                this.toastMsgService.showToastMessageByType(AppConstants.ALERT_TYPE.SUCCESS, message);
                            // }
                        }
                    // }
                }
            }));
    }
}
