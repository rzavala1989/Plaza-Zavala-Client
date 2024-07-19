// src/services/bookingService.ts
import api from "@/services/api";
import {Booking} from '@/types';

export const fetchBookings = async (): Promise<Booking[]> => {
    try {
        const response = await api.get('/api/bookings');
        return response.data;
    } catch (error) {
        console.error('Error fetching bookings:', error);
        throw error;
    }
};

export const fetchBookingById = async (id: number): Promise<Booking> => {
    try {
        const response = await api.get(`/api/bookings/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching booking with ID ${id}:`, error);
        throw error;
    }
};

export const createBooking = async (booking: Booking): Promise<Booking> => {
    try {
        const response = await api.post('/api/bookings', booking);
        return response.data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};
