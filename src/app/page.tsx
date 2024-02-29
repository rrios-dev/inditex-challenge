'use client';
import ButtonBase from "@/components/button-base/button-base";
export default function Home() {
  return (
    <main>
      <ButtonBase onClick={() => console.log("funciona")}>
        hola
      </ButtonBase>
    </main>
  );
}
