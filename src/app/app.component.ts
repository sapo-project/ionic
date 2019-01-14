import { Component, ViewChild } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  templateUrl: 'app.html'
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
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
