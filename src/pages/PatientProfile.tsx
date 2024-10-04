import React from "react";
import patientpic from "../assets/images/patient.png";
import frameIcon from "../assets/icons/Frame.svg";
import airpodsIcon from "../assets/icons/airpods.svg";
import rendezIcon from "../assets/icons/rendez.svg";
import coeurIcon from "../assets/icons/coeur.svg";
import subtractIcon from "../assets/icons/Subtract.svg";
import UserIcon from "../assets/icons/user-circle.svg";
import consultationIcon from "../assets/icons/consultation.svg";

const PatientProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-custom-gradient-div p-10 flex flex-col items-center w-full rounded-[16px] mt-4">
      <div className="flex w-full justify-between items-center  bg-custom-gradient-div rounded-[16px] p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-gray-200 rounded-full p-4">
            <div className="w-12 h-12 rounded-full">
              <img src={patientpic} />
            </div>
          </div>
          <div className="space-x-48 flex ">
            <div>
              <h2 className="text-xl font-semibold">Manal Mansar</h2>
              <p className="text-gray-500">Sexe: Homme</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Manal Mansar</h2>
              <p className="text-gray-500">Sexe: Homme</p>
            </div>
          </div>
        </div>

        <div className="space-x-4 flex">
          <button className="bg-dark-royal-blue text-white px-7 py-3 rounded-[36px] h-[52px] flex gap-2">
            <img src={rendezIcon} alt="Signal Icon" className="w-6 h-6" />
            Réserver un rendez-vous
          </button>
          <button className="bg-custom-gradient-2 text-white px-7 py-3 rounded-[36px] h-[52px] flex gap-2">
            <img
              src={consultationIcon}
              alt="consultation"
              className="w-6 h-6"
            />
            Démarrer la consultation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-8 divide-x divide-gray-300 text-gray-500 font-semibold bg-custom-gradient mt-5 w-full h-16">
        <button className="px-4 bg-custom-gradient flex items-center space-x-2">
          <img src={UserIcon} alt="Fiche Icon" className="w-5 h-5" />
          <span>Fiche patient</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
            src={coeurIcon} 
            alt="Antécédents Icon"
            className="w-5 h-5"
          />
          <span>Antécédents</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
           src={airpodsIcon} 
            alt="Constantes Icon"
            className="w-5 h-5"
          />
          <span>Constantes</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
               src={frameIcon} 
            alt="Dépistage Icon"
            className="w-8 h-8"
          />
          <span>Dépistage</span>
        </button>
        <button className="px-4 flex items-center space-x-2">
          <img
            src={subtractIcon} 
            alt="Compte rendu Icon"
            className="w-5 h-5"
          />
          <span>Compte rendu</span>
        </button>
      </div>

      <div className="w-full mt-5 ">
        <h3 className="text-lg font-semibold">Patient</h3>
        <div className="flex justify-end">
          <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-700">
            Modifier
          </button>
        </div>
        <div className="grid grid-cols-5 gap-6 mt-3 ml-9">
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">CINE</p>
            <p className="text-lg">BK653575</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Nom</p>
            <p className="text-lg">Bouyaben Mehdi</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Couverture</p>
            <p className="text-lg">CNOPS</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Région</p>
            <p className="text-lg">Casa-settat</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Ville</p>
            <p className="text-lg">Casablanca</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Commune</p>
            <p className="text-lg">Anfa</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Téléphone mobile</p>
            <p className="text-lg">0637346201</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Adresse</p>
            <p className="text-lg">93 Rue Meskallilie, Casablanca 20250</p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Adresse</p>
            <p className="text-lg">93 Rue Meskallilie, Casablanca 20250</p>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-6 mt-3 ml-9">
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Téléphone mobile</p>
            <p className="text-lg">0637346201</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Adresse</p>
            <p className="text-lg">93 Rue Meskallilie, Casablanca 20250</p>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <p className="text-sm text-steel-blue mb-2 font-medium">Adresse</p>
            <p className="text-lg">93 Rue Meskallilie, Casablanca 20250</p>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
