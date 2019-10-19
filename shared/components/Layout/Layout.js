import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GraphData from '../../graphSettings/layout';

Router.onRouteChangeComplete = () => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview'
    });
  }
};

const Layout = ({
  children,
  tenant,
  title,
  description,
  loading,
}) => {
  let displayTitle = tenant ? tenant.company_name : '';

  if (title) {
    displayTitle = `${title} - ${displayTitle}`;
  } else if (loading) {
    displayTitle = 'Loading';
  } else {
    displayTitle = 'Error';
  }
  return (
    <>
      <Head>
        <title key="title">{displayTitle}</title>
        {description && (<meta key="description" name="description" content={description} />)}
      </Head>
      <Header />
      <main>
        {loading ? <div>{children || 'Loading...'}</div> : children}
      </main>
      <Footer />
    </>
  )
}

export default GraphData(Layout);
