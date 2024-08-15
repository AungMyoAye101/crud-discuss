import { Button } from "@nextui-org/react";
import * as actions from "@/actions";

export default async function Home() {
  return (
    <main>
      <form action={actions.signIn}>
        <Button type="submit">Click</Button>
      </form>
    </main>
  );
}
