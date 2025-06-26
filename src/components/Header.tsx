import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./DarkModeToggle";
import { shadow } from "@/styles/utils";
import LogOutButton from "./LogOutButton";

async function Header() {
  const user = 1;

  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      {/* <SidebarTrigger className="absolute top-1 left-1" /> */}

      <Link className="flex items-end gap-2" href="/">
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
          priority
        />

        <h1 className="flex flex-col py-20 text-2xl font-semibold leading-6">
          AI Notes App
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
