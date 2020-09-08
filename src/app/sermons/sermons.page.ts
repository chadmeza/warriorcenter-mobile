import { Component, OnInit } from '@angular/core';
import { Sermon } from './sermon.model';
import { SermonsService } from './sermons.service';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage implements OnInit {
  sermons: Sermon[] = [];
  isLoading: boolean = false;

  constructor(private sermonsService: SermonsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.sermonsService.getSermons().subscribe((result) => {
      this.sermons = result.sermons;
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
    });
  }

  formatDate(sermonDate: Date) {
    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    return new Date(sermonDate).toLocaleDateString(undefined, options);
  }

}
