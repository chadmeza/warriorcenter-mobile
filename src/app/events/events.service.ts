import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) { }

  // Gets a list of all events
  getEvents() {
    return this.http.get<{ events: any[] }>(`${environment.apiUrl}api/events/limit/30`)
      .pipe(map(data => {
        return {
          events: data.events.map(event => {
            return {
              id: event._id,
              name: event.name,
              details: event.details,
              address: event.address,
              date: event.date,
              time: event.time
            };
          })
        };
      }));
  }
}
