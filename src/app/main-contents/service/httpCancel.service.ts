import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class HttpCancelService {

    private pendingHTTPRequests$ = new Subject<void>();

    public cancelPendingRequests(): void {
        this.pendingHTTPRequests$.next();
    }

    public onCancelPendingRequests(): Observable<void> {
        this.pendingHTTPRequests$.subscribe();
        return this.pendingHTTPRequests$.asObservable();
    }

}
