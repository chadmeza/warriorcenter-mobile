import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SermonsService {
  constructor(private http: HttpClient) { }

  // Gets a list of all sermons
  getSermons() {
    return this.http.get<{ sermons: any[] }>(`${environment.apiUrl}api/sermons/limit/10`)
      .pipe(map(data => {
        return {
          sermons: data.sermons.map(sermon => {
            return {
              id: sermon._id,
              title: sermon.title,
              scripture: sermon.scripture,
              speaker: sermon.speaker,
              date: sermon.date,
              mp3: sermon.mp3
            };
          })
        };
      }));
  }
}
