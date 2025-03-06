import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from './layout.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterOutlet]
})
export class LayoutPage implements OnInit {
  private layoutService = inject(LayoutService);

  title = computed(() => this.layoutService.title());

  constructor() { }

  ngOnInit() {
  }

}
