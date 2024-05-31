import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  constructor() {}
  filter = 'all';
  isFilterActive = false;
  selectedCategory = 'Select category';
  categories = ['All', 'Web design', 'Applications', 'Web development'];

  filterFunc(event: any) {
    this.filter = event.target.innerHTML.toLowerCase();
    if (this.filter == 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (p) => p.category.toLowerCase() == this.filter
      );
    }
  }
  setSelected(option: any) {
    this.selectedCategory = option.target.innerHTML;
    this.toggleClass();
    this.filterFunc(option);
  }
  toggleClass() {
    this.isFilterActive = !this.isFilterActive;
  }

  projects = [
    {
      title: 'Finance',
      category: 'Web development',
      image: '../assets/images/project-1.jpg',
      alt: 'finance',
    },
    {
      title: 'Orizon',
      category: 'Web development',
      image: '../assets/images/project-2.png',
      alt: 'orizon',
    },
    {
      title: 'Fundo',
      category: 'Web design',
      image: '../assets/images/project-3.jpg',
      alt: 'fundo',
    },
    {
      title: 'Brawlhalla',
      category: 'Applications',
      image: '../assets/images/project-4.png',
      alt: 'brawlhalla',
    },
    {
      title: 'DSM.',
      category: 'Web design',
      image: '../assets/images/project-5.png',
      alt: 'dsm.',
    },
    {
      title: 'MetaSpark',
      category: 'Web design',
      image: '../assets/images/project-6.png',
      alt: 'metaspark',
    },
    {
      title: 'Summary',
      category: 'Web development',
      image: '../assets/images/project-7.png',
      alt: 'summary',
    },
    {
      title: 'Task Manager',
      category: 'Applications',
      image: '../assets/images/project-8.jpg',
      alt: 'task manager',
    },
    {
      title: 'Arrival',
      category: 'Web development',
      image: '../assets/images/project-9.png',
      alt: 'arrival',
    },
  ];
  filteredProjects = this.projects;
}
