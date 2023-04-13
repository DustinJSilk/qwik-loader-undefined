import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div style="display: flex; justify-content: center; align-items: center; height: 400px; width: 100%;">
      <Link href="/child/">
        <button>Go to child view</button>
      </Link>
    </div>
  );
});
