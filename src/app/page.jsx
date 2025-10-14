import Header from "./Nav/Header/Header";
import HomePage from "./Page/HomePage/HomePage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen overflow-hidden bg-gray-50">
      <div className=" w-full container mx-auto flex flex-col items-center justify-center p-4">
        <Header  />
        <HomePage />
      </div>
    </main>
  );
}
