import {Client, Server} from './src/pages/node_modules/styletron-engine-atomic';
import {DebugEngine} from './src/pages/node_modules/styletron-react';

const getHydrateClass = () =>
  document.getElementsByClassName('_styletron_hydrate_') as HTMLCollectionOf<
    HTMLStyleElement
  >;

export const styletron =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
        hydrate: getHydrateClass(),
      });

export const debug =
  process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();
