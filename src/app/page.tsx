import { getServerAuthSession } from "@/server/auth";


export default async function Page() {
  const session = await getServerAuthSession();

  if(!session?.user.email) {
    return <div>Not authenticated</div>
  }

  return (
    <div>
      <h1>Secret Page</h1>
      <p>Welcome {session.user.email}</p>
    </div>
  )
}
