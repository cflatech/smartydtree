import { readdirSync } from "fs";

export const getFileList = (rootPath: string): string[] => {
  const files = readdirSync(rootPath, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((file) => rootPath + "/" + file.name);

  const dirs = readdirSync(rootPath, { withFileTypes: true }).filter((dirent) =>
    dirent.isDirectory()
  );

  const subDirFiles = dirs
    ? dirs.flatMap((dirent) => getFileList(rootPath + "/" + dirent.name))
    : [];

  return [...files, ...subDirFiles];
};
