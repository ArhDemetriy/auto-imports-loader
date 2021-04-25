declare type AutoImportsPluginOptions =
  {
    sources: string[],
    startDirs: string[],
    basenameImportFiles: string,
    importsExprGenerators: Map<string, (importPath: string) => string>,
    withoutExt?: boolean,
  }
export {
  AutoImportsPluginOptions
}
