import React, { useState } from "react";
import recherche from "../assets/icons/recherche.svg";
import search from "../assets/icons/search.svg";
import filter from "../assets/icons/filter.svg";
import nouveauPatient from "../assets/icons/nouveauPatient.svg";
import next from "../assets/icons/next.svg";
import { useSelector } from "react-redux";
import { selectPatients } from "../redux/patient/patientSlice";
import { useNavigate } from "react-router-dom";

const PatientList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const patients = useSelector(selectPatients);
  const patientsPerPage = 6;

  const filteredPatients = patients.filter((patient) => {
    const fullName = `${patient.lastName.toLowerCase()} ${patient.firstName.toLowerCase()}`;
    const cine = patient.idNumber.toLowerCase();
    const query = searchQuery.toLowerCase();

    return fullName.includes(query) || cine.includes(query);
  });

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const handleRowClick = (patientId: string) => {
    navigate(`/patient/${patientId}`);
  };

  const currentPatients = filteredPatients.slice(
    (currentPage - 1) * patientsPerPage,
    currentPage * patientsPerPage
  );

  return (
    <div className="min-h-screen bg-custom-gradient-div shadow-custom-div rounded-[16px] p-10 my-4">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 h-auto md:h-24">
        <div className="w-full md:w-1/3 p-4 rounded-lg text-white flex items-center gap-2">
          <img src={recherche} alt="recherche" />
          <h1 className="text-steel-blue font-bold font-Ubuntu text-[24px]">
            Recherche de patients
          </h1>
        </div>

        <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center gap-4 justify-start">
          <div className="mb-1 relative w-2/3">
            <input
              type="text"
              placeholder="Recherche par (Nom, Prénom, CINE...)"
              className="w-full p-2 border-2 border-steel-blue rounded-[30px] h-[50px] pr-10"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <img src={search} alt="search-icon" />
            </span>
          </div>

          <button className="border-2 border-steel-blue rounded-[30px] text-cyan h-[50px] px-4 py-2 flex items-center">
            <img src={filter} alt="filter" />
            &nbsp; &nbsp;Filtre
          </button>
        </div>

        <div className="w-[full] md:w-auto p-4 rounded-lg text-white">
          <button className="bg-cyan text-white px-4 py-2 rounded-[20px] flex items-center" onClick={() => navigate("/addpatient")}>
            <img src={nouveauPatient} alt="nouveau-patient" />
            <span>&nbsp; Nouveau dossier</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-steel-blue rounded-[10px] p-8 mt-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="w-full text-cyan items-center text-center">
              <th className="p-3">Date d'ouverture</th>
              <th className="p-3">Nom</th>
              <th className="p-3">Prénom</th>
              <th className="p-3">Date de naissance</th>
              <th className="p-3">Sexe</th>
              <th className="p-3">N°CINE</th>
              <th className="p-3">Couverture</th>
              <th className="p-3">Dernière mise à jour</th>
            </tr>
          </thead>
          <tbody>
            {currentPatients.length > 0 ? (
              currentPatients.map((patient, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(patient.id)}
                  className={`cursor-pointer border-t font-Ubuntu font-bold text-[16px] text-steel-blue text-center ${
                    index % 2 === 0 ? "bg-[#50799E1C]" : "bg-transparent"
                  }`}
                >
                  <td className="p-3">{patient.dateOpened}</td>
                  <td className="p-3">{patient.lastName}</td>
                  <td className="p-3">{patient.firstName}</td>
                  <td className="p-3">{patient.birthDate}</td>
                  <td className="p-3">{patient.gender}</td>
                  <td className="p-3">{patient.idNumber}</td>
                  <td className="p-3">{patient.coverage}</td>
                  <td className="p-3">{patient.lastUpdate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="p-3 text-center text-red-500">
                  Aucun patient trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="w-full bg-white flex justify-end mt-4">
        <div className="flex items-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageClick(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-cyan text-white"
                  : "text-steel-blue"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className={`p-2 w-12 ${
            currentPage === totalPages ? "opacity-50" : ""
          }`}
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={next} alt="next" />
        </button>
      </div>
    </div>
  );
};

export default PatientList;
