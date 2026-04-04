module.exports = {
    style: {
        postcss: {
            loaderOptions: {
                postcssOptions: {
                    plugins: [
                        require('@tailwindcss/postcss'),
                        require('autoprefixer'),
                    ],
                },
            },
        },
    },
};
