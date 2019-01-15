import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.component.html'
})
export class UserComponent {

    public user: any;

    constructor(public navCtrl: NavController) {
        let env = JSON.parse(localStorage.getItem('env'));
        if (env && env.user) {
            this.user = env.user;
            this.user.password = null;
        } else {
            this.user = {name: null, email: null, password: null};
        }
    }

}
