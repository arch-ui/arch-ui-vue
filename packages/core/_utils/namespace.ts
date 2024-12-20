export function getPrefixCls(componentName: string, customPrefixCls?: string) {
  const prefix = customPrefixCls || 'arch';
  return componentName ? `${prefix}-${componentName}` : prefix;
}

export function getPrefixPascal(componentName: string, customPrefixCls?: string) {
  return kebabToPascal(getPrefixCls(componentName, customPrefixCls));
}

/**
 * kebab-case-string -> kebabCaseString
 * PascalCaseString -> pascal-case-string (reverse=true)
 */
export function kebabToPascal(content: string, reverse: boolean = false) {
  if (reverse) {
    return content
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .slice(1);
  }
  return content.replace(/-([a-z])/g, (_, p1) => p1.toUpperCase());
}

export function pascalToKebab(content: string) {
  return content
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}
