export interface ThemeTokenType {
  primary?: string;
  success?: string;
  warning?: string;
  info?: string;
}
/**
 * 修改主题色
 * @param token 颜色token
 * @returns
 */
export function updateThemeToken(token: ThemeTokenType) {
  if (!document) {
    return;
  }
  // 修改 css 变量
  document.documentElement.style.setProperty('--primary-color', token.primary ?? '');
  document.documentElement.style.setProperty('--success-color', token.success ?? '');
  document.documentElement.style.setProperty('--warning-color', token.warning ?? '');
  document.documentElement.style.setProperty('--info-color', token.info ?? '');
}
