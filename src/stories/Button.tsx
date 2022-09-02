import * as React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  children?: React.ReactNode;
}

type Props = ButtonProps & React.AllHTMLAttributes<HTMLElement>

export const ButtonBase = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {

    return <div>{children}</div>
  })

/**
 * Primary UI component for user interaction
 */
export const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof ButtonBase>>(({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}, ref) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type={"button" as any}
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
});
