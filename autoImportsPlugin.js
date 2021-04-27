"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.AutoImportsPlugin = void 0;
var fs = require("fs");
var path = require("path");
var PartitionImports_1 = require("./core/PartitionImports");
var AutoImportsPlugin = /** @class */ (function () {
    function AutoImportsPlugin(options) {
        this.fileSistem = new Map();
        this.options = options;
        this.importsMap = new Map(this.options.startDirs.map(function (startDir) { return [startDir, new Map()]; }));
        this.getPartitionImports();
    }
    AutoImportsPlugin.prototype.apply = function (compiler) {
    };
    AutoImportsPlugin.prototype.getPartitionImports = function () {
        var _this = this;
        return new Map(this.options.startDirs.map(function (startDir) {
            var importedDirs = _this.getPromisePartitionedImports(startDir)
                .then(_this.getFlatImportNamesCollection)
                .then(function (importDirs) { return _this.fillingImportsMap(importDirs, _this.importsMap.get(startDir)); })
                // обращается к this, а биндинг ломает вычисление типов ts. потому только стрелка
                .then(function (importsMap) { return _this.generateImportTexts(importsMap); })
                .then(function (importTexts) { return _this.saveImportFiles(importTexts, startDir); })["catch"](function (e) { return console.error(e); });
            return [startDir, importedDirs];
        }));
    };
    AutoImportsPlugin.prototype.saveImportFiles = function (importTexts, to) {
        var e_1, _a;
        try {
            for (var _b = __values(importTexts.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ext = _c.value;
                // файл создаётся всегда. т.к. внешние, к пакету, файлы ожидают его наличия (импортят его).
                // таков интерфейс пакета
                var importText = importTexts.get(ext).trimStart();
                var name = (ext != '.json')
                    ? "" + this.options.basenameImportFiles + ext
                    : this.options.basenameImportFiles + ".generate" + ext;
                var filePath = path.resolve(to, name);
                fs.writeFile(filePath, importText, function () { });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    AutoImportsPlugin.prototype.generateImportTexts = function (importsMap) {
        var e_2, _a;
        var _this = this;
        // всё распределено по расширениям
        var importTexts = new Map();
        var _loop_1 = function (ext) {
            var importTextForExt = __spreadArray([], __read(new Set(importsMap.get(ext)))).reduce(function (importText, nextImportFolder) {
                // по соглашению: basename files === basename his folders
                var name = path.basename(nextImportFolder);
                // если использовать join, может ломаеться pug-loader. scss-loader за этим не замечен.
                var nextFilePath = path.resolve(nextImportFolder, name);
                // очевидно, в имени каталога нет расширения, оно берётся из мапы генераторов.
                // все каталоги раскидываются по расширениям их файлов в импортируемом коде.
                if (!_this.options.withoutExt) {
                    nextFilePath += ext;
                }
                var nextImportExpr = _this.options.importsExprGenerators.get(ext)(nextFilePath);
                return importText + nextImportExpr;
            }, '');
            importTexts.set(ext, importTextForExt);
        };
        try {
            for (var _b = __values(this.options.importsExprGenerators.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ext = _c.value;
                _loop_1(ext);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return importTexts;
    };
    AutoImportsPlugin.prototype.fillingImportsMap = function (importDirs, importsForStartDir) {
        var e_3, _a, e_4, _b;
        try {
            for (var importDirs_1 = __values(importDirs), importDirs_1_1 = importDirs_1.next(); !importDirs_1_1.done; importDirs_1_1 = importDirs_1.next()) {
                var importDir = importDirs_1_1.value;
                try {
                    for (var _c = (e_4 = void 0, __values(this.readdir(path.resolve(importDir)).files)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var file = _d.value;
                        var ext = path.extname(file);
                        if (ext == '.json' && path.basename(file, ext) == this.options.basenameImportFiles) {
                            continue;
                        }
                        var importFiles = importsForStartDir.get(ext);
                        if (!importFiles) {
                            importsForStartDir.set(ext, []);
                            importFiles = importsForStartDir.get(ext);
                        }
                        importFiles.push(importDir);
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c["return"])) _b.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (importDirs_1_1 && !importDirs_1_1.done && (_a = importDirs_1["return"])) _a.call(importDirs_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return importsForStartDir;
    };
    AutoImportsPlugin.prototype.getFlatImportNamesCollection = function (imports) {
        var e_5, _a, e_6, _b;
        var importsList = [];
        try {
            for (var _c = __values(imports.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var source = _d.value;
                try {
                    for (var _e = (e_6 = void 0, __values(imports.get(source).values())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var dirName = _f.value;
                        importsList.push(path.join(source, dirName));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e["return"])) _b.call(_e);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return importsList;
    };
    AutoImportsPlugin.prototype.getPromisePartitionedImports = function (startDir) {
        var partitionImports = new PartitionImports_1.PartitionImports({
            sources: this.options.sources,
            importsFilePath: path.join(startDir, this.options.basenameImportFiles + ".json")
        });
        return partitionImports.getPartitionedNamesAsync();
    };
    AutoImportsPlugin.prototype.readdir = function (source) {
        var e_7, _a;
        var dirIncludes = {
            dirs: [],
            files: []
        };
        try {
            for (var _b = __values(fs.readdirSync(source, { withFileTypes: true })), _c = _b.next(); !_c.done; _c = _b.next()) {
                var dirItem = _c.value;
                if (dirItem.isDirectory()) {
                    dirIncludes.dirs.push(dirItem.name);
                }
                else if (dirItem.isFile()) {
                    dirIncludes.files.push(dirItem.name);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return dirIncludes;
    };
    return AutoImportsPlugin;
}());
exports.AutoImportsPlugin = AutoImportsPlugin;
