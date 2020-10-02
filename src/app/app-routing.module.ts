import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OurTeamComponent} from './our-team/our-team.component';
// import {OurTeamDataResolve} from './our-team/resolvers/our-team-data-resolve.service';

const routes: Routes = [
    {
        path: '',
        component: OurTeamComponent,
        // resolve: {
        //   ourTeamData: OurTeamDataResolve
        // }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
