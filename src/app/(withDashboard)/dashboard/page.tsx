import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  //* auth signIn er por user info cookies e 'next-auth-session-token' e store thake. ekhon ai store kora user info get korbo

  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Looged-in user email: {session?.user?.email}
          </h1>
          <Image
            src={
              session?.user?.image ||
              "https://i.ibb.co.com/4jnBKKw/pngwing-com-45.png"
            }
            alt="user image"
            width={150}
            height={150}
            className="mx-auto rounded-full mt-10"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
