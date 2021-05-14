import { PostService } from './../post.service';
import { Router } from '@angular/router';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from './../post-model';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {
  @Input() posts: Array<PostModel>;

  faComments = faComments;
  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
  }
  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
