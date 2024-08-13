// module.exports = {
//     reactStrictMode: true,
//     images: {
//       domains: ['localhost'], // Agrega aquí tu dominio si es necesario
//     },
//     output: 'export',
//     exportPathMap: async function (
//       defaultPathMap,
//       { dev, dir, outDir, distDir, buildId }
//     ) {
//       return {
//         ...defaultPathMap,
//       };
//     },
//   };
  
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = async () => {
  const imageminMozjpeg = await import('imagemin-mozjpeg');
  return withPlugins([
    [optimizedImages, {
      /* configuración para next-optimized-images */
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      imageminMozjpeg: imageminMozjpeg.default({ quality: 80 }),
    }],
  ], {
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
  });
};
