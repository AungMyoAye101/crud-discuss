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
  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = <Avatar src={session.user.image || ""} />;
  } else {
    authContent = (
      <>
        <NavbarItem>
          <Button type="submit" color="primary">
            Sign In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button type="submit" color="secondary" variant="bordered">
            Sign Out
          </Button>
        </NavbarItem>
      </>
    );
  }
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
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
};

export default Header;
