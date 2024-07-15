// src/app/services/form.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' // or provided in a specific module
  })
export class FormService {
  private apiUrl = 'https://2e30-34-145-29-154.ngrok-free.app/analyze'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  analyzeComment(comment: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { comment:comment });
  }
}
