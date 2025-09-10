// Утилита для работы с путями в зависимости от окружения
export function getBasePath(): string {
  // В продакшене на GitHub Pages используем префикс /dear-diary/
  if (typeof window !== 'undefined' && window.location.hostname === 'nikolai-shabalin.github.io') {
    return '/dear-diary';
  }
  // В разработке используем корневой путь
  return '';
}

export function getPath(path: string): string {
  const base = getBasePath();
  return `${base}${path}`;
}

// Предопределенные пути
export const paths = {
  home: () => getPath('/'),
  tasks: () => getPath('/tasks'),
} as const;
