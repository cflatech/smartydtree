import { readDependentTemplates } from "../src/getDependentTemplates";

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

  // test("fileが省略されていてもファイル名が取得できる", () => {
  //   expect(
  //     readDependentTemplates(
  //       `
  //       <body>
  //         {include 'page_footer.tpl'}
  //       </body>
  //     `
  //     )
  //   );
  // });
  // test("includeするファイル以外の文字列は取得されない")
  // test
});
