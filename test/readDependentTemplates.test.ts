import { readDependentTemplates } from "../src/readDependentTemplates";

describe("依存しているファイルを取得する", () => {
  test("includeに記載されているファイルが取得できる", () => {
    expect(
      readDependentTemplates(
        `
        <body>
          {include file="sub/sub/test.tpl"}
          {include file="sub/test.tpl"}
        </body>
        `
      )
    ).toEqual(["sub/sub/test.tpl", "sub/test.tpl"]);
  });

  test("fileが省略されていてもファイル名が取得できる", () => {
    expect(
      readDependentTemplates(
        `
        <body>
          {include 'page_footer.tpl'}
        </body>
        `
      )
    );
  });
  test("include文が存在しない場合、空の配列が返る", () => {
    expect(
      readDependentTemplates(
        `
        <body>
          {$body}
        </body>
        `
      )
    ).toEqual([]);
  });
});
