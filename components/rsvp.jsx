export default function RSVP() {
  return (
    <div>
      <form name="rsvp" method="POST" netlify>
        <div className="grid grid-cols-1 gap-6 mt-8 max-w-md">
          <label htmlFor="name">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder=""
            />
          </label>
          <div>
            <span>Can you make it?</span>
            <div>
              <label htmlFor="attending" className="inline-flex items-center">
                <input type="radio" name="response" id="attending" value="1" />
                <span className="ml-2 text-gray-700">Attending</span>
              </label>
            </div>
            <div>
              <label
                htmlFor="not-attending"
                className="inline-flex items-center"
              >
                <input
                  type="radio"
                  name="response"
                  id="not-attending"
                  value="0"
                />
                <span className="ml-2 text-gray-700">I can't attend</span>
              </label>
            </div>
          </div>
          <label htmlFor="guests">
            <span className="text-gray-700">Bringing anyone?</span>
            <div className="flex items-center">
              <input
                type="number"
                name="guests"
                id="guests"
                min="0"
                max="10"
                className="w-16"
                inputMode="numeric"
              />
              <span className="ml-2 text-gray-700 font-sans">guests</span>
            </div>
          </label>
          <label htmlFor="comments">
            <span>Anything you would like to tell us?</span>
            <textarea
              name="comments"
              id="comments"
              rows="3"
              className="form-textarea mt-1 block w-full h-24"
            ></textarea>
          </label>
          <div className="mx-auto">
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send response
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}