module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'], // Agrega aquí tu dominio si es necesario
    },
    output: 'export',
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        ...defaultPathMap,
      };
    },
  };
  
  