// Require MANUALLY the content that should make it to the bundle without
// hashing its name, for things like favico or robots
// require("file?name=[name].[ext]!./favicon.ico");
// require("file?name=[name].[ext]!./robots.txt");
import '!style-loader!css-loader!app/assets/bastrap3/bootstrap.min.css';
import '!style-loader!css-loader!app/assets/bastrap3/bastrap.css';
