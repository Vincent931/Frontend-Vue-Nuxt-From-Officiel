// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    routeRules: {
      // Homepage pre-rendered at build time
      '/': { prerender: true },
      '/hello':{ ssr: false },
      '/headConfigure':{ ssr: false },
      '/userinput':{ ssr: false },
      '/binding':{ ssr: false },
      '/condloop':{ ssr: false },
      '/formbindings':{ssr: false },
      '/simplecomponent':{ ssr: false },
      '/editor':{ ssr: false },
      '/fetching':{ ssr: false },
      '/sortfilter':{ ssr: false },
      '/tree':{ ssr: false },
      '/svggraph':{ ssr: false },
      '/modal':{ ssr: false },
      '/listing':{ ssr: false },
      '/todomvc':{ ssr: false },
      '/counter':{ ssr: false },
      '/tempconvert':{ ssr: false },
      '/booker':{ ssr: false },
      '/timer':{ ssr: false },
      '/crud':{ ssr: false },
      '/drawer':{ ssr: false },
      '/ceils':{ ssr: false },
      // Products page generated on demand, revalidates in background, cached until API response changes
      //'/hello': { swr: true },
      // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
      //'/products/**': { swr: 3600 },
      // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
      //'/blog': { isr: 3600 },
      // Blog post page generated on demand once until next deployment, cached on CDN
      //'/blog/**': { isr: true },
      // Admin dashboard renders only on client-side
      //'/admin/**': { ssr: false },
      // Add cors headers on API routes
      //'/api/**': { cors: true },
      // Redirects legacy urls
      //'/old-page': { redirect: '/new-page' }
    },

})