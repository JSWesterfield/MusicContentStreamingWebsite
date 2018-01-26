module.exports = {
    entry: './views/billboard.ejs',
    output: {
        filename: './bundle.js'
    },
    //webpack will watch your project directory for any change, and when
    // a change happens it basically reruns the webpack command.
    watch: true
};