import { createContext } from 'react';

const PageContext = createContext();

const PageProvider = PageContext.Provider;

const PageConsumer = PageContext.Consumer;

export { PageConsumer, PageProvider, PageContext };
