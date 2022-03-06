import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Home from './home'
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function() {
    const isBrowser = useIsBrowser();
    const {siteConfig} = useDocusaurusContext();

    const pathname = isBrowser && location.pathname

    useEffect(() => {
        if (isBrowser) {
            const nav = document.getElementsByTagName('nav')[0];
            const classList = nav &&  nav.classList;
            if(!classList) return;
            if (pathname === '/' || pathname === '/') {
                classList.add('index-nav');
            } else {
                classList.remove('index-nav');
            }
        }
    }, [isBrowser, pathname])

    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />">
            <main>
                <Home/>
            </main>
        </Layout>
    );
}
