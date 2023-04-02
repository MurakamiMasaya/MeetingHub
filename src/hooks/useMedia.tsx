const breakpoints = {
  iphone5: 320,
  sp: 576,
  tab: 768,
  pc: 1042,
} as const

export const mediaQuery = (key: keyof typeof breakpoints) =>
  `@media (max-width: ${breakpoints[key]}px)`
