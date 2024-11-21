<script lang="ts" setup>
defineProps<{
  type?: 'icon' | 'button'
}>()

const isDark = useDark()

const isViewTransitionSupported =
  typeof document !== 'undefined' &&
  !!document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

function toggleDark(evt: MouseEvent) {
  if (!isViewTransitionSupported || !evt) {
    isDark.value = !isDark.value
    return
  }

  const { clientX: x, clientY: y } = evt
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <ActionButton
    @click="toggleDark"
    :type="type"
    :title="isDark ? 'Dark Mode' : 'Light Mode'"
    icon="i-uil:sun dark:i-uil:moon"
  />
</template>
