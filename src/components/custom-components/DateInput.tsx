import {FiCalendar} from 'react-icons/fi';
import React from "react";

// Define a type for the props
interface DateInputProps {
    value: string;
    onClick: () => void;
    isCheckin: boolean;
}

// Use the defined type for the props
const DateInput: React.FC<DateInputProps> = ({value, onClick, isCheckin}) => (
    <div className="w-full px-3 py-2 text-gray-500 border rounded flex justify-between items-center cursor-pointer"
         onClick={onClick}>
        <span>{value || `Select ${isCheckin ? 'check-in' : 'check-out'} date`}</span>
        <FiCalendar/>
    </div>
);

export default DateInput;
