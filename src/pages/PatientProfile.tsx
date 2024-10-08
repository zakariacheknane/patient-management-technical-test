import React from "react";
import patientpic from "../assets/images/patient.png";
import frameIcon from "../assets/icons/Frame.svg";
import airpodsIcon from "../assets/icons/airpods.svg";
import rendezIcon from "../assets/icons/rendez.svg";
import coeurIcon from "../assets/icons/coeur.svg";
import subtractIcon from "../assets/icons/Subtract.svg";
import UserIcon from "../assets/icons/user-circle.svg";
import updatetIcon from "../assets/icons/update.svg";
import editIcon from "../assets/icons/edit.svg";
import consultationIcon from "../assets/icons/consultation.svg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPatientById } from "../redux/patient/patientSlice";

const calculateAge = (birthDateString: string): number => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const PatientProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const patient = useSelector(selectPatientById(id || ""));
  if (!id) {
    return <div>ID du patient non trouvé</div>;
  }

  if (!patient) {
    return <div>Patient non trouvé</div>;
  }
  return (
    <div className="min-h-screen bg-custom-gradient-div shadow-custom-div p-10 flex flex-col items-center w-full rounded-[16px] mt-4">
      <div className="flex w-full justify-between items-center  bg-custom-gradient-div rounded-[16px] p-4 border-[3px] border-[#E1F4F6] shadow-custom-second h-36">
        <div className="flex items-center space-x-4 ">
          <div className="bg-gray-200 rounded-full p-4">
            <div className="relative inline-block">
              <div className="flex items-center justify-center rounded-full">
                <img src={patientpic} />
              </div>
              <button className="absolute right-[-20px] bottom-14  p-2  ">
                <img src={editIcon} />
              </button>
            </div>
          </div>
          <div className="space-x-40 flex ">
            <div>
              <h2 className="text-xl font-bold text-dark-royal-blue">
                {patient.firstName} {patient.lastName}
              </h2>
              <p className="text-dark-royal-blue font-bold">
                Sexe{" "}
                <span className="text-cyan font-bold">
                  {" "}
                  {patient.gender === "M" ? "Homme" : "Femme"}
                </span>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-dark-royal-blue">
                Date de naissance{" "}
                <span className="text-cyan text-[18px] font-bold">
                  {" "}
                  {new Date(patient.birthDate).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </h2>
              <p className="text-dark-royal-blue font-bold ">
                Age
                <span className="text-cyan font-bold">
                  {" "}
                  {calculateAge(patient.birthDate)}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-x-4 flex">
          <button className="bg-dark-royal-blue shadow-custom-rendez text-white px-7 py-3  rounded-[36px] h-[52px] flex gap-2">
            <img src={rendezIcon} alt="Signal Icon" className="w-6 h-6" />
            Réserver un rendez-vous
          </button>
          <button className="bg-custom-gradient-2 shadow-custom text-white px-7 py-3 rounded-[36px] h-[52px] flex gap-2">
            <img
              src={consultationIcon}
              alt="consultation"
              className="w-6 h-6"
            />
            Démarrer la consultation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5  divide-x-2 divide-light-grey text-gray-500 shadow-custom-navbar font-semibold bg-white mt-5 w-full h-16">
        <div className="bg-[#EEFAFD] flex justify-center items-center h-full ">
          <div className="flex items-center space-x-2 h-full">
            <img src={UserIcon} alt="Fiche Icon" className="w-5 h-5" />
            <span className="text-cyan">Fiche patient</span>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="flex items-center space-x-2 h-full text-custom-gray">
            <img src={coeurIcon} alt="Antécédents Icon" className="w-5 h-5" />
            <span>Antécédents</span>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="flex items-center space-x-2 h-full text-custom-gray">
            <img src={airpodsIcon} alt="Constantes Icon" className="w-5 h-5" />
            <span>Constantes</span>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="flex items-center space-x-2 h-full text-custom-gray">
            <img src={frameIcon} alt="Dépistage Icon" className="w-8 h-8" />
            <span>Dépistage</span>
          </div>
        </div>

        <div className="flex justify-center items-center h-full">
          <div className="flex items-center space-x-2 h-full text-custom-gray">
            <img
              src={subtractIcon}
              alt="Compte rendu Icon"
              className="w-5 h-5"
            />
            <span>Compte rendu</span>
          </div>
        </div>
      </div>

      <div className="w-full mt-4 ">
        <div className="flex w-full p-8">
          <div className="items-center">
            <h3 className=" font-bold text-cyan text-[24px] font-ubuntu">
              Patient
            </h3>
          </div>
          <div className="flex justify-end  w-full">
            <button className="bg-[#5E5E5E] px-4 py-2 rounded-[36px]  text-white font-ubuntu flex items-center ">
              <img src={updatetIcon} alt="update" className="w-6 h-6" />{" "}
              Modifier
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-6 mt-3 ml-9 pb-6 border-b border-[#DADADA]">
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">CINE</p>
            <p className="text-lg">{patient.idNumber}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Nom</p>
            <p className="text-lg">{patient.lastName}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Prénom</p>
            <p className="text-lg">{patient.firstName}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Sexe</p>
            <p className="text-lg">{patient.gender}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">
              Date de naissance
            </p>
            <p className="text-lg">
              {" "}
              {new Date(patient.birthDate).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          </div>
          <div className="grid grid-cols-5 gap-6 mt-3 ml-9 border-b border-[#DADADA] pb-6">
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">
              Couverture
            </p>
            <p className="text-lg">{patient.coverage}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Région</p>
            <p className="text-lg">{patient.region}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Ville</p>
            <p className="text-lg">{patient.city}</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Commune</p>
            <p className="text-lg">{patient.commune}</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mt-3 ml-9">
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">
              Téléphone mobile
            </p>
            <p className="text-lg">{patient.mobile}</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Adresse</p>
            <p className="text-lg">{patient.address}</p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">
              Complément d’adresse
            </p>
            <p className="text-lg">{patient.addressComplement}</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
