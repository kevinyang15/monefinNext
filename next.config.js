const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  // [optimizedImages, {
  //   /* configuración para next-optimized-images */
  //   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
  //   optimizeImagesInDev: false,
  //   mozjpeg: {
  //     quality: 80,
  //   },
  //   imageminMozjpeg: imageminMozjpeg.default({ quality: 80 }),
  // }],
], {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Agrega aquí tu dominio si es necesario
  },
  output: 'export',
  trailingSlash: true, // Agrega esta línea para asegurarte de que las URLs terminen con una barra diagonal
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/prestamos': { page: '/prestamos' },
      '/nosotros': { page: '/nosotros' },
      '/faq': { page: '/faq' },
      '/contacto': { page: '/contacto' },
      '/terminos': { page: '/terminos' },
      '/privacidad': { page: '/privacidad' },
      // Agrega aquí otras rutas de tu aplicación
    };
  },
});



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
  
// const withPlugins = require('next-compose-plugins');
// // const optimizedImages = require('next-optimized-images');

// module.exports = async () => {
//   // const imageminMozjpeg = await import('imagemin-mozjpeg');
//   return withPlugins([
//     // [optimizedImages, {
//     //   /* configuración para next-optimized-images */
//     //   handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
//     //   optimizeImagesInDev: false,
//     //   mozjpeg: {
//     //     quality: 80,
//     //   },
//     //   imageminMozjpeg: imageminMozjpeg.default({ quality: 80 }),
//     // }],
//   ], {
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
//   });
// };



