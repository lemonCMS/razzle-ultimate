import asyncMap from './asyncMap';
import trigger from './trigger';

export default (name, components, locals) => {
  return asyncMap(components, (component) => {
    return trigger(name, component, locals);
  });
};
