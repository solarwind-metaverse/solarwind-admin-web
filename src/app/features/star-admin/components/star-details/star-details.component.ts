import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { StarAdminService } from '../../services/star-admin.service';
import { Star } from '../../models/star';
import { Store } from '@ngrx/store';
import { selectStar } from '../../star-admin.actions';
import { StarDetailsInputComponent } from './star-details-input.component copy';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-star-details',
  standalone: true,
  imports: [CommonModule, StarDetailsInputComponent],
  template: `
    <div>
      <div>
        <div class="flex my-2">
          <app-star-details-input name="edr3Id" title="EDR3 ID" value="{{ star?.edr3Id }}"></app-star-details-input>
          <app-star-details-input name="name" title="Name" value="{{ star?.name }}"></app-star-details-input>
        </div>
        <div class="flex my-2">        
          <app-star-details-input name="ra" title="Right ascencion" value="{{ star?.ra }}"></app-star-details-input>
          <app-star-details-input name="dec" title="Declination" value="{{ star?.dec }}"></app-star-details-input>
          <app-star-details-input name="parallax" title="Parallax" value="{{ star?.parallax }}"></app-star-details-input>
        </div>
        <div class="flex my-2">
          <app-star-details-input name="pmRa" title="Proper motion RA" value="{{ star?.pmRa }}"></app-star-details-input>
          <app-star-details-input name="pmDec" title="Proper motion Dec" value="{{ star?.pmDec }}"></app-star-details-input>
        </div>
        <div class="flex my-2">        
          <app-star-details-input name="mass" title="Mass" value="{{ star?.mass }}"></app-star-details-input>
          <app-star-details-input name="radius" title="Radius" value="{{ star?.radius }}"></app-star-details-input>
          <app-star-details-input name="temperature" title="Temperature" value="{{ star?.temperature }}"></app-star-details-input>
        </div>
        <div class="flex my-2">        
          <app-star-details-input name="magnitude" title="Magnitude" value="{{ star?.magnitude }}"></app-star-details-input>
          <app-star-details-input name="luminosity" title="Luminosity" value="{{ star?.luminosity }}"></app-star-details-input>
          <app-star-details-input name="spectralType" title="Spectral type" value="{{ star?.spectralType }}"></app-star-details-input>
        </div>
        <div class="flex my-2">
          <app-star-details-input name="evolutionaryStage" title="Evolutionary stage" value="{{ star?.evolutionaryStage }}"></app-star-details-input>
          <app-star-details-input name="age" title="Age" value="{{ star?.age }}"></app-star-details-input>
        </div>
      </div>
      NAME {{ name.value }}
    </div>
  `,
  styleUrls: ['./star-details.component.scss']
})
export class StarDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  starAdminService = inject(StarAdminService);
  star: Star | undefined

  name = new FormControl('');
  
  constructor(private store: Store<{ starAdmin: { selectedStarId: string } }>) {
    const starId = this.route.snapshot.params['id'];
    console.log('SSSTAR is: ', this.route.snapshot)
    this.loadStar(starId)
  }

  loadStar(id: string) {
    this.starAdminService.getStarById(id).then(star => this.star = star)
    this.store.dispatch(selectStar(id));
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.loadStar(id);
    });
  }

}
