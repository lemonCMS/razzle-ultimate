import asyncMap from './asyncMap';
import authorize from './authorize';

export default (name, components, locals) => {
  return asyncMap(components, (component) => {
    return authorize(name, component, locals);
  });
};
