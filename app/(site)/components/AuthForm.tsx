"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      axios
        .post("/api/register", data)

        .catch(() => toast.error("Something went Wrong"))
        .finally(() => setIsLoading(false));
    }
    if (variant === "LOGIN") {
      signIn('credentials', {
        ...data, 
        redirect : false
      })
      .then((callback) =>{
        if(callback?.error){
          toast.error('Invalid Credentials')
        }
        if (callback?.ok && !callback?.error){
          toast.success('Successful Login!')
        }
      })
      .finally(() => setIsLoading(false))

    }
  };

  const socialAction = (actions: string) => {
    setIsLoading(true);

    //NextAuth Social SignIn
    signIn(actions , {redirect : false})
    .then ((callback) => {
      if(callback?.error){
        toast.error('Invalid Ceredentials')
      }
      if(callback?.ok && !callback.error){
        toast.success('Successful Login!')
      }
    })
    .finally(() => setIsLoading(false))
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px]">
      <div className="bg-white px-4 py-6 shadow-lg sm:rounded-lg sm:px-10 ">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email Address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or Continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => toast.error('For now its in development')}
            />
          </div>
        </div>

        <div className="flex gap-2 text-sm mt-6 px-2 justify-center text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to Messanger?"
              : "Already have an account"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
