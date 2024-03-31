import { createAsync, cache } from '@solidjs/router';
import { Show, createComputed, createSignal } from 'solid-js';
import CountryCard from '~/components/CountryCard';
import { API_BASE_URL } from '~/const';

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
  const [count, setCount] = createSignal(0);
  const [page, setPage] = createSignal(12);
  const [countries, setCountries] = createSignal([]);
  const allCountries = createAsync(() => getCountries());
  const showMore = true;
  const onLoadMore = () => {
    setPage(page() * 2);
  };

  createComputed(() => {
    const all = allCountries();

    setCount(all?.length);
    setCountries(all?.slice(0, page()));
  });

  return (
    <div>
      <Show when={countries()}>
        <div class="grid grid-cols-fluid justify-items-center gap-10 mb-8">
          <For each={countries()}>{(country) => <CountryCard country={country} />}</For>
        </div>
      </Show>
      <Show when={count() === 0}>
        <p>No matching countries found.</p>
      </Show>
      <Show when={showMore}>
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
