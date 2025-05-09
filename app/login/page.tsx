import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "../_components/ui/button";


const LoginPage = async () => {

  const {userId} = await auth()

  if(userId) {
    redirect("/")
  }
  return (
      <div className="grid h-full grid-cols-2">

        {/* Esquerda */}
       <div className="flex h-full max-w-[550px] mx-auto flex-col justify-center p-8">
        <Image src="/logo.svg" width={173} height={39} alt="Logo" className="mb-8" />
          <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
          <p className="mb-8 text-muted-foreground">
            A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.
          </p>
          <SignInButton>
            <Button variant="outline">
            <LogInIcon className="mr-2"/>
            Fazer Login ou criar conta
          </Button>
          </SignInButton>
          
       </div>

      {/* Direita */}
       <div className="relative h-full w-full">
          <Image src="/imagelogin.png" fill alt="Faça Login" className="object-cover" />
       </div>
      </div>
      
    
  );
};

export default LoginPage;
