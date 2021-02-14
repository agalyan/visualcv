export const colors = {
  primary: {
    base: '#3498db',
    light: '#3e5fbc',
    dark: '#284187',
  },
  background: {
    light: '#3e5fbc',
    dark: '#284187',
  },
  white: '#fff',
  black: '#262626',
  darkGray: '#7d7d7d',
  gray: '#F9F9F9',
  lightCyan: '#F7FBFE',
  lightBlue: '#C8E3F9',
  blue: '#5095BF',
  stroke: '#EBEBEB',
  pink: '#E44F74',
};

export const button = {
  borderRadius: '7px',
  bgColor: `${colors.white}`,
  textColor: `${colors.blue}`,
  border: `1px solid ${colors.stroke}`,
  hover: {
    bgColor: `${colors.white}`,
    textColor: `${colors.black}`,
    border: `1px solid ${colors.black}`,
    shadow: '0px 4px 10px rgba(0, 0, 0, 0.2);'
  }
}

export const shadow = {
  main: '0px 4px 44px rgba(0, 0, 0, 0.03)',
  text: {
    small: '0 5px 10px rgba(0, 0, 0, 0.25)',
    big: '0 15px 20px rgba(0, 0, 0, 0.13)',
  },
};

export const gradient = {
  // eslint-disable-next-line
  leftToRight: `linear-gradient(-45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
  // eslint-disable-next-line
  rightToLeft: `linear-gradient(45deg, ${colors.background.light} 0%, ${colors.background.dark} 100%)`,
};

export const transition = {
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  duration: '0.4s',
};

export const border = {
  default: '1px solid #EBEBEB',
}

export const theme = {
  colors,
  gradient,
  shadow,
  border,
  button,
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
    xl: '1400px',
  },
  fontFamily: {
    // eslint-disable-next-line
    body: `Open Sans,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
    // eslint-disable-next-line
    heading: `'Montserrat', sans-serif`,
    footer: `Montserrat, sans-serif`,
  },
  layout: {
    article: '46rem',
    base: '70rem',
    big: '83.33333rem',
  },
  borderRadius: {
    default: '0.4rem',
    round: '100rem',
  },
  transitions: {
    default: {
      duration: transition.duration,
      timing: transition.easeInOutCubic,
      transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
    },
    boom: {
      duration: transition.duration,
      timing: transition.easeOutBack,
      transition: `all ${transition.duration} ${transition.easeOutBack}`,
    },
    headroom: {
      transition: 'all 0.25s ease-in-out',
    },
  },
};

export default theme;
