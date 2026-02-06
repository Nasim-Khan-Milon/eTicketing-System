"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

export interface IUser {
    _id?: string;
    name: string;
    image: string;
    email: string;
    password?: string;
    role?: 'passenger' | 'admin';
    createdAt?: Date;
    updatedAt?: Date;
}

interface IUserContext {
    user: IUser | null;
    loading: boolean;
    refreshUser: () => Promise<void>;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const res = await axios.get("/api/user", { withCredentials: true })
            setUser(res.data.user);
        } catch (err: any) {
            if (err.response?.status === 401) {
                setUser(null);
            } else {
                console.error("Failed to fetch user:", err);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UserContext.Provider
            value={{
                user,
                loading,
                refreshUser: fetchUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}


