import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { BaseComponent } from "../../../types/BaseComponent";
import Button from "../Button";

export interface MenuDropDownItem {
  active?: boolean;
  disabled?: boolean;
  label: string;
  value?: string;
  onClick?();
}

export interface MenuDropdownButton {
  active?: boolean;
  label: string;
}

interface MenuDropdownProps extends Omit<BaseComponent, "children"> {
  items: MenuDropDownItem[];
  button: MenuDropdownButton;
}

export default function MenuDropdown({
  button,
  items,
  style,
}: MenuDropdownProps) {
  return (
    <div className={`inline-block text-right ${style}`}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-50 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {button.label}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {items.map((item) => (
                <Menu.Item disabled={item.disabled}>
                  {({ active }) => (
                    <Button
                      style={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      onClick={item.onClick}
                    >
                      {item.label}
                    </Button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
