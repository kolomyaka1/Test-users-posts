import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { User } from '../store/types/types'
import { AxiosResponse } from 'axios'
import api from '../../src/axios/index';

export class UsersService {
    static getUsers(): Promise<AxiosResponse<User[], Response>> {
        return api.get<User[]>(`/users`);
    }
}
