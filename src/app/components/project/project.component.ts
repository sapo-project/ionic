import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-project',
    templateUrl: 'project.component.html'
})
export class ProjectComponent {

    public env: any;
    public project: any = {name: null, description: null};

    constructor(public navCtrl: NavController) {
        this.env = JSON.parse(localStorage.getItem('env'));
        console.log('this.env.project', this.env.project);
        if (typeof this.env.project == 'undefined') {
            this.project = {name: null, description: null};
        } else {
            this.project = this.env.project;
        }
    }

}
