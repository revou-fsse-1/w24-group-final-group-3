import { Menu } from "@headlessui/react";
import IconUserSquare from "../../assets/icon-user-square.svg";
import IconTriangleDown from "../../assets/icon-triangle-down.svg";
import IconProfileRounded from "../../assets/icon-user-rounded.svg";
import IconLogout from "../../assets/icon-logout.svg";

export default function ProfileDropdownNavbar() {
  return (
    <Menu>
      <div className="relative">
        <Menu.Button
          className={
            "flex gap-3 items-center text-white hover:bg-gray-700 px-3 py-2 rounded"
          }
        >
          <div className="w-[30px] h-[30px] overflow-hidden rounded-lg">
            <img
              className="object-cover w-full h-full"
              src={IconUserSquare}
              alt="icon-user-square"
            />
          </div>
          <span className="hidden md:block"> Arya Immanuel</span>
          <img
            className="w-[10px] h-[10px] hidden md:block"
            src={IconTriangleDown}
            alt="icon-chevron-down"
          />
        </Menu.Button>
        <Menu.Items
          className={
            "absolute flex flex-col gap-2 bg-medium-grey border border-light-grey rounded-xl p-2 top-12 right-0 min-w-[195px] shadow-xl"
          }
        >
          <Menu.Item>
            {({ active }) => (
              <button className="flex items-center gap-4 text-white px-3 py-2 active:bg-light-grey w-full rounded-lg text-modal-medium">
                <img
                  src={IconProfileRounded}
                  alt="icon-profile-rounded"
                  className="w-[20px]"
                />
                My Profile
              </button>
            )}
          </Menu.Item>
          <hr className="border-light-grey" />
          <Menu.Item>
            {({ active }) => (
              <button className="flex items-center gap-4 text-red px-3 py-2 active:bg-light-grey w-full rounded-lg text-modal-medium">
                <img
                  src={IconLogout}
                  alt="icon-profile-rounded"
                  className="w-[20px]"
                />
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
}
