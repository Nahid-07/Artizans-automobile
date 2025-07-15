import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "./loginForm/LoginForm";

export default function LoginPage() {
  return (
    <div className="md:flex md:justify-around md:items-center h-screen bg-gray-100 p-4">
      {/* left side login image */}
      <div className="hidden w-1/2 h-full md:flex justify-center items-center">
        <Image
          src={"/assets/images/login/login.svg"}
          width={460}
          height={502}
          alt="login image"
          className="p-6"
        />
      </div>
      {/* right side Login form */}
      <LoginForm/>
    </div>
  );
}
