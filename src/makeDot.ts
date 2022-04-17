export type TemplateDependency = {
  sourceTemplate: string;
  dependentTemplates: string[];
};

export const makeDot = (
  dependencies: TemplateDependency[],
  graphName: string
): string => {
  return (
    `digraph ${graphName} {\n` +
    dependencies
      .flatMap((dependency) => {
        return dependency.dependentTemplates.flatMap((dependentTemplate) => {
          return `  "${dependency.sourceTemplate}" -> "${dependentTemplate}";`;
        });
      })
      .join("\n") +
    "\n}"
  );
};
