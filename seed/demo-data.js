'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Dr. Alice',
        role: 'doctor',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Dr. Bob',
        role: 'doctor',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Charlie',
        role: 'patient',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'Dave',
        role: 'patient',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Dr. Emily',
        role: 'doctor',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        name: 'Eve',
        role: 'patient',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 7,
        name: 'Frank',
        role: 'patient',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('doctors', [
      {
        id: 1,
        name: 'Dr. Alice',
        specialization: 'Cardiology',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Dr. Bob',
        specialization: 'Dermatology',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Dr. Emily',
        specialization: 'Neurology',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('appointments', [
      {
        id: 1,
        doctor_id: 1,
        patient_id: 3,
        slot_time: new Date(new Date().setHours(10, 0, 0, 0)),
        status: 'booked',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        doctor_id: 2,
        patient_id: 4,
        slot_time: new Date(new Date().setHours(11, 0, 0, 0)),
        status: 'booked',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        doctor_id: 5,
        patient_id: 6,
        slot_time: new Date(new Date().setHours(14, 0, 0, 0)),
        status: 'booked',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        doctor_id: 1,
        patient_id: 7,
        slot_time: new Date(new Date().setHours(15, 30, 0, 0)),
        status: 'booked',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        doctor_id: 2,
        patient_id: 3,
        slot_time: new Date(new Date().setHours(9, 0, 0, 0)),
        status: 'booked',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('appointments', null, {});
    await queryInterface.bulkDelete('doctors', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
