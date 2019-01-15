import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { UserService } from './commons/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './components/project/project.component';
import { ProjectService } from './commons/services/project.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ProjectComponent,
        UserComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(AppComponent, {
            backButtonText: 'Voltar'
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ProjectComponent,
        UserComponent,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        UserService,
        ProjectService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
