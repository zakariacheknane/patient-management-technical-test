import { createSlice } from '@reduxjs/toolkit';

interface Patient {
  dateOpened: string;
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  idNumber: string;
  coverage: string;
  lastUpdate: string;
}

interface PatientState {
  patients: Patient[];
}

const initialState: PatientState = {
  patients: [
    {
        dateOpened: "05/12/2023",
        lastName: "Bouayaben",
        firstName: "Mehdi",
        birthDate: "01/01/1997",
        gender: "M",
        idNumber: "BK653575",
        coverage: "CNOPS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Cherkaoui",
        firstName: "Mehdi",
        birthDate: "15/08/1984",
        gender: "M",
        idNumber: "BK326584",
        coverage: "CNSS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Mohtadi",
        firstName: "Amina",
        birthDate: "29/10/1994",
        gender: "F",
        idNumber: "BK125863",
        coverage: "CNSS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Lakhdar",
        firstName: "Karim",
        birthDate: "16/05/2000",
        gender: "M",
        idNumber: "BK224108",
        coverage: "CNSS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Sbai",
        firstName: "Yassine",
        birthDate: "10/12/1979",
        gender: "M",
        idNumber: "BK235114",
        coverage: "CNOPS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Ait Taleb",
        firstName: "Asmaa",
        birthDate: "22/06/1995",
        gender: "F",
        idNumber: "BK121416",
        coverage: "CNOPS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Ait Taleb",
        firstName: "Asmaa",
        birthDate: "22/06/1995",
        gender: "F",
        idNumber: "BK121416",
        coverage: "CNOPS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Bouayaben",
        firstName: "Mehdi",
        birthDate: "01/01/1997",
        gender: "M",
        idNumber: "BK653575",
        coverage: "CNOPS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Cherkaoui",
        firstName: "Mehdi",
        birthDate: "15/08/1984",
        gender: "M",
        idNumber: "BK326584",
        coverage: "CNSS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Mohtadi",
        firstName: "Amina",
        birthDate: "29/10/1994",
        gender: "F",
        idNumber: "BK125863",
        coverage: "CNSS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Lakhdar",
        firstName: "Karim",
        birthDate: "16/05/2000",
        gender: "M",
        idNumber: "BK224108",
        coverage: "CNSS",
        lastUpdate: "05/12/2023 12:45",
      },
      {
        dateOpened: "05/12/2023",
        lastName: "Sbai",
        firstName: "Yassine",
        birthDate: "10/12/1979",
        gender: "M",
        idNumber: "BK235114",
        coverage: "CNOPS",
        lastUpdate: "05/12/2023 12:45",
      },

  ],
};

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {

  },
});

export const selectPatients = (state: { patients: PatientState }) => state.patients.patients;

export default patientSlice.reducer;
