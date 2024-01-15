import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F5E7DA] flex-col items-center justify-between p-24">
      <div className="bg-white w-[340px] h-[30rem] flex flex-col rounded-xl ">
        <Image
          className="rounded-t-xl"
          src={"/table.png"}
          alt="programmer"
          width={340}
          height={210}
        />
        <div className="px-6 py-5 gap-3 flex flex-col">
          <span className="bg-orange-400 rounded-md w-32 text-center">
            TECHNOLOGY
          </span>
          <h1 className="font-bold">
            How I Built Web Development Challenges Website
          </h1>
          <span className="text-gray-800">
            If youre looking for inspiration to build your own side project...
          </span>
          <div className="flex flex-row gap-3 pt-3">
            <Image
              src={"/avatar.png"}
              alt="programmer"
              width={50}
              height={40}
            />
            <div className="flex flex-col">
              <h2 className="font-semibold">John Doe</h2>
              <span>Jan 1, 2021</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
