"use client";
import Image from "next/image";
import NavbarLayout from "./layout/navbar/page";
import BullionForm from "./modules/BullionRate/page";
import LoginForm from "./modules/Login/page";

export default function Home() {
  return (
    <main>
      <div>
        <LoginForm />
        {/* <BullionForm /> */}
      </div>
    </main>
  );
}
