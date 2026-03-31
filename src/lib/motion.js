export { LazyMotion, m as Motion } from 'framer-motion'

export const loadMotionFeatures = () =>
  import('./motionFeatures.js').then((module) => module.default)
