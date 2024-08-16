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
  divider,
} from "@nextui-org/react";
import { auth } from "@/auth";

const Header = async () => {
  const session = await auth();
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"}>Discuss</Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {session?.user ? <div>SignIn</div> : <div>signOut</div>}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
