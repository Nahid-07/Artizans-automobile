import Image from "next/image";
import RegisterForm from "./registerForm/RegisterForm";


export default function RegisterPage() {
  return (
    <div className="md:flex md:justify-around md:items-center h-screen bg-gray-100 p-4">
      {/* left side login image */}
      <div className="hidden w-1/2 h-full md:flex justify-center items-center">
        <Image
          src={"/assets/images/login/login.svg"}
          width={460}
          height={502}
          alt="login image"
          objectFit="contain"
          
        />
      </div>
      {/* right side register form */}
      <RegisterForm/>
    </div>
  );
}
