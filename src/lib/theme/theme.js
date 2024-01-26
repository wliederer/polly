export const buildTheme = (theme) => {
  const colors = {
    default: {
      border: '#1d0a2c',
      text: '#191d24',
      notPicked: '#c0c0c0',
      picked: '#5e24a9',
      background: 'rgba(25, 29, 36,0.8)',
    },
  }

  const fontFamily = "'Outfit', sans-serif"

  const shadows = {
    shadow1: '0px 4px 8px 0px #1b1f2866',
    shadow2: '0px 6px 12px 0px #1b1f2866',
    shadow3: '0px 8px 18px 0px #1b1f2880',
    shadow4: '0px 12px 20px 0px #1b1f2899',
  }
  return {
    colors: colors[theme],
    fontFamily,
    shadows,
  }
}
