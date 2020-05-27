const path = require( 'path' );

const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const {GenerateSW, InjectManifest } = require( 'workbox-webpack-plugin')

module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
       filename: 'main.js',
       path: path.resolve( __dirname, 'build' ),
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
            use: 'file-loader'
         }
]
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, './src/index.html' ),
         filename: 'index.html'
      }),
      new InjectManifest({
        swSrc: './src/sw.js'
      }),
      // new GenerateSW({
      //   // these options encourage the ServiceWorkers to get in there fast
      //   // and not allow any straggling "old" SWs to hang around
      //   clientsClaim: true,
      //   skipWaiting: true,
      // }),
   ]
};