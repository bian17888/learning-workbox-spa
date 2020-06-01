const path = require( 'path' );

const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const CopyPlugin = require('copy-webpack-plugin');
const {GenerateSW, InjectManifest } = require( 'workbox-webpack-plugin')


module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'build' ),
      filename: 'main.js',
      publicPath : '/',
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'src'),
      publicPath : '/',
      watchContentBase: false,
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|svg|jpg|gif)$/,
            use : 'url-loader',
         },
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, './src/index.html' ),
         filename: 'index.html'
      }),
      new CopyPlugin({
         patterns : [{
            from : path.resolve( __dirname, 'src/images' ) , to:path.resolve( __dirname, 'build/images' )
         }]
      }),
      new InjectManifest({
        swSrc: './src/sw.js'
      }),
      new GenerateSW({
         // Do not precache images
         exclude: [/\.(?:png|jpg|jpeg|svg)$/],
   
         // Define runtime caching rules.
         runtimeCaching: [
            // images
            {
               // Match any request that ends with .png, .jpg, .jpeg or .svg.
               urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
               // Apply a cache-first strategy.
               handler: 'CacheFirst',
               options: {
                  // Use a custom cache name.
                  cacheName: 'images',
                  // Only cache 10 images.
                  expiration: {
                     maxEntries: 10,
                  },
               },
            },
            // css + js
            {
               // Match any request that ends with .png, .jpg, .jpeg or .svg.
               urlPattern: /\.(?:css|js)$/,
               // Apply a cache-first strategy.
               handler: 'StaleWhileRevalidate',
               options: {
                  // Use a custom cache name.
                  cacheName: 'static',
               },
            }
         ],
      })
   ]
};