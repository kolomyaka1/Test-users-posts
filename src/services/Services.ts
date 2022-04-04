import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { BaseQueryArg } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { Post, User } from '../store/types/types'
import { AxiosResponse } from 'axios'
import api from '../axios/index';

export class UsersService {
    static getUsers(): Promise<AxiosResponse<User[], Response>> {
        return api.get<User[]>(`/users`);
    }
}

export class PostsService {
    static getPosts(): Promise<AxiosResponse<Post[], Response>> {
        return api.get<Post[]>('/posts');
    }
}