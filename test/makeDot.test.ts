import { makeDot, TemplateDependency } from "../src/makeDot";

test("dotファイルを出力", () => {
  const dependency: TemplateDependency[] = [
    {
      sourceTemplate: "source1",
      dependentTemplates: ["dependent1", "dependent2"],
    },
    {
      sourceTemplate: "source2",
      dependentTemplates: ["dependent1", "dependent2"],
    },
  ];

  expect(makeDot(dependency, "graphName")).toEqual(
    `digraph graphName {
  "source1" -> "dependent1";
  "source1" -> "dependent2";
  "source2" -> "dependent1";
  "source2" -> "dependent2";
}`
  );
});
