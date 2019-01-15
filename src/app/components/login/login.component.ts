import { Component, OnDestroy } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ISubscription } from 'rxjs/Subscription';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { UserComponent } from '../user/user.component';
import { UserService } from '../../commons/services/user.service';
import { ProjectService } from '../../commons/services/project.service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnDestroy {

    public user: any;

    private subs: ISubscription[] = [];

    constructor(
        private toastCtrl: ToastController,
        public loadingCtrl: LoadingController,
        public navCtrl: NavController,
        public userService: UserService,
        public projectService: ProjectService,
    ) {
        this.user = {email: null, password: null};
    }

    public login(): void {
        let loading = this.loadingCtrl.create({content: 'Por favor, aguarde.'});
        let toast = this.toastCtrl.create({
            message: 'Login realizado com sucesso!',
            duration: 6000,
            position: 'bottom'
        });
        this.subs.push(this.userService.login(this.user).subscribe(res => {
            if (res.status == 'success') {
                this.getProject(res.data);
                toast.present();
            } else {
                toast.setMessage(res.message);
                toast.present();
            }
            loading.dismiss();
        }, () => {
            loading.dismiss();
            toast.setMessage('Erro ao se comunicar com servidor.');
                toast.present();
        }));
    }

    public getProject(user): void {
        this.subs.push(this.projectService.getProjects(user.id).subscribe(res => {
            let env = {user: user, project: res.data[0]};
            localStorage.setItem('env', JSON.stringify(env));
            this.navCtrl.setRoot(HomeComponent);
        }));
    }

    public openRegisterPage(): void {
        this.navCtrl.push(UserComponent);
    }

    ngOnDestroy(): void {
        this.subs.forEach(s => {
            s.unsubscribe();
        });
    }
}
