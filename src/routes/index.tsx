
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-lg flex flex-col justify-center items-center">
          <img class="max-w-sm rounded-full shadow-2xl" src="/driver.jpg" />
          <h1 class="text-5xl font-bold">Where are we going?</h1>
          <form action="https://duckduckgo.com/" method="get" target="_blank" class="py-6 grid grid-cols-6 gap-4">
            <label class="col-span-5 input input-bordered flex items-center gap-2">
              <input autofocus name="q" type="text" class="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="h-4 w-4 opacity-70">
                <path
                  fill-rule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clip-rule="evenodd" />
              </svg>
            </label>
            <button class="btn btn-primary" type="submit">Go!</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "The fastest search!",
  meta: [
    {
      name: "TucTucGo",
      content: "Were are we going?",
    },
  ],
};
