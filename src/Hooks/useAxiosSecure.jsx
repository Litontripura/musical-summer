import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "https://summer-school-server-inky.vercel.app"
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && error.response.status === 403) {
                    await logOut();
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]);

    return [axiosSecure];
};

export default useAxiosSecure;
