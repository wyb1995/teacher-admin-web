import express from 'express';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import path from 'path';

const app = express();
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));

app.use('*', (req, res)=>{
    res.sendFile(path.resolve('./public/index.html'));
});

app.get('/', (res, req)=> {
    req.send('abc');
});

app.listen(3033, function() {
    console.log("server started at http://localhost:3033");
});