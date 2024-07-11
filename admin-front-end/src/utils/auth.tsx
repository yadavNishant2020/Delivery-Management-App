import axios, { AxiosInstance } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    // Define the structure of your user object here
    id: string;
    name: string;
    email: string;
    // Add other user properties as needed
}

interface AuthUser {
    setToken: (user: User, token: string) => void;
    token: string | null;
    user: User | null;
    getToken: () => string | null;
    http: AxiosInstance;
    logout: () => void;
}

export default function useAuthUser(): AuthUser {
    const navigate = useNavigate();

    const getToken = (): string | null => {
        const tokenString = sessionStorage.getItem('token');
        return tokenString ? JSON.parse(tokenString) : null;
    };

    const getUser = (): User | null => {
        const userString = sessionStorage.getItem('user');
        return userString ? JSON.parse(userString) : null;
    };

    const [token, setToken] = useState<string | null>(getToken());
    const [user, setUser] = useState<User | null>(getUser());

    const saveToken = (user: User, token: string): void => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token);
        setUser(user);
        navigate('/dashboard');
    };

    const logout = (): void => {
        sessionStorage.clear();
        navigate('/login');
    };

    const http: AxiosInstance = axios.create({
        baseURL: "http://localhost:8000/api",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return {
        setToken: saveToken,
        token,
        user,
        getToken,
        http,
        logout
    };
}
