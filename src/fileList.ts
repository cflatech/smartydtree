import { readdirSync } from "fs";

export const getFileList = (rootViewPath: string): string[] => {
  const files = readdirSync(rootViewPath, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((file) => rootViewPath + "/" + file.name);

  const dirs = readdirSync(rootViewPath, { withFileTypes: true }).filter(
    (dirent) => dirent.isDirectory()
  );

  const subDirFiles = dirs
    ? dirs.flatMap((dirent) => getFileList(rootViewPath + "/" + dirent.name))
    : [];

  return [...files, ...subDirFiles];
};
