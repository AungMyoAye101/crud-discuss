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
import { signIn } from "@/actions/signIn";
import { signOut } from "@/actions/signOut";

const Header = async () => {
  const session = await auth();
  let authContent: React.ReactNode;

  if (session?.user) {
    authContent = <Avatar src={session.user.image || ""} />;
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" color="primary">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={signOut}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign Out
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href={"/"}>Discuss</Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Type to search..." size="sm" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">{authContent}</NavbarContent>
    </Navbar>
  );
};

export default Header;
