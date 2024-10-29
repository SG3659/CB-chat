import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { prettyJSON } from 'hono/pretty-json'
import { HtmlEscapedString } from 'hono/utils/html';
import { extract, install } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';
import { authRoute } from './routes/auth'
import { homeHTML } from './views/home';
import { signupHTML } from './views/signup';
import { loginHTML } from './views/login';


install({
  presets: [
    presetTailwind(),
    {
      theme: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
    },
  ],
});

async function ssrTwind(body: HtmlEscapedString | Promise<HtmlEscapedString>) {
  const { html, css } = extract((body).toString());
  return html.replace('</head>', `<style data-twind>${css}</style><head>`);
}

// Define the Env interface
interface Env {
  AI: Ai
}
const app = new Hono<{Bindings:Env}>()


app.get('/health', (c) => c.text('Pretty Users API'))
app.use("*",prettyJSON())
app.notFound((c) => c.json({ message: 'Route Not Found', ok: false }, 404))
//routes
app.route("/auth",authRoute)


//pages
app.get('/', async (c) => {
  return c.html(await ssrTwind(homeHTML));
});
app.get('/signup', async (c) => {
  return c.html(await ssrTwind(signupHTML));
});
app.get('/login', async (c) => {
  return c.html(await ssrTwind(loginHTML));
});
export default app
