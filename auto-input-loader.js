"use strict";
exports.__esModule = true;
var path = require("path");
var ParserResolves_1 = require("./core/ParserResolves");
function default_1(source) {
    var options = this.loaders[this.loaderIndex].options;
    var coreSettings = {
        sources: options.sources,
        parsedImportFilesGenerators: options.parsedImportFilesGenerators,
        startImportFilePath: path.join(path.dirname(this.resourcePath), options.startImportFileName)
    };
    var parserResolves = new ParserResolves_1.ParserResolves(coreSettings);
    parserResolves.run();
    return source;
}
exports["default"] = default_1;
