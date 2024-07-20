import {useEffect} from 'react';
import {useBookingStore} from '@/store/bookingStore';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import Link from 'next/link';
import DateInput from "@/components/custom-components/DateInput";

export default function HeroSection() {
    const {
        checkInDate,
        checkOutDate,
        selectedHotel,
        selectedRoomType,
        hotels,
        roomTypes,
        setCheckInDate,
        setCheckOutDate,
        setSelectedHotel,
        setSelectedRoomType,
        loadHotels,
        loadRoomTypes
    } = useBookingStore();

    useEffect(() => {
        loadHotels();
        loadRoomTypes();
    }, [loadHotels, loadRoomTypes]);

    return (
        <section className="relative bg-cover bg-center" style={{backgroundImage: "url('/hero-bg.jpg')"}}>
            <div className="container mx-auto px-6 py-16 flex flex-col justify-center items-center text-center">
                <h1 className="text-5xl font-serif font-bold text-white">Welcome to My Hotel</h1>
                <p className="text-xl text-white mt-4">Experience luxury and comfort with us</p>
                <div
                    className="relative z-2 flex flex-row items-center justify-center w-full p-8 bg-white shadow-lg rounded-lg mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>

                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Check-In Date</label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(date) => date && setCheckInDate(date)}
                            customInput={<DateInput value={checkInDate ? checkInDate.toDateString() : ''}
                                                    onClick={() => {
                                                    }} isCheckin={true}/>} // Use the DateInput component
                        />

                    </div>

                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Check-Out Date</label>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(date) => date && setCheckOutDate(date)}
                            customInput={<DateInput value={checkOutDate ? checkOutDate.toDateString() : ''}
                                                    onClick={() => {
                                                    }} isCheckin={false}/>} // Use the DateInput component
                        />
                    </div>

                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Hotel</label>
                        <Select
                            options={hotels}
                            value={selectedHotel}
                            onChange={(hotel) => setSelectedHotel(hotel as { label: string; value: number })}
                            className="w-full text-black"
                        />
                    </div>

                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Room Type</label>
                        <Select
                            options={roomTypes}
                            value={selectedRoomType}
                            onChange={(roomType) => setSelectedRoomType(roomType as { label: string; value: number })}
                            className="w-full text-black"
                        />
                    </div>

                    <Link href="/book" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Search</Link>
                </div>
            </div>
        </section>
    );
}
