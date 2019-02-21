import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SERVER_API_URL as URL } from '../app.constants';

@Injectable()
export class RegisterService {

    constructor(private http: HttpClient) {}

    public getRegisters(userId, projectId): any {
        return this.http.get<any>(`${URL}/${userId}/project/${projectId}/register`);
    }

    public startJob(userId, projectId): any {
        return this.http.post<any>(`${URL}/${userId}/project/${projectId}/register`, {});
    }

    public endJob(id): any {
        return this.http.post<any>(`${URL}/register/${id}`, {});
    }
}