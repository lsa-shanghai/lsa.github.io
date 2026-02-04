import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'LSA Shanghai';

  projects = [
    {
      title: 'Open Source Contributions',
      description: 'Contributing to global open source projects and building tools for the developer community.',
      icon: 'code'
    },
    {
      title: 'Research & Innovation',
      description: 'Conducting cutting-edge research in software engineering and artificial intelligence.',
      icon: 'science'
    },
    {
      title: 'Community Building',
      description: 'Organizing workshops, meetups, and conferences to foster knowledge sharing.',
      icon: 'groups'
    },
    {
      title: 'Education & Training',
      description: 'Providing training programs and educational resources for developers of all levels.',
      icon: 'school'
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
