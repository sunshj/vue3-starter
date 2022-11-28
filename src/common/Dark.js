import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme
} from 'darkreader'

export const enableDark = () =>
  enableDarkMode({ brightness: 105, contrast: 95, sepia: 0, grayscale: 15 })

export const disableDark = () => disableDarkMode()

export const autoDark = () => followSystemColorScheme()
