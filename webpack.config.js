import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin, {
  loader as _loader,
} from 'mini-css-extract-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log('is dev:', isDev);

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }
  return config;
};

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = extra => {
  const loaders = [
    {
      loader: _loader,
    },
    'css-loader',
  ];
  if (extra) {
    loaders.push(extra);
  }
  return loaders;
};

const plugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, 'src/favicon.ico'),
          to: resolve(__dirname, 'docs'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
  ];
  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }
  return base;
};

export const context = resolve(__dirname, 'src');
export const entry = {
  main: ['@babel/polyfill', './main.js'],
};
export const output = {
  filename: filename('js'),
  path: resolve(__dirname, 'docs'),
};
export const optimization = optimization();
export const devServer = {
  static: {
    directory: join(__dirname, 'docs'),
  },
  compress: true,
  port: 9000,
  liveReload: true,
  hot: false,
};
export const devtool = isDev ? 'source-map' : false;
export const plugins = plugins();
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: cssLoaders(),
    },
    {
      test: /\.s[ac]ss$/i,
      use: cssLoaders('sass-loader'),
    },
    {
      test: /\.(png|jpe?g|svg|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    },
  ],
};
