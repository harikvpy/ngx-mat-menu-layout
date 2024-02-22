import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="posts-container">
      <h2>Posts</h2>
    </div>
  `,
  styles: [
    `
      .posts-container {
        height: 1500px;
      }
      .h2 {
        font-size: 1.3em;
        font-weight: 800;
      }
    `,
  ],
})
export class PostsComponent {}
