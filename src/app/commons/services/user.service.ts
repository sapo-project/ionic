import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SERVER_API_URL } from '../app.constants';

@Injectable()
export class UserService {

    private url = SERVER_API_URL + '/user';

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<any>(this.url);
    }

    login(data: object) {
        return this.http.post<any>(`${this.url}/login`, data);
    }
}