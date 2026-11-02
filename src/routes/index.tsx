import { createFileRoute } from "@tanstack/react-router";
import App from "@/portfolio/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KALYAN | Editor & VFX Artist" },
      {
        name: "description",
        content:
          "Kalyan. Editor, VFX Artist & Visual Storyteller from Indramayu. Film, visual effects, 3D, and stories that leave a mark.",
      },
      { name: "theme-color", content: "#090909" },
      { property: "og:title", content: "KALYAN | Editor & VFX Artist" },
      {
        property: "og:description",
        content:
          "Every frame tells a story. Selected films, VFX, 3D and visual experiments by Kalyan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "icon",
        href: `${import.meta.env.BASE_URL}Asset/img/favicon.svg`,
        type: "image/svg+xml",
      },
      {
        rel: "preload",
        href: `${import.meta.env.BASE_URL}Asset/img/kalyan-portrait.png`,
        as: "image",
        fetchPriority: "high",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <App />;
}
