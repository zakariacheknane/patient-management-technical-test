import React, { useEffect, useState } from "react";
import clockIcon from "../assets/icons/clock.svg";
import calendarIcon from "../assets/icons/calendar.svg";

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

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
    <header className="relative w-full bg-custom-gradient shadow-md p-4 flex items-center h-24 justify-center rounded-[16px]">
      <div className="flex items-center gap-2">
        <img src={calendarIcon} alt="Calendar Icon"/>
        <span className="text-[#50799E] text-[24px] leading-[18.56px] font-inter font-normal">
          {formattedDate}
        </span>
      </div>

      <div className="mx-6" />

      <div className="flex items-center gap-2">
        <img src={clockIcon} alt="Clock Icon"  />
        <span className="text-[#50799E] text-[24px] leading-[18.56px] font-inter font-normal">
          {formattedTime}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
