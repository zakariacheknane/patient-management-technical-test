import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "../redux/patient/patientSlice";
import folderIcon from "../assets/icons/folderIcon.svg";
import selectIcon from '../assets/icons/selectIcon.svg';
import { useNavigate } from "react-router-dom";

interface FormData {
  idNumber: string;
  lastName: string;
  firstName: string;
  gender: string;
  birthDate: string;
  coverage: string;
  region: string;
  city: string;
  commune: string;
  mobile: string;
  address: string;
  addressComplement: string;
}

const calculateAge = (birthDateString: string): number => {
  const [day, month, year] = birthDateString.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
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

const AddFolder: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [age, setAge] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    idNumber: "",
    lastName: "",
    firstName: "",
    gender: "M",
    birthDate: "",
    coverage: "CNOPS",
    region: "",
    city: "",
    commune: "",
    mobile: "",
    address: "",
    addressComplement: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleBlur = () => {
    const { birthDate } = formData;
    if (birthDate.length === 10 && /^\d{2}\/\d{2}\/\d{4}$/.test(birthDate)) {
      setAge(calculateAge(birthDate));
    } else {
      setAge(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addPatient({ ...formData, id: Date.now().toString(), dateOpened: new Date().toLocaleDateString(), lastUpdate: new Date().toLocaleString() }));
    setFormData({ idNumber: "", lastName: "", firstName: "", gender: "Homme", birthDate: "", coverage: "CNOPS", region: "", city: "", commune: "", mobile: "", address: "", addressComplement: "" });
    navigate("/patients");
  };
  return (
    <div className="p-10 my-4 bg-custom-gradient-div shadow-custom-div w-full rounded-[16px] min-h-screen ">
      <div className="flex flex-row justify-between items-center h-24">
        <div className="flex justify-center items-center gap-4 h-24">
          <div className="w-full p-4 rounded-lg text-white flex items-center gap-2">
            <img src={folderIcon} alt="folder" />
            <h1 className="text-steel-blue font-bold font-ubuntu text-[24px]">
              Nouveau dossier
            </h1>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto rounded-[10px] p-6">
        <form className="grid grid-cols-4 gap-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-steel-blue mb-2 font-medium">CINE <span className="text-cyan">*</span></label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter CINE"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Nom <span className="text-cyan">*</span></label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Nom"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Prénom <span className="text-cyan">*</span></label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2"
              placeholder="Enter Prénom"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-steel-blue mb-2 font-medium">Sexe <span className="text-cyan">*</span></label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray rounded-md w-full p-2 appearance-none focus:outline-none"
              required
            >
              <option value="M">Homme</option>
              <option value="F">Femme</option>
            </select>
            <div className="absolute top-2/3 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle">
              <img src={selectIcon} alt="select" />
            </div>
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Date de naissance <span className="text-light-tail">*</span></label>
            <div className="flex">
              <input
                type="text"
                name="birthDate"
                placeholder="DD/MM/YYYY"
                value={formData.birthDate}
                onChange={handleChange}
                onBlur={handleBlur}
                className="border-[1.4px] border-gray rounded-md w-full p-2"
                required
              />
              <button className="bg-steel-blue rounded-md text-white p-2 mx-2 w-1/2">
                {age !== null ? `${age} ans` : "0 ans"}
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="block text-steel-blue mb-2 font-medium">Couverture <span className="text-cyan">*</span></label>
            <select
              name="coverage"
              value={formData.coverage}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2 appearance-none focus:outline-none"
              required
            >
              <option value="CNOPS">CNOPS</option>
              <option value="CNSS">CNSS</option>
            </select>
            <div className="absolute top-2/3 right-4 w-[11.11px] h-[19.28px]  transform  clip-path-triangle ">
              <img src={selectIcon} alt="select" />
            </div>
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Région <span className="text-cyan">*</span></label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Région"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Ville <span className="text-cyan">*</span></label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Ville"
              required
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Commune <span className="text-cyan">*</span></label>
            <input
              type="text"
              name="commune"
              value={formData.commune}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Commune"
            />
          </div>

          <div>
            <label className="block text-steel-blue mb-2 font-medium">Téléphone mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Téléphone mobile"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-steel-blue mb-2 font-medium">Adresse</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Adresse"
            />
          </div>

          <div className="col-span-4 ">
            <label className="block text-steel-blue mb-2 font-medium">Complément d'adresse <span className="text-cyan">*</span></label>
            <input
              type="text"
              name="addressComplement"
              value={formData.addressComplement}
              onChange={handleChange}
              className="border-[1.4px] border-gray rounded-md w-full p-2"
              placeholder="Enter Complément d'adresse"
            />
          </div>
          <div className="col-span-4 mt-20">
            <div className=" flex justify-between ">
              <button className="bg-[#E5E5E5] text-gray w-1/6 px-4 py-2 rounded-md" onClick={() => navigate("/patients")}>
                Annuler
              </button>
              <button type="submit" className="bg-cyan text-white px-4 py-2 w-1/6 rounded-md" >
                Terminer
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default AddFolder;
