import { readFileSync, writeFileSync } from "fs";
import { getFileList } from "./getFileList";
import { makeDot, TemplateDependency } from "./makeDot";
import { readDependentTemplates } from "./readDependentTemplates";

export const main = (argv: string[]) => {
  const targetDirectory = argv[2];
  const outFileName = argv[3];

  const fileList = getFileList(targetDirectory);

  const dependencies = fileList.map((filePath) => {
    const file = readFileSync(filePath, { encoding: "utf-8" });
    const dependency: TemplateDependency = {
      sourceTemplate: filePath.replace(targetDirectory + "/", ""),
      dependentTemplates: readDependentTemplates(file),
    };

    return dependency;
  });

  writeFileSync(outFileName, makeDot(dependencies, "graphName"));
};
