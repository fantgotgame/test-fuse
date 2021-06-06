module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/details/'  // This is whatever your path from the root is
        : ''
}