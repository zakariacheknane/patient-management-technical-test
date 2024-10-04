import React from "react";
import dossier from "../assets/icons/dossier.svg";

const AddFolder: React.FC = () => {
  return (
    <div className="p-10 my-4 bg-custom-gradient-div custom-div w-full rounded-[16px] min-h-screen ">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center  h-auto md:h-24">
        <div className="flex justify-center items-center gap-4 h-24">
          <div className="w-full  p-4 rounded-lg text-white flex items-center gap-2">
            <img src={dossier} alt="folder" />
            <h1 className="text-steel-blue font-bold font-ubuntu">
              Nouveau dossier
            </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-[10px] p-6">
        <form className="grid grid-cols-4 gap-6">
          <div>
            <label className="block text-steel-blue mb-2 font-medium">CINE*</label>
            <input
              type="text"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter CINE"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Nom*</label>
            <input
              type="text"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Nom"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Prénom*</label>
            <input
              type="text"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Prénom"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Sexe*</label>
            <select className="border border-gray rounded-md w-full p-2" required>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Date de naissance*</label>
            <input
              type="date"
              className="border border-gray rounded-md w-full p-2"
              required
            />
          </div>
          <div className="relative">
            <label className="block text-steel-blue mb-2 font-medium">Couverture*</label>
            <select className="border border-gray rounded-md w-full p-2" required>
              <option value="CNOPS">CNOPS</option>
              <option value="CNSS">CNSS</option>
            </select>
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Région*</label>
            <input
              type="text"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Région"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Ville*</label>
            <input
              type="text"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Ville"
              required
            />
          </div>
          <div>
            <label className="block text-steel-blue mb-2 font-medium">Commune*</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md w-full p-2"
              placeholder="Enter Commune"
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Téléphone mobile</label>
            <input
              type="tel"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Téléphone mobile"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-steel-blue mb-2 font-medium">Adresse</label>
            <input
              type="text"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Adress"
            />
          </div>

          <div className="col-span-4 ">
            <label className="block text-steel-blue mb-2 font-medium">Complément d'adresse*</label>
            <input
              type="text"
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Complément d'adresse"
            />
          </div>
        </form>

        <div className="mt-6 flex justify-between ">
          <button className="bg-[#E5E5E5] text-gray w-1/6 px-4 py-2 rounded-md">
            Annuler
          </button>
          <button className="bg-cyan text-white px-4 py-2 w-1/6  rounded-md">
            Terminer
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFolder;
