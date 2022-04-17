export const readDependentTemplates = (template: string): string[] => {
  const includes = template.match(/{.*include?.*}/g);
  const dependentTemplates = includes
    .map((include) => include.match(/file *?= *?['"] *?(.*?) *?['"]/))
    .map((match) => match[1]);

  return dependentTemplates;
};
