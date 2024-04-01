import { useSearchParams } from '@solidjs/router';
import { For, Show, createComputed, createSignal } from 'solid-js';
import { REGIONS, REGION_KEY, SEARCH_KEY } from '~/const';

function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const regionQuery = searchParams[REGION_KEY];
  const [expanded, setExpanded] = createSignal(false);
  const [region, setRegion] = createSignal(regionQuery);
  let dropdown;

  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    const search = formData.get(SEARCH_KEY);
    event.preventDefault();

    setSearchParams({
      [SEARCH_KEY]: search
    });
  };
  const handleClickOutside = (event) => {
    if (dropdown && !dropdown.contains(event.target)) {
      toggleDropdown();
    }
  };
  const handleResetSearch = () => {
    setSearchParams({
      [SEARCH_KEY]: undefined
    });
  };
  const toggleDropdown = () => {
    setExpanded((ex) => !ex);
    if (expanded()) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  };
  const onResetRegion = () => {
    toggleDropdown();
    setSearchParams({ [REGION_KEY]: undefined });
    setRegion(undefined);
  };
  const onSelect = (event) => {
    const newRegion = event.target.textContent;

    toggleDropdown();
    setSearchParams({ [REGION_KEY]: newRegion });
  };

  createComputed(() => {
    if (searchParams[REGION_KEY]) {
      setRegion(searchParams[REGION_KEY]);
    }
  });

  return (
    <div class="flex flex-col md:flex-row justify-between mb-8">
      <form class="w-full md:max-w-72 mb-5 md:mb-0" onSubmit={handleSubmit}>
        <label
          for="search-filter"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            id="search-filter"
            class="peer block w-full py-3 ps-12 pe-8 text-sm text-gray-900 shadow rounded bg-white dark:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-blue-200 dark:placeholder-gray-400 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="search"
            placeholder="Search for a country..."
            type="search"
            required
          />
          <button
            class="absolute inset-y-0 end-4 peer-invalid:hidden"
            title="Clear search"
            type="reset"
            onClick={handleResetSearch}
          >
            <svg
              class="w-4 h-4 text-gray-300 hover:text-gray-400 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
              />
            </svg>
          </button>
        </div>
        <Show when={region()}>
          <input type="hidden" name="region" value={region()} />
        </Show>
      </form>
      <div ref={dropdown} class="relative min-w-52">
        <button
          id="dropdown-trigger"
          class="inline-flex justify-between items-center w-full px-5 py-3 bg-white hover:bg-neutral-100 shadow focus:ring-2 focus:outline-none focus:ring-blue-200 rounded text-sm text-center dark:text-gray-300 dark:bg-gray-700"
          type="button"
          onClick={toggleDropdown}
        >
          <Show when={region()} fallback={<span>Filter By Region</span>}>
            <span>Filter By: {region()}</span>
          </Show>
          <svg
            class="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownHover"
          class={`${
            expanded() ? 'absolute' : 'hidden'
          } top-12 z-10 w-full bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700`}
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-300"
            aria-labelledby="dropdown-trigger"
          >
            <Show when={region()}>
              <button
                type="button"
                class="text-red-600 font-bold w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onResetRegion}
              >
                Clear selected region
              </button>
            </Show>
            <For each={REGIONS}>
              {(region) => (
                <li>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={onSelect}
                  >
                    {region}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
