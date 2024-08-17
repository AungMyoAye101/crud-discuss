"use client";

import React from "react";
import Link from "next/link";

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
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar
            src={session.data.user.image || ""}
            className="cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-2">
            <form action={signOut}>
              <Button type="submit" color="secondary" variant="bordered">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
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
  return authContent;
};

export default HeaderAuth;
