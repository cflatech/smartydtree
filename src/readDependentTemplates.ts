export const readDependentTemplates = (template: string): string[] => {
  const includes = template.match(/{.*include?.*}/g);

  if (!includes) {
    return [];
  }

  const dependentTemplates = includes
    .map((include) => include.match(/['"]([^']*?\.tpl)['"]/))
    .map((match) => match[1]);

  return dependentTemplates;
};
