import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Star } from '../models/star';
import { StarAdminService } from '../services/star-admin.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { selectStar } from '../star-admin.actions';
import { Store, select } from '@ngrx/store';
import { selectStarId } from '../star-admin.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './star-admin.component.html',
  styleUrls: ['./star-admin.component.css']
})

export class StarAdminComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  stars: Star[] = [];
  starAdminService: StarAdminService = inject(StarAdminService);

  selectedStarId$: Observable<string | undefined>

  constructor(private store: Store<{ starAdmin: { selectedStarId: string } }>) {
    this.selectedStarId$ = this.store.pipe(select(selectStarId));
    const starId = this.route.snapshot.params['id'];
    console.log('starId is: ', store)
    this.starAdminService.getAllStars().then(stars => this.stars = stars);
  }

  increment() {
    this.store.dispatch(selectStar('AAAAA'));
  }

  decrement() {
    this.store.dispatch(selectStar('BBBBB'));
  }

}
