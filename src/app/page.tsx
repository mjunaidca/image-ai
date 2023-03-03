import InputForm from "@/src/components/InputForm";

export default function Home() {
  return (
    <main>
      <div className="flex max-w-screen-2xl  w-full mx-auto flex-col items-center justify-center py-2 min-h-fit  ">
        <main className="flex flex-1 w-screen flex-col items-center justify-center text-center px-4 mt-6 sm:mt-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-9">
              Generate your next Super Image in seconds
            </h1>
            <InputForm />
          </div>
        </main>
      </div>
    </main>
  );
}
