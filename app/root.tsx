import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "KUDUAIRO TRANSLATOR",
    description: "Tradutoire oficiel de Portugueis Brasiluairo para a lingua do Kuduairo",
    "og:image": "https://raw.githubusercontent.com/leodlabs/kuduairo-translator/main/public/favicon.ico",
    "og:type": "website",
    "og:title": "KUDUAIRO TRANSLATOR",
    "og:descripton": "Tradutoire oficiel de Portugueis Brasiluairo para a lingua do Kuduairo",
    "og:url": "https://kuduairo.netlify.app",
    "og:site_name": "KUDUAIRO TRANSLATOR",
    "twitter:title": "KUDUAIRO TRANSLATOR",
    "twitter:descripton": "Tradutoire oficiel de Portugueis Brasiluairo para a lingua do Kuduairo",
    "twitter:image": "https://raw.githubusercontent.com/leodlabs/kuduairo-translator/main/public/favicon.ico",
    "twitter:site": "https://kuduairo.netlify.app",
    "twitter:creator": "@leodsu",
    "robots": "index, follow"
  };
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    },
    {
      rel: "stylesheet",
      href: "css/global.css",
    },
    {
      rel: "canonical",
      href: "https://kuduairo.netlify.app"
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="wrapper-boring">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
