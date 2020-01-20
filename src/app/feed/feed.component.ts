import { Component, OnInit } from '@angular/core';
import { Debounce } from 'lodash-decorators';
import lunr from 'lunr';
import { posts } from '../posts';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  posts = posts;
  postsIndex;

  ngOnInit() {
    this.postsIndex = lunr(function() {
      this.ref('id');
      this.field('title');
      this.field('details');
      posts.forEach(week => week.posts.forEach(post => this.add(post)));
    });
  }

  onNewPost() {
    console.log('New Post');
  }

  @Debounce(250)
  onSearch(query = '') {
    if (!query) {
      this.posts = posts;
      return;
    }
    const results = this.postsIndex.search(query);
    this.posts = posts.reduce((accum, week) => {
      results.forEach(result => {
        const weekPosts = week.posts.filter(post => post.id === +result.ref);
        if (weekPosts.length) {
          accum.push(
            Object.assign({}, week, {
              posts: weekPosts,
            })
          );
        }
      });
      return accum;
    }, []);
  }
}
