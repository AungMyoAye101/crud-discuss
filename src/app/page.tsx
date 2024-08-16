import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <form action={actions.signIn}>
        <Button type="submit">SignIn</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">SignOut</Button>
      </form>
      {session?.user ? <div>SignIn</div> : <div>SignOut</div>}
    </main>
  );
}
