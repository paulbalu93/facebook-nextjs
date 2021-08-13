import { useSession } from "next-auth/client";
import Image from "next/image";

function InputBox() {
  const [session] = useSession();
  return (
    <div>
      <div>
        <Image
          src={session.user.image}
          className="rounded-full"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1"></form>
      </div>
    </div>
  );
}

export default InputBox;
