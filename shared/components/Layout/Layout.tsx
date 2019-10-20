import React, { ReactNode } from 'react';
import Head from 'next/head';
// import Router from 'next/router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GraphData from '../../graphSettings/layout';

interface LayoutProps {
  children?: ReactNode,
  description?: string,
  loading?: boolean,
  tenant?: TenantProps,
  data?: any,
}

interface TenantProps {
  company_name?: string;
}

const Layout = ({
  children,
  description,
  loading,
  tenant,
  data,
}: LayoutProps) => {
  let displayTitle = tenant ? tenant.company_name : '';
  let title = 'Hello';

  if (data && data.catalogue) {
    title = data.catalogue.product.name;
  }

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
        {loading ? 'Loading...' : children}
      </main>
      <Footer />
    </>
  )
}

export default GraphData(Layout);
