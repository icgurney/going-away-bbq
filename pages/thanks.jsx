import Footer from "../components/footer";

export default function Thanks() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl min-h-screen flex flex-col justify-between">
      <main className="px-2 py-5 lg:px-4 lg:py-6 prose sm:prose lg:prose-lg xl:prose-2xl mx-auto border-4 border-white rounded-lg bg-white filter drop-shadow shadow-xl">
        <h1 className="from-pink-400 to-indigo-800 text-center">Thanks!</h1>
        <p>We really appreciate you, and we will miss you!</p>
      </main>
      <Footer />
    </div>
  );
}
