import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectComponent } from '../project/project.component';
import { ProjectService } from '../../commons/services/project.service';
import { RegisterService } from '../../commons/services/register.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'page-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

    public env: any;
    public registers: any[] = [];

    private subs: ISubscription[] = [];

    constructor(
        public navCtrl: NavController,
        public projectService: ProjectService,
        public registerService: RegisterService,
    ) {
        this.env = JSON.parse(localStorage.getItem('env'));
        if (typeof this.env.project == 'undefined') {
            this.env.project = null;
        }
    }

    ngOnInit(): void {
        this.subs.push(this.registerService.getRegisters(
            this.env.user.id,
            this.env.project._id
        ).subscribe(res => {
            this.registers = res.data.sort(function(a, b) {
                if (a.created_at < b.created_at)
                    return 1;
                if (a.created_at > b.created_at)
                    return -1;
                return 0;
            });
            // this.registers = res.data;
            console.log(this.registers);
        }));
    }

    public openProjectPage(): void {
        this.navCtrl.push(ProjectComponent);
    }

    public startJob(): void {
        this.subs.push(this.registerService.startJob(
            this.env.user.id,
            this.env.project._id
        ).subscribe(res => {
            if (res.status == 'success') {
                this.registers.unshift(res.data);
            }
        }));
    }

    public endJob(): void {
        if (this.registers.length > 0) {
            this.subs.push(this.registerService.endJob(this.registers[0]._id).subscribe(res => {
                if (res.status == 'success') {
                    this.registers.shift();
                    this.registers.unshift(res.data);
                }
            }));
        }
    }

    ngOnDestroy(): void {
        this.subs.forEach(s => {
            s.unsubscribe();
        });
    }

}
