import axios from 'axios'
import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useAuth = defineStore('auth-store', () => {
    
    const user = ref(null)

    const register = async function (credentials) {
        
        try {
            
            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/register', credentials);
            
            const { data } = await axios.get('/api/user')

            user.value = data

        } catch (err) {
            
            user.value = null;
            console.error('Error loading new arrivals:', err.response.data.message);
            return err;
            
        }
    }

    const login = async function (credentials) {

        try {

            await axios.get('/sanctum/csrf-cookie');
            await axios.post('/login', credentials);
            getUser()
            
        } catch (err) {
            
            user.value = null,
            console.error('Error loading new arrivals:', err.response.data.message);
            return err;
        }
    }

    const logout = async function () {
        
        try {

            await axios.post('/logout');
            user.value = null;

        } catch (err) {
            
            console.error('Error loading new arrivals:', err.response.data.message);
            return err;
        }
    }

    const getUser = async function () {
        
        try {
            
            const response = await axios.get('/api/user');
            user.value = response.data;

        } catch (err) {
            
            console.error('Error loading new arrivals:', err.response.data.message);
            return err;
            
        }
    }

    return {
        user,
        register,
        login,
        logout,
        getUser,
    }
});