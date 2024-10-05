// Next.js will invalidate the cache when a

import PackageFilter from "../_components/package_filter";

// request comes in, at most once every 60 seconds.
export const revalidate = 120;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {}

export default async function Page({ params }) {
  return (
    <main className=" mt-[100px] px-3">
      <PackageFilter />
    </main>
  );
}
