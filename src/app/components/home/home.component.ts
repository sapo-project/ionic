import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../../commons/services/project.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent {

    public env: any;

    constructor(
        public navCtrl: NavController,
        public projectService: ProjectService,
    ) {
        this.env = JSON.parse(localStorage.getItem('env'));
        if (typeof this.env.project == 'undefined') {
            this.env.project = null;
        }
    }

    public openProjectPage(): void {
        this.navCtrl.push(ProjectComponent);
    }

}
