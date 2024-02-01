export const buildTheme = (theme) => {
  const colors = {
    default: {
      border: '#182d66',
      text: '#260503',
      notPicked: '#666018',
      picked: '#423f29',
      background: 'rgba(102, 96, 24,0.8)',
    },
    drab: {
      border: '#1E5281',
      text: '#303b32',
      notPicked: '#d98b73',
      picked: '#c24a25',
      background: 'rgba(217, 139, 115,0.8)',
    },
    sienna: {
      border: '#2a3627',
      text: '#232423',
      notPicked: '#632e1f',
      picked: '#bfb86b',
      background: 'rgba(99, 46, 31,0.8)',
    },
    royal: {
      border: '#c44569',
      text: '#376b6b',
      notPicked: '#90bef5',
      picked: '#a8a872',
      background: 'rgba(144, 190, 245,0.8)',
    },
    toys: {
      border: '#696138',
      text: '#396e57',
      notPicked: '#59396e',
      picked: '#852019',
      background: 'rgba(89, 57, 110,0.8)',
    },
    betsy: {
      border: '#3140af',
      text: 'black',
      notPicked: '#dedede',
      picked: '#ccebff',
      background: 'rgba(247, 247, 247,1)',
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
