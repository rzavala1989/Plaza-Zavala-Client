// src/services/roomTypeService.ts
import api from "@/services/api";
import {RoomType} from '@/types';

export const fetchRoomTypes = async (): Promise<RoomType[]> => {
    try {
        const response = await api.get('/api/roomtypes');
        return response.data;
    } catch (error) {
        console.error('Error fetching room types:', error);
        throw error;
    }
};

export const fetchRoomTypeById = async (id: number): Promise<RoomType> => {
    try {
        const response = await api.get(`/api/roomtypes/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching room type with ID ${id}:`, error);
        throw error;
    }
};

export const searchRoomTypes = async (query: string): Promise<RoomType[]> => {
    try {
        const response = await api.get(`/api/roomtypes/search/${query}`);
        return response.data;
    } catch (error) {
        console.error(`Error searching room types with query ${query}:`, error);
        throw error;
    }
};
