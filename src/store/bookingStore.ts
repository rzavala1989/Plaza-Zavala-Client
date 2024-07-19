// src/store/bookingStore.ts
import create from 'zustand';
import {fetchHotels} from '@/services/hotelService';
import {fetchRoomTypes} from '@/services/roomTypeService';
import {Hotel, RoomType} from '@/types';

interface Option {
    label: string;
    value: number;
}

interface BookingState {
    checkInDate: Date | null;
    checkOutDate: Date | null;
    selectedHotel: Option | null;
    selectedRoomType: Option | null;
    hotels: Option[];
    roomTypes: Option[];
    setCheckInDate: (date: Date) => void;
    setCheckOutDate: (date: Date) => void;
    setSelectedHotel: (hotel: Option) => void;
    setSelectedRoomType: (roomType: Option) => void;
    loadHotels: () => void;
    loadRoomTypes: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
    checkInDate: null,
    checkOutDate: null,
    selectedHotel: null,
    selectedRoomType: null,
    hotels: [],
    roomTypes: [],
    setCheckInDate: (date) => set({checkInDate: date}),
    setCheckOutDate: (date) => set({checkOutDate: date}),
    setSelectedHotel: (hotel) => set({selectedHotel: hotel}),
    setSelectedRoomType: (roomType) => set({selectedRoomType: roomType}),
    loadHotels: async () => {
        try {
            const data: Hotel[] = await fetchHotels();
            set({hotels: data.map(hotel => ({label: hotel.name, value: hotel.hotelId}))});
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    },
    loadRoomTypes: async () => {
        try {
            const data: RoomType[] = await fetchRoomTypes();
            set({roomTypes: data.map(roomType => ({label: roomType.typeName, value: roomType.roomTypeId}))});
        } catch (error) {
            console.error('Error fetching room types:', error);
        }
    }
}));
