import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";

export const useLoader = routeLoader$(() => {
  return undefined;
});

export default component$(() => {
  const data2 = useLoader();

  return (
    <div style="display: flex; justify-content: center; align-items: center; height: 400px; width: 100%; flex-direction: column;">
      {data2.value}
      <Link href="/">
        <button>Go to parent view</button>
      </Link>
    </div>
  );
});
