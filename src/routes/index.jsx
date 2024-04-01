import { createAsync, cache, useSearchParams } from '@solidjs/router';
import { Show, createComputed, createSignal } from 'solid-js';
import CountryCard from '~/components/CountryCard';
import SearchFilter from '~/components/SearchFilter';
import { API_BASE_URL, REGION_KEY, SEARCH_KEY } from '~/const';

const getCountries = cache(async () => {
  const endpoint = `${API_BASE_URL}/all`;
  const response = await fetch(endpoint).then((res) => res.json());
  const allCountries = response.slice(0).sort((a, b) => a.name.common.localeCompare(b.name.common));
  return allCountries;
}, 'countries');

export const route = {
  load: () => getCountries()
};

function Home() {
  const [searchParams] = useSearchParams();
  const [count, setCount] = createSignal(0);
  const [page, setPage] = createSignal(12);
  const [showMore, setShowMore] = createSignal(false);
  const [countries, setCountries] = createSignal([]);
  const allCountries = createAsync(() => getCountries());
  const onLoadMore = () => {
    setPage(page() * 2);
  };

  createComputed(() => {
    const all = allCountries();
    const regionQuery = searchParams[REGION_KEY];
    const searchQuery = searchParams[SEARCH_KEY];

    const filterByRegion = (country) => {
      return regionQuery ? country.region === regionQuery : country;
    };
    const filterBySearch = (country) => {
      return searchQuery
        ? country.name.common.toLowerCase().startsWith(searchQuery.toLowerCase())
        : country;
    };

    const filteredCountries = all?.filter(filterByRegion).filter(filterBySearch);
    const displayCountries = filteredCountries?.slice(0, page());
    const countryCount = filteredCountries?.length ?? 0;

    setCount(countryCount);
    setCountries(displayCountries);
    setShowMore(countryCount > displayCountries?.length);
  });

  return (
    <div>
      <SearchFilter />
      <Show when={countries()}>
        <div class="grid grid-cols-fluid justify-items-center gap-10 mb-8">
          <For each={countries()}>{(country) => <CountryCard country={country} />}</For>
        </div>
      </Show>
      <Show when={count() === 0}>
        <p>No matching countries found.</p>
      </Show>
      <Show when={showMore()}>
        <button
          class="py-2.5 px-8 mb-4 text-base font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
          onClick={onLoadMore}
        >
          Load more
        </button>
      </Show>
    </div>
  );
}

export default Home;
