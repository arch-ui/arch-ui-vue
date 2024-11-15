export function getPrefixCls(componentName: string, customPrefixCls?: string) {
  const prefix = customPrefixCls || 'arch';
  return componentName ? `${prefix}-${componentName}` : prefix;
}

export function getPrefixPascal(componentName: string, customPrefixCls?: string) {
  return kebabToPascal(getPrefixCls(componentName, customPrefixCls));
}

export function kebabToPascal(prefix: string, reverse: boolean = false) {
  if (reverse) {
    return prefix
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .slice(1);
  }
  return prefix.replace(/-([a-z])/g, (_, p1) => p1.toUpperCase());
}
