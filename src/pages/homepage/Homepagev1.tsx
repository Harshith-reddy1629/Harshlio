import Image from "next/image";
import I from "../../../public/main6.png";

export default function HomeV1() {
  return (
    <div className="h-screen">
      <main className="flex h-full gap-12 font-[family-name:var(--font-geist-mono)]">
        <div className="flex-[_1_1_35%_] content-center bg-[_linear-gradient(_130deg_,_transparent_50%_,_var(--background)_50%_)_,_linear-gradient(_to_right_,_var(--foreground)_35%_,_var(--background)_35%_45%_,_var(--foreground)_45%_55%_,_var(--background)_55%_)_] pl-12">
          <div className="relative z-0 aspect-square overflow-hidden rounded-full bg-[_linear-gradient(_130deg_,_var(--background)_50%_,_var(--foreground)_50%_)_] before:absolute before:inset-0 before:bg-[_linear-gradient(_344deg_,_transparent_73%_,_var(--background)_88%_)_] before:opacity-95 before:content-[''] after:absolute after:inset-0 after:z-10 after:bg-[_linear-gradient(_var(--background)_,_var(--background)_80%_)_] after:opacity-30 after:content-['']">
            <Image
              src={I}
              width={500}
              height={500}
              alt={""}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex-[_1_1_65%_] content-center">
          <div className="mx-auto min-h-[300px] max-w-[720px]">
            <h1 className="mb-2 text-5xl">
              Hi, I&apos;m{" "}
              <span className="font-semibold">Harshith Reddy</span>{" "}
            </h1>
            <h2 className="text-foreground mb-4 text-4xl font-semibold">
              Frontend Developer
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled{" "}
            </p>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        {" "}
      </footer>
    </div>
  );
}
