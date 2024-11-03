/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRoles, setUser } from "./features/clientSlice";
import useLocalStorage from "@/hooks/useLocalStorage";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useLocalStorage("token", null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const verifyToken = async () => {
            if (token) {
                const baseUrl = "https://workintech-fe-ecommerce.onrender.com";
                try {
                    const res = await axios.get(`${baseUrl}/verify`, {
                        headers: {
                            Authorization: token,
                        },
                    });
                    const user = res.data;
                    dispatch(setUser({ name: user.name, email: user.email }));
                    dispatch(setRoles([user.role_id]));
                    setToken(user.token);
                    setIsAuthenticated(true);
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        toast.error("Lütfen tekrar giriş yapınız.");
                        setToken(null);
                        dispatch(setUser({}));
                        dispatch(setRoles([]));
                        setIsAuthenticated(false);
                    }
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
                setIsAuthenticated(false);
            }
        };

        verifyToken();
    }, [token, dispatch, setToken, isAuthenticated]);

    const login = (newToken) => {
        setToken(newToken);
    }

    const logout = () => {
        setToken(null);
        dispatch(setUser({}));
        dispatch(setRoles([]));
        localStorage.removeItem('token');
    }

    return(
        <AuthContext.Provider value={{token, login, logout, loading, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )

}