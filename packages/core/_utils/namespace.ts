export function getPrefixCls(componentName: string, customPrefixCls?: string) {
  const prefix = customPrefixCls || 'arch';
  return componentName ? `${prefix}-${componentName}` : prefix;
}

export function getPrefixPascal(
  componentName: string,
  customPrefixCls?: string
) {
  return kebabToPascal(getPrefixCls(componentName, customPrefixCls));
}

/**
 * kebab-case-string -> KebabCaseString
 * PascalCaseString -> pascal-case-string (reverse=true)
 */
export function kebabToPascal(content: string, reverse: boolean = false) {
  if (reverse) {
    return content
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, '');
  }
  // 将首字母大写，并将 - 后的字母大写
  return content
    .replace(/-([a-z])/g, (_, p1) => p1.toUpperCase())
    .replace(/^([a-z])/, (_, p1) => p1.toUpperCase());
}

export function pascalToKebab(content: string) {
  return kebabToPascal(content, true);
}
