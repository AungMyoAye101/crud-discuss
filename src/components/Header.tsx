import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { auth } from "@/auth";
import { signIn } from "@/actions/signIn";
import { signOut } from "@/actions/signOut";
import HeaderAuth from "./Header-auth";

const Header = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href={"/"} className="font-bold font-3xl">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Type to search..." size="sm" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
