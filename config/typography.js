import Typography from 'typography';

export const typography = new Typography({
  title: 'Simply-Say',
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Candal',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Open Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  headerWeight: 500,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['300','400','500','700','900'],
    },
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '39px',
      lineHeight: '45px'
    },
    h2: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '31px',
      lineHeight: '38px',
    },
    h3: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '30px',
    },
    h4: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '25px',
    },
    p: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    button: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    }
  })
});

export default typography;
