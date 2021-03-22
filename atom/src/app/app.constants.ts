export const AppConstants = {
    PRODUCT_NAME: 'AtomClient',
    AUTH_DATA: {
        HEADERS: {
            APP_JSON_CONTENT_TYPE: 'application/json',
            CORS: '*'
        }
    },
    API_ENDPOINTS: {
        GET_BOOKS: '/books/v1/volumes'
    },
    STATUS_CODE: {
        SUCCESS: 200,
        CREATED: 201,
        MAX_SUCCESS_CODE: 206
    },
    HTTP_MESSAGE_TYPE: {
        WARN: 'WARN',
        ERROR: 'ERROR',
        CONFIRM: 'CONFIRM',
        INFO: 'INFO',
        SUCCESS: 'SUCCESS',
        FAIL: 'FAIL'
    },
    ALERT_TYPE: {
        SUCCESS: 'success',
        ERROR: 'error',
        WARN: 'warning',
        INFO: 'info',
        DANGER: 'danger',
        PRIMARY: 'primary'
    },
    LANGUAGES: {
        en: 'english'
    }
};


