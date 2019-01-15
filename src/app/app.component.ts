import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ProjectComponent } from './components/project/project.component';

@Component({
  templateUrl: 'app.component.html'
})
export class AppComponent {

    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomeComponent;

    pages: Array<{title: string, component: any}>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen
    ) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Início', component: HomeComponent },
            { title: 'Projeto', component: ProjectComponent },
            { title: 'Perfil', component: UserComponent },
        ];

        if (!this.checkLogin()) {
            this.rootPage = LoginComponent;
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    public openPage(page): void {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (this.checkLogin()) {
            this.nav.setRoot(page.component);
        } else {
            this.nav.setRoot(LoginComponent);
        }
    }

    private checkLogin(): boolean {
        let env = JSON.parse(localStorage.getItem('env'));
        if (!env || !env.user) {
            return false;
        } else {
            return true;
        }
    }
}
