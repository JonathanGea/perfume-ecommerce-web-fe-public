import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new BehaviorSubject<Toast | null>(null);
  public toast$: Observable<Toast | null> = this.toastSubject.asObservable();
  private timeoutId: any = null;

  showToast(message: string, type: 'success' | 'error' | 'info' = 'info', duration: number = 3000): void {
    // Clear any existing timeout
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // Set new toast
    this.toastSubject.next({ message, type, duration });

    // Auto hide after duration
    this.timeoutId = setTimeout(() => {
      this.hideToast();
      this.timeoutId = null;
    }, duration);
  }

  hideToast(): void {
    this.toastSubject.next(null);
  }
}