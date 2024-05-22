    <template>
      <div class="main">
      <main>
        <NuxtPage />
      </main>
      <p class="proutepath">
        <strong>Current route path:</strong> {{ $route.fullPath }}
      </p>
    </div>
    </template>

    <style>
    main{
      margin:auto;
      width:600px;
    }
    .main{
      margin:auto;
      width:600px;
    }
    .proutepath{
      margin:20px auto;
      width:600px;
    }
  </style>
    <!--dans nuxt.config.ts il y a la config du rendu hybride, SSR et CSR 
      export default defineNuxtConfig({
        routeRules: {
          // Homepage pre-rendered at build time
          '/': { prerender: true },
          // Products page generated on demand, revalidates in background, cached until API response changes
          '/products': { swr: true },
          // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
          '/products/**': { swr: 3600 },
          // Blog posts page generated on demand, revalidates in background, cached on CDN for 1 hour (3600 seconds)
          '/blog': { isr: 3600 },
          // Blog post page generated on demand once until next deployment, cached on CDN
          '/blog/**': { isr: true },
          // Admin dashboard renders only on client-side
          '/admin/**': { ssr: false },
          // Add cors headers on API routes
          '/api/**': { cors: true },
          // Redirects legacy urls
          '/old-page': { redirect: '/new-page' }
      }
})
     -->