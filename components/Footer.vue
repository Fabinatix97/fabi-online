<template>
  <footer class="relative z-20 flex h-40 items-end justify-center">
    <div class="flex flex-col items-center text-sm">
      <span class="flex items-center gap-1">
        Powered by
        <a
          href="https://nuxt.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-[#00DC82] hover:text-[#00C16A]"
          aria-label="Besuche Nuxt (öffnet in neuem Tab)"
        >
          <Icon name="lineicons:nuxt" size="1.4em" />
          Nuxt
        </a>
      </span>
      <span class="flex items-center gap-1">
        Check out code on
        <a
          href="https://github.com/Fabinatix97/fabi-online"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center text-[var(--primary)] hover:text-[var(--primaryhover)]"
          aria-label="Code auf GitHub ansehen (öffnet in neuem Tab)"
        >
          <Icon name="line-md:github-loop" size="1.4em" />
          GitHub
        </a>
      </span>
    </div>
  </footer>
</template>
