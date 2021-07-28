import Map from "../components/map";
import RSVP from "../components/rsvp";

export default function Invitation() {
  return (
    <main className="px-2 py-5 lg:px-4 lg:py-6 prose sm:prose lg:prose-lg xl:prose-2xl mx-auto border-4 border-white rounded-lg bg-white filter drop-shadow shadow-xl">
      <div className="">
        <div>
          <h1 className="from-pink-400 to-indigo-800 text-center">
            Ashley & Ian&apos;s
            <br />
            Going Away BBQ
          </h1>

          <h2>What is this all about?</h2>
          <p>
            We are moving to <em>Denver!</em>
          </p>
          <p>
            We would like friends and family to join us for a casual
            get-together at our apartment complex.
          </p>
          <p>We will have:</p>
          <ul>
            <li>Burgers</li>
            <li>Brews</li>
            <li>Chips</li>
          </ul>

          <h2>Date & time</h2>
          <p>
            Saturday, August 7, 2021
            <br />
            4:00 - 8:00
          </p>

          <h2>Location & parking</h2>
          <div>
            <p>
              We will be hosting on our complex&apos;s patio at{" "}
              <strong>1415 Cuming Street</strong> on the south side of the
              building. There is metered parking surrounding the building, and
              there is <em>unmetered</em> parking across Cuming Street to the
              north along 14<sup>th</sup> Street.
            </p>
            <p>
              The patio is located on the second floor. There are{" "}
              <strong>stairs</strong> on the south side of the building and we
              can let you up that way. Otherwise if you use code{" "}
              <code>#0505</code> on the callbox we can buzz you in and you can
              take the <strong>elevator</strong>.
            </p>
            <Map />
          </div>

          <h2>RSVP</h2>
          <p>
            <em>Please</em> fill out this short form if you can. This will help
            us determine how many people to expect!
          </p>
          <RSVP />
        </div>
      </div>
    </main>
  );
}
