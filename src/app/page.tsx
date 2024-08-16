import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";
import { signIn } from "@/actions/signIn";
import { signOut } from "@/actions/signOut";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <form action={signIn}>
        <Button type="submit">SignIn</Button>
      </form>
      <form action={signOut}>
        <Button type="submit">SignOut</Button>
      </form>
      {session?.user ? <div>SignIn</div> : <div>SignOut</div>}
      <Profile />
    </main>
  );
}
