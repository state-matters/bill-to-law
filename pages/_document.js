import { default as NextDoc, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { colors } from "constants";

export default class Document extends NextDoc {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet();
    const originalRender = context.renderPage;
    try {
      context.renderPage = () =>
        originalRender({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await NextDoc.getInitialProps(context);
      return {
        ...initialProps,
        styles: sheet.getStyleElement()
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={colors.orange_500} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.styles}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:200,400,600,800"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
