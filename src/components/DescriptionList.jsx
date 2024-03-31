function DescriptionList({ items }) {
  return (
    <dl class="text-sm">
      <For each={items}>
        {(item) => (
          <div class="flex mb-2">
            <Show when={item.value}>
              <dt class="font-bold mr-2">{item.key}:</dt>
              <dd>{item.value}</dd>
            </Show>
          </div>
        )}
      </For>
    </dl>
  );
}

export default DescriptionList;
