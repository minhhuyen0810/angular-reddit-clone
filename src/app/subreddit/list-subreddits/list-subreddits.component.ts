import { throwError } from 'rxjs';
import { SubredditService } from './../subreddit.service';
import { SubredditModel } from './../subreddit-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.css']
})
export class ListSubredditsComponent implements OnInit {
  subreddits: Array<SubredditModel>;
  constructor(
    private subredditService: SubredditService
  ) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      throwError(error);
    })
  }

}
