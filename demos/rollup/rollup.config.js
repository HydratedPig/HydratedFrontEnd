import path from 'path';

const packageDir = path.resolve(__dirname, 'src');

const resolveSrc = (p) => path.resolve(packageDir, p);

const getOutputConfigs = (name, folderName = '') => {
  const bundlerName = `dist/${[folderName, name].join('/')}`;
  return {
    'esm-bundler': {
      file: `${bundlerName}.esm-bundler.js`,
      format: 'es',
    },
    'esm-browser': {
      file: `${bundlerName}.esm-browser.js`,
      format: 'es',
    },
    cjs: {
      file: `${bundlerName}.cjs.js`,
      format: 'cjs',
    },
    global: {
      file: `${bundlerName}.global.js`,
      format: 'iife',
    },
    // runtime-only builds, for main "vue" package only
    'esm-bundler-runtime': {
      file: `${bundlerName}.runtime.esm-bundler.js`,
      format: 'es',
    },
    'esm-browser-runtime': {
      file: `${bundlerName}.runtime.esm-browser.js`,
      format: 'es',
    },
    'global-runtime': {
      file: `${bundlerName}.runtime.global.js`,
      format: 'iife',
    },
  };
};

const getTreeShakeConfig = () => {
  const folderName = 'treeShaking';
  const treeShakes = resolveSrc(`${folderName}/index.js`);
  return ['esm-bundler', 'cjs'].map((format) => {
    return {
      input: treeShakes,
      output: getOutputConfigs('index', folderName)[format],
    };
  });
};
const defaultConfig = [...getTreeShakeConfig()];
console.log(defaultConfig);

export default defaultConfig;
