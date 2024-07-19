// src/services/hotelService.ts
import api from "@/services/api";
import {Hotel} from '@/types';

export const fetchHotels = async (): Promise<Hotel[]> => {
    try {
        const response = await api.get('/api/hotels');
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};

export const fetchHotelById = async (id: number): Promise<Hotel> => {
    console.log(api.defaults.baseURL);
    try {
        const response = await api.get(`/api/hotels/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching hotel with ID ${id}:`, error);
        throw error;
    }
};

export const searchHotels = async (query: string): Promise<Hotel[]> => {
    try {
        const response = await api.get(`/api/hotels/search/${query}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching hotels with query ${query}:`, error);
        throw error;
    }
};
