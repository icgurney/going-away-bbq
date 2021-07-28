import Map from "../components/map";
import RSVP from "../components/rsvp";

export default function Invitation() {
  return (
    <main className="px-2 py-5 lg:px-4 lg:py-6 prose sm:prose lg:prose-lg xl:prose-2xl mx-auto border-4 border-white rounded-lg bg-white filter drop-shadow shadow-xl">
      <div className="">
        <div>
          <h1 className="from-yellow-600 to-red-600 text-center pb-2">
            Ashley & Ian&apos;s
            <br />
            Going Away BBQ
          </h1>

          <h2>We are moving to Denver! 🏔</h2>
          <p>
            We are excited to start a new journey together as we explore the
            Rockies and all Denver has to offer.
          </p>
          <p>
            <em>But before we go...</em>
          </p>
          <p>
            We would like friends and family to join us for a casual
            get-together at our place.
          </p>
          <p>We will have:</p>
          <ul>
            <li>Burgers 🍔 & weiners 🌭</li>
            <li>Some beers 🍻</li>
            <li>Maybe even a watermelon 🍉</li>
          </ul>
          <p>
            And I&apos;m sure some other surprises! But really, bring anything
            you would like to go with burgers or to drink.
          </p>

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
              take the <strong>elevator</strong> to the{" "}
              <strong>
                2<sup>nd</sup> floor
              </strong>{" "}
              and the patio door is directly your righthand side.
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
