export function useRocketAvatar(className: string, size: string) {
  const containerClasses = `relative flex-shrink-0 group ${className}`;
  
  return { containerClasses };
}