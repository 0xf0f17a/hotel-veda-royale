// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: "https://hotel-veda-royale.web.app/",
    base: "/",
    vite: {
        plugins: [tailwindcss()],
    }
});
