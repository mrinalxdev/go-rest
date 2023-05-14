import Image from "next/image";
import logo from "../../public/imgaes/logo.png";

export default function Home() {
  return (
    <div className=" flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-800">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          width={58}
          height={58}
          className="mx-auto w-auto "
          src={logo}
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
          Sign In to your account
        </h2>
      </div>
    </div>
  );
}
