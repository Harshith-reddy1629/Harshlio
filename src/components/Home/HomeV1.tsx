import Image from "next/image";
import I from "../../../public/main6.png";

export default function HomeV1() {
  return (
    <div
      // className="h-[_calc(100vh_-_76px_)_]"
      className="h-screen"
    >
      <main className="flex h-full gap-12  font-[family-name:var(--font-geist-mono)] ">
        <div
          className=" flex-[_1_1_35%_] content-center pl-12
      bg-[_linear-gradient(_130deg_,_transparent_50%_,_var(--background)_50%_)_,_linear-gradient(_to_right_,_var(--foreground)_35%_,_var(--background)_35%_45%_,_var(--foreground)_45%_55%_,_var(--background)_55%_)_]"
        >
          <div
            className="rounded-full overflow-hidden relative before:content-[''] before:absolute before:inset-0   bg-[_linear-gradient(_130deg_,_var(--background)_50%_,_var(--foreground)_50%_)_]
        before:bg-[_linear-gradient(_344deg_,_transparent_73%_,_var(--background)_88%_)_] before:opacity-95  z-0 after:content-[''] after:absolute 
        after:inset-0 after:bg-[_linear-gradient(_var(--background)_,_var(--background)_80%_)_] after:opacity-30 after:z-10 aspect-square"
          >
            <Image
              src={I}
              width={500}
              height={500}
              alt={""}
              className="w-full object-cover h-full"
            />
          </div>
        </div>
        <div className=" flex-[_1_1_65%_] content-center ">
          <div className="min-h-[300px] mx-auto max-w-[720px]">
            <h1 className="text-5xl mb-2">
              Hi, I&apos;m <span className="font-semibold">Harshith Reddy</span>{" "}
            </h1>
            <h2 className="text-4xl mb-4 text-foreground font-semibold ">
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
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {" "}
      </footer>
    </div>
  );
}
