import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SERVER_API_URL as URL } from '../app.constants';

@Injectable()
export class ProjectService {

    constructor(private http: HttpClient) {}

    getProjects(userId): any {
        return this.http.get<any>(`${URL}/${userId}/project`);
    }
}