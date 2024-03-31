import { A, cache, createAsync, useParams } from '@solidjs/router';
import { createComputed, createSignal } from 'solid-js';
import DescriptionList from '~/components/DescriptionList';
import { API_BASE_URL } from '~/const';

const getCountryDetail = cache(async (id) => {
  if (!id) return;

  const endpoint = `${API_BASE_URL}/alpha/${id}`;
  const response = await fetch(endpoint).then((res) => res.json());
  const country = response?.[0];

  if (country.borders) {
    const borderResponse = await fetch(
      `${API_BASE_URL}/alpha?codes=${country.borders.join()}&fields=name,cca3`
    ).then((res) => res.json());
    country.borderCountries = borderResponse.reduce((acc, cur) => {
      acc[cur.cca3] = cur.name.common;
      return acc;
    }, {});
  }

  return country;
}, 'countryDetail');

export const route = {
  load: () => getCountryDetail()
};

function CountryDetail() {
  const params = useParams();
  const [firstList, setFirstList] = createSignal([]);
  const [secondList, setSecondList] = createSignal([]);
  const [borderKeys, setBorderKeys] = createSignal([]);
  const country = createAsync(() => getCountryDetail(params.id));
  const buttonClasses =
    'py-2 px-6 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-700';

  createComputed(() => {
    const capital = country()?.capital?.[0] ?? 'N/A';
    const region = country()?.region;
    const population = country()?.population?.toLocaleString('en-us');
    const domain = country()?.tld?.join(', ');
    const currencies = Object.values(country()?.currencies ?? {})
      .map((c) => c.name)
      .join(', ');
    const languages = Object.values(country()?.languages ?? {}).join(', ');

    setFirstList([
      { key: 'Capital', value: capital },
      { key: 'Region', value: region },
      {
        key: 'Population',
        value: population
      }
    ]);

    setSecondList([
      { key: 'Top-Level Domain', value: domain },
      {
        key: 'Currencies',
        value: currencies
      },
      {
        key: 'Languages',
        value: languages
      }
    ]);

    if (country()?.borderCountries) {
      setBorderKeys(Object.keys(country().borderCountries));
    }
  });

  return (
    <div>
      <div class="mb-8 flex">
        <A href="/" class={`inline-flex items-center shadow ${buttonClasses}`}>
          <svg
            class="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Back
        </A>
      </div>
      <Show when={country()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-fluid gap-4 items-center">
          <div class="max-w-lg">
            <Show when={country().flags?.svg}>
              <img
                class="max-h-80 border dark:border-gray-500"
                alt={country().flags.alt}
                src={country().flags.svg}
              />
            </Show>
          </div>
          <div class="text-left">
            <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {country().name.common}
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <DescriptionList items={firstList()} />
              <DescriptionList items={secondList()} />
            </div>
            <Show when={borderKeys().length}>
              <dl class="flex flex-col md:flex-row mt-8 text-sm">
                <dt class="font-bold whitespace-nowrap mr-4 mb-4">Border Countries:</dt>
                <dd class="flex flex-wrap">
                  <For each={borderKeys()}>
                    {(borderKey) => (
                      <A href={`/country/${borderKey}`} class={buttonClasses}>
                        {country().borderCountries[borderKey]}
                      </A>
                    )}
                  </For>
                </dd>
              </dl>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default CountryDetail;
