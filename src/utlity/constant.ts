function createSlots(): { startTime: Date; endTime: Date; status: 'available' | 'booked' }[] {
    const slots: any = [];
    const date = '2025-08-07';
    for (let hour = 13; hour < 16; hour++) {
        const startTime = new Date(`${date}T${hour.toString().padStart(2, '0')}:00:00`);
        const endTime = new Date(`${date}T${(hour + 1).toString().padStart(2, '0')}:00:00`);
        slots.push({
            startTime,
            endTime,
            status: 'available',
        });
    }
    return slots;
}

export const doctors = [
    { id: 1, name: 'Dr. Aman Sharma', specialization: 'Cardiologist', availableSlots: createSlots() },
    { id: 2, name: 'Dr. Anjali Sharma', specialization: 'Cardiologist', availableSlots: createSlots() },
    { id: 3, name: 'Dr. Rakesh Mehta', specialization: 'Dermatologist', availableSlots: createSlots() },
    { id: 4, name: 'Dr. Pooja Desai', specialization: 'Neurologist', availableSlots: createSlots() },
    { id: 5, name: 'Dr. Sanjay Kapoor', specialization: 'Cardiologist', availableSlots: createSlots() },
    { id: 6, name: 'Dr. Tanya Sinha', specialization: 'Dermatologist', availableSlots: createSlots() },
    { id: 7, name: 'Dr. Kabir Malhotra', specialization: 'Neurologist', availableSlots: createSlots() },
    { id: 8, name: 'Dr. Meera Rao', specialization: 'Dermatologist', availableSlots: createSlots() },
    { id: 9, name: 'Dr. Harsh Nair', specialization: 'Cardiologist', availableSlots: createSlots() },
    { id: 10, name: 'Dr. Sneha Bhatia', specialization: 'Neurologist', availableSlots: createSlots() },
    { id: 11, name: 'Dr. Arjun Pillai', specialization: 'Cardiologist', availableSlots: createSlots() },
    { id: 12, name: 'Dr. Nidhi Iyer', specialization: 'Dermatologist', availableSlots: createSlots() },
    { id: 13, name: 'Dr. Rohit Dubey', specialization: 'Cardiologist', availableSlots: createSlots() },
    { id: 14, name: 'Dr. Ishita Verma', specialization: 'Neurologist', availableSlots: createSlots() },
    { id: 15, name: 'Dr. Devika Reddy', specialization: 'Dermatologist', availableSlots: createSlots() },
];
