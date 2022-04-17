import { getFileList } from "../src/fileList";

test("ファイルリストを取得できる", () => {
  expect(getFileList("./test/views")).toEqual([
    "./test/views/test.tpl",
    "./test/views/main/index.tpl",
    "./test/views/sub/test.tpl",
    "./test/views/sub/sub/test.tpl",
    "./test/views/sub/sub/test2.tpl",
  ]);
});
