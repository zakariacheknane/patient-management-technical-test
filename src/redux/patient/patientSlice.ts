import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Patient {
  id: string;
  dateOpened: string;
  lastName: string;
  firstName: string;
  birthDate: string;
  gender: string;
  idNumber: string;
  coverage: string;
  lastUpdate: string;
  region: string;        
  city: string;                
  commune: string;            
  mobile: string;              
  address: string;              
  addressComplement: string; 
}

interface PatientState {
  patients: Patient[];
}
const initialState = {
  patients: [
    {
      id: "1",
      dateOpened: "2023-05-12",
      lastName: "El Amrani",
      firstName: "Sofia",
      birthDate: "1995-03-15",
      gender: "F",
      idNumber: "MA9876543",
      coverage: "CNSS",
      lastUpdate: "2023-05-12 10:30",
      region: "Casablanca-Settat",
      city: "Casablanca",
      commune: "Aïn Sebaâ",
      mobile: "+212612345678",
      address: "456 Rue des Fleurs",
      addressComplement: "Apt 14",
    },
    {
      id: "2",
      dateOpened: "2023-05-12",
      lastName: "Bennani",
      firstName: "Youssef",
      birthDate: "1987-07-22",
      gender: "M",
      idNumber: "MA1234567",
      coverage: "RAMED",
      lastUpdate: "2023-05-12 11:00",
      region: "Marrakech-Safi",
      city: "Marrakech",
      commune: "Gueliz",
      mobile: "+212610987654",
      address: "789 Avenue Mohammed VI",
      addressComplement: "Etage 14",
    },
    {
      id: "3",
      dateOpened: "2023-05-12",
      lastName: "Zidane",
      firstName: "Zinedine",
      birthDate: "1990-06-02",
      gender: "M",
      idNumber: "MA6543210",
      coverage: "CNOPS",
      lastUpdate: "2023-05-12 12:15",
      region: "Rabat-Salé-Kénitra",
      city: "Rabat",
      commune: "Agdal",
      mobile: "+212612345679",
      address: "123 Boulevard Al Massira",
      addressComplement: "Apt 14B",
    },
    {
      id: "4",
      dateOpened: "2023-05-12",
      lastName: "Benali",
      firstName: "Nadia",
      birthDate: "1992-02-20",
      gender: "F",
      idNumber: "MA3216547",
      coverage: "CNSS",
      lastUpdate: "2023-05-12 12:30",
      region: "Tanger-Tétouan-Al Hoceima",
      city: "Tanger",
      commune: "Malabata",
      mobile: "+212631234567",
      address: "10 Rue des Roses",
      addressComplement: "Bâtiment C, Apt 14",
    },
    {
      id: "5",
      dateOpened: "2023-05-12",
      lastName: "El Ouardi",
      firstName: "Hassan",
      birthDate: "1985-09-14",
      gender: "M",
      idNumber: "MA7890123",
      coverage: "CNOPS",
      lastUpdate: "2023-05-12 12:45",
      region: "Fès-Meknès",
      city: "Meknès",
      commune: "Ismala",
      mobile: "+212634567890",
      address: "20 Avenue des Stars",
      addressComplement: "Apt 14",
    },
    {
      id: "6",
      dateOpened: "2023-05-12",
      lastName: "Amari",
      firstName: "Leila",
      birthDate: "1994-11-11",
      gender: "F",
      idNumber: "MA1237890",
      coverage: "CNSS",
      lastUpdate: "2023-05-12 13:00",
      region: "Souss-Massa",
      city: "Agadir",
      commune: "Hay Mohammadi",
      mobile: "+212645678901",
      address: "500 Avenue Hassan II",
      addressComplement: "Apt 14D",
    },
    {
      id: "7",
      dateOpened: "2023-05-12",
      lastName: "Khali",
      firstName: "Rachid",
      birthDate: "1988-08-08",
      gender: "M",
      idNumber: "MA7891234",
      coverage: "CNOPS",
      lastUpdate: "2023-05-12 14:00",
      region: "Beni Mellal-Khénifra",
      city: "Beni Mellal",
      commune: "Khenifra",
      mobile: "+212654321098",
      address: "34 Rue de l'Industrie",
      addressComplement: "Apt 14E",
    },
    {
      id: "8",
      dateOpened: "2023-05-12",
      lastName: "Mouhajir",
      firstName: "Amina",
      birthDate: "1996-10-10",
      gender: "F",
      idNumber: "MA3219876",
      coverage: "CNSS",
      lastUpdate: "2023-05-12 14:15",
      region: "Oriental",
      city: "Oujda",
      commune: "Sidi Yahya",
      mobile: "+212612345678",
      address: "28 Rue de la Paix",
      addressComplement: "Apt 14F",
    },
    {
      id: "9",
      dateOpened: "2023-05-12",
      lastName: "Jabbari",
      firstName: "Omar",
      birthDate: "1980-12-12",
      gender: "M",
      idNumber: "MA6541230",
      coverage: "CNSS",
      lastUpdate: "2023-05-12 15:00",
      region: "Dakhla-Oued Ed-Dahab",
      city: "Dakhla",
      commune: "Al Wahda",
      mobile: "+212612987654",
      address: "42 Boulevard des Martyrs",
      addressComplement: "Apt 14G",
    },
    {
      id: "10",
      dateOpened: "2023-05-12",
      lastName: "Belhaj",
      firstName: "Samira",
      birthDate: "1993-05-05",
      gender: "F",
      idNumber: "MA4567890",
      coverage: "CNOPS",
      lastUpdate: "2023-05-12 15:30",
      region: "Laâyoune-Sakia El Hamra",
      city: "Laâyoune",
      commune: "Al Akhawayn",
      mobile: "+212678123456",
      address: "88 Avenue des Nations",
      addressComplement: "Apt 14H",
    },
    {
      id: "11",
      dateOpened: "2023-05-12",
      lastName: "Naji",
      firstName: "Karim",
      birthDate: "1985-07-21",
      gender: "M",
      idNumber: "MA3216543",
      coverage: "CNSS",
      lastUpdate: "2023-05-12 16:00",
      region: "Tanger-Tétouan-Al Hoceima",
      city: "Tétouan",
      commune: "Mhannech",
      mobile: "+212654987321",
      address: "5 Avenue des Cèdres",
      addressComplement: "Apt 14I",
    },
    {
      id: "12",
      dateOpened: "2023-05-12",
      lastName: "Azzouzi",
      firstName: "Meryem",
      birthDate: "1991-04-04",
      gender: "F",
      idNumber: "MA4561239",
      coverage: "RAMED",
      lastUpdate: "2023-05-12 16:15",
      region: "Fès-Meknès",
      city: "Fès",
      commune: "Bathaa",
      mobile: "+212678432156",
      address: "33 Rue Al Quaraouiyine",
      addressComplement: "Apt 14J",
    },
    {
      id: "13",
      dateOpened: "2023-05-12",
      lastName: "Sadiki",
      firstName: "Walid",
      birthDate: "1997-09-09",
      gender: "M",
      idNumber: "MA7893214",
      coverage: "CNOPS",
      lastUpdate: "2023-05-12 16:30",
      region: "Casablanca-Settat",
      city: "Mohammedia",
      commune: "Sidi Rahal",
      mobile: "+212678543210",
      address: "100 Rue des Orangers",
      addressComplement: "Apt 14K",
    },
    {
      id: "14",
      dateOpened: "2023-05-12",
      lastName: "Bouslimani",
      firstName: "Khadija",
      birthDate: "1999-11-11",
      gender: "F",
      idNumber: "MA4569871",
      coverage: "CNSS",
      lastUpdate: "2023-05-12 16:45",
      region: "Souss-Massa",
      city: "Tiznit",
      commune: "Aglou",
      mobile: "+212678654321",
      address: "77 Boulevard de l'Environnement",
      addressComplement: "Apt 14L",
    },
    {
      id: "15",
      dateOpened: "2023-05-13",
      lastName: "Lahlou",
      firstName: "Amine",
      birthDate: "1989-01-18",
      gender: "M",
      idNumber: "MA9871234",
      coverage: "CNOPS",
      lastUpdate: "2023-05-13 09:00",
      region: "Casablanca-Settat",
      city: "Casablanca",
      commune: "Anfa",
      mobile: "+212612987654",
      address: "101 Boulevard Zerktouni",
      addressComplement: "Apt 15",
    },

    {
      id: "16",
      dateOpened: "2023-05-13",
      lastName: "Faouzi",
      firstName: "Fatima",
      birthDate: "1992-05-22",
      gender: "F",
      idNumber: "MA6549872",
      coverage: "RAMED",
      lastUpdate: "2023-05-13 10:00",
      region: "Oriental",
      city: "Oujda",
      commune: "Sidi Maafa",
      mobile: "+212623456789",
      address: "25 Rue Moulay Ismail",
      addressComplement: "Apt 16B",
    },
  ],
};


const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    addPatient: (state, action: PayloadAction<Patient>) => {
      state.patients.push(action.payload);
    },
  },
});

export const { addPatient } = patientSlice.actions;
export const selectPatients = (state: { patients: PatientState }) =>
  state.patients.patients;
export const selectPatientById = (id: string) => (state: { patients: PatientState }) =>
  state.patients.patients.find(patient => patient.id === id);

export default patientSlice.reducer;
