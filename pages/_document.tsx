/* eslint react/no-danger: 0  */
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import globalStyle from '../shared/ui/global';
// tslint:disable-next-line
// import { TALENT_ID, API_URL } from '../server/config';

// These settings will be exposed to the world
const clientConfig = {
  TALENT_ID: process.env.TALENT_ID,
  API_URL: process.env.API_URL,
};

interface MyDocumentProps {
  styleTags?: any,
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="no">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimal-ui"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              __appConfig=${JSON.stringify(clientConfig)};
              __appConfig.HOST_NAME = location.origin;
              `
            }}
          />
          <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,fetch" />
          <NextScript />
        </body>
      </html>
    );
  }
}
