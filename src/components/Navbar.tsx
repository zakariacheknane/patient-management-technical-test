import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import clockIcon from "../assets/icons/clock.svg";
import calendarIcon from "../assets/icons/calendar.svg";
import bellIcon from "../assets/icons/bell.svg";   
import signalIcon from "../assets/icons/signal.svg"; 
import menuIcon from "../assets/icons/menu.svg"; 
//yryr

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    return date.toLocaleDateString("fr-FR", dateOptions);
  };

  const formatTime = (date: Date) => {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleTimeString("fr-FR", timeOptions);
  };

  return (
    <header
      className={`relative w-full bg-custom-gradient-navbar shadow-custom-navbar p-4 flex items-center h-20 rounded-[16px] ${
        user ? "justify-between" : "justify-center"
      }`}
    >
      {user && (
        <div className="flex items-center gap-2">
          <img
            src={menuIcon}
            alt="Menu Icon"
            className="w-14 h-14 cursor-pointer"
            role="button"
            aria-label="Open menu"
          />
        </div>
      )}

      <div className="flex justify-center items-center gap-10">
        <div className="flex items-center gap-2">
          <img src={calendarIcon} alt="Calendar Icon" aria-hidden="true" />
          <span className="text-steel-blue text-[24px] leading-[18.56px] font-inter font-normal">
            {formatDate(currentTime)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img src={clockIcon} alt="Clock Icon" aria-hidden="true" />
          <span className="text-steel-blue text-[24px] leading-[18.56px] font-inter font-normal">
            {formatTime(currentTime)}
          </span>
        </div>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          <img src={signalIcon} alt="Signal Icon" className="w-6 h-6" aria-hidden="true" />
          <img src={bellIcon} alt="Notification Icon" className="w-6 h-6" aria-hidden="true" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
