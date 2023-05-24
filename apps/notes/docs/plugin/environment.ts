import type { Plugin } from 'vuepress';

export const environmentPlugin: Plugin = (app) => {
  const handleGenerated = () => {
    return Promise.resolve();
  };
  return {
    name: 'vuepress-plugin-environment',
    setup() {
      console.log('setup');
    },
    onWatched: handleGenerated,
  };
};
