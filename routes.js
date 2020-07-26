module.exports = function (app) {
    app.use("/api", require("./api/user/user.routes.js"));
    app.use("/api", require("./api/city/city.routes"));
    app.use("/api", require("./api/region/region.routes"));
    app.use("/api", require("./api/auth/login"));
}