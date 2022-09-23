export const createRipple = (
  e: MouseEvent,
  color = 'rgba(255, 255, 255, 0.7)',
  animationTime = 500
) => {
  const container = e.currentTarget as HTMLElement;
  const circle = document.createElement('span');
  const diameter = Math.max(container.clientWidth, container.clientHeight);
  const radius = diameter / 2;
  let styleSheet = container.querySelector(
    'style[ripple=true]'
  ) as HTMLStyleElement;

  if (!styleSheet) {
    styleSheet = document.createElement('style');
    styleSheet.setAttribute('ripple', 'true');
    styleSheet.innerHTML = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    container.appendChild(styleSheet);
  }

  const rect = container.getBoundingClientRect();

  const style: Partial<CSSStyleDeclaration> = {
    width: (circle.style.height = `${diameter}px`),
    left: `${e.pageX - window.scrollX - (rect.left + radius)}px`,
    top: `${e.pageY - window.scrollY - (rect.top + radius)}px`,
    position: 'absolute',
    borderRadius: '50%',
    transform: 'scale(0)',
    animation: `ripple ${animationTime}ms linear`,
    background: color,
    pointerEvents: 'none',
  };

  for (const key in style) {
    circle.style[key] = style[key] as string;
  }

  container.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, animationTime);
};
