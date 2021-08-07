import Footer from "../components/footer";

export default function Sorry() {
  return (
    <div className="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl min-h-screen flex flex-col justify-between">
      <main className="px-2 py-5 lg:px-4 lg:py-6 prose sm:prose lg:prose-lg xl:prose-2xl xl:prose-indigo lg:prose-indigo sm:prose-indigo prose-indigo mx-auto border-4 border-white rounded-lg bg-white filter drop-shadow shadow-xl text-center">
        <h1 className="from-pink-400 to-indigo-800 pb-2">Sorry!</h1>
        <p>We really appreciate it your interest, but the event is over!</p>
        <p>
          You can catch us in Denver hiking or skiing in the mountains. We would
          love to host you and make you a{" "}
          <a href="https://www.instagram.com/misoandmayo/">tasty meal</a>.
        </p>
      </main>
      <Footer />
    </div>
  );
}
