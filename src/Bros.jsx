function Bros() {

  const theme = extendTheme({
    fonts: {
      heading: "CustomFont, Edwardian Script ITC",
      body: "CustomFont, Edwardian Script ITC",
    },
    styles: {
      global: {
        '@font-face': {
          fontFamily: 'CustomFont',
          src: `url(./font.ttf) format('truetype')`, 
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      },
      body: {
          fontSize: ['1rem', '1.2rem', '1.5rem'],
        },
  }});
    return (
        <p>si funcionas es porque eres dios </p>
    )
}

export default Bros;