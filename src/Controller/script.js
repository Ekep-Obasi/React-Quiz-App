import { createContext, useContext } from 'react';

const PageContext = createContext();

const PageProvider = PageContext.Provider;

const PageConsumer = PageContext.Consumer;

export const usePage = () => useContext(PageContext);

export { PageConsumer, PageProvider };
