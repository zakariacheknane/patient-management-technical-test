import React, { useEffect, useState } from "react";
import clockIcon from "../assets/icons/clock.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import bellIcon from "../assets/icons/bell.svg";   
import signalIcon from "../assets/icons/signal.svg"; 
import menuIcon from "../assets/icons/menu.svg"; // Hamburger menu icon
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = currentTime.toLocaleDateString("fr-FR", dateOptions);
  const formattedTime = currentTime.toLocaleTimeString("fr-FR", timeOptions);

  return (
    <header
      className={`relative w-full bg-custom-gradient shadow-md p-4 flex items-center h-20 rounded-[16px] ${
        user ? "justify-between" : "justify-center"
      }`}
    >
      {user && (
        <div className="flex items-center gap-2">
          <img src={menuIcon} alt="Menu Icon" className="w-14 h-14 cursor-pointer" />
        </div>
      )}

      <div className="flex justify-center items-center gap-10">
        <div className="flex items-center gap-2">
          <img src={calendarIcon} alt="Calendar Icon" />
          <span className="text-steel-blue text-[24px] leading-[18.56px] font-inter font-normal">
            {formattedDate}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img src={clockIcon} alt="Clock Icon" />
          <span className="text-steel-blue text-[24px] leading-[18.56px] font-inter font-normal">
            {formattedTime}
          </span>
        </div>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <img src={signalIcon} alt="Signal Icon" className="w-6 h-6" />
          <img src={bellIcon} alt="Bell Icon" className="w-6 h-6" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
