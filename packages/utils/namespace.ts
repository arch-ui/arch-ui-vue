export function getPrefixCls(componentName: string, customPrefixCls?: string) {
  const prefix = customPrefixCls || 'hp';
  return componentName ? `${prefix}-${componentName}` : prefix;
}

export function getPrefixPascal(componentName: string, customPrefixCls?: string) {
  return prefixToPascalCase(getPrefixCls(componentName, customPrefixCls));
}

export function prefixToPascalCase(prefix: string) {
  return prefix.replace(/-([a-z])/g, (_, p1) => p1.toUpperCase());
}
