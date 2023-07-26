import AddIcon from "../../assets/add-icon.svg";
import SearchIcon from "../../assets/search-icon.svg";
import Channel from "./Channel";

import IconUserSquare from "../../assets/icon-user-square.svg";
import IconChevronDown from "../../assets/icon-chevron-down.svg";
import IconCross from "../../assets/icon-cross.svg";

import ProfileModal from "./ProfileModal";
import { useState } from "react";
import NewChannelButton from "./NewChannelButton";

export default function ChannelList() {
  const [profileModalIsOpen, setProfileModalIsOpen] = useState(false);

  return (
    <>
      <div className="h-screen w-[325px] md:min-w-[350px] fixed md:static left-0 top-0 bg-very-dark-grey flex flex-col z-50 shadow-xl md:shadow-none">
        {/* CLOSE BUTTON */}
        <button className="flex justify-center items-center w-[40px] h-[40px] bg-very-dark-grey shadow-xl rounded-xl top-2 -right-11 md:hidden absolute">
          <img className="w-[15px] h-[15px]" src={IconCross} alt="icon-cross" />
        </button>
        {/* CHANNELS AND NEW CHANNEL BUTTON */}
        <div className="h-[60px] bg-very-dark-grey px-4 py-2 flex justify-between items-center shadow-xl">
          <h2 className="text-white text-body-bold">Channels</h2>
          <NewChannelButton />
        </div>

        <div className="px-4 py-4">
          {/* SEARCH BAR */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search"
              className="h-[48px] w-full rounded-lg px-4 pl-10 bg-light-grey placeholder:text-input-medium outline-none text-input-medium text-white"
            />
            <img
              className="absolute w-[17px] top-[15px] left-[10px]"
              src={SearchIcon}
              alt="search-icon"
            />
          </div>
          {/* CHANNELS LIST */}
          <div className="flex flex-col gap-4">
            <Channel name="front-end developers" />
            <Channel name="random" />
            <Channel name="back-end" />
            <Channel name="cats and dogs" />
            <Channel name="welcome" />
          </div>
        </div>

        {/* PROFILE */}
        <div className="relative bg-black h-[75px] w-full flex items-center gap-6 p-6 mt-auto">
          <img
            src={IconUserSquare}
            alt="user-square"
            className="w-[42px] h-[42px]"
          />
          <span className="text-body-bold text-text-light-grey">
            Xanthe Neal
          </span>
          <button
            onClick={() => setProfileModalIsOpen((current) => !current)}
            className="flex justify-center items-center w-[24px] h-[24px] rounded-md ml-auto active:bg-light-grey transition-colors"
          >
            <img
              src={IconChevronDown}
              alt="icon-chevron-down"
              className={`w-[12px] ${
                !profileModalIsOpen && "rotate-180"
              } transition-all`}
            />
          </button>
          {profileModalIsOpen && <ProfileModal />}
        </div>
      </div>
    </>
  );
}