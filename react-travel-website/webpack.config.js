{
    test: /\.(jpg|png|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 25000,
    },
},
{
    test: /\.(jpg|png|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[hash].[ext]',
    },
}