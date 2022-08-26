import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GlobalEffect, globalReducer } from 'src/app/shared/store';

import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HomeRoutingModule,
        StoreModule.forRoot({ global: globalReducer }),
        EffectsModule.forFeature([GlobalEffect]),
    ],
})
export class HomeModule {}
