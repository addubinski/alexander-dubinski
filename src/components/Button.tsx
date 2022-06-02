import { ButtonHTMLAttributes, ReactElement } from 'react';
import type * as Stitches from '@stitches/react';
import { styled } from '../stitches.config';

const StyledButton = styled('button', {
  borderRadius: '1em',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  },
  variants: {
    color: {
      blue: {
        backgroundColor: '$blue500',
      },
    },
    size: {
      sm: {
        fontSize: '1em',
        padding: '0.5em 1em',
      },
      md: {
        fontSize: '1.1em',
        padding: '0.75em 1.5em',
      },
      lg: {
        fontSize: '1.2em',
        padding: '1em 2em',
      },
    },
  },
  defaultVariants: {
    color: 'blue',
    size: 'md',
  },
});

type ButtonVariants = Stitches.VariantProps<typeof StyledButton>;

function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants): ReactElement {
  return (
    <StyledButton {...props} type={props.type || 'button'}>
      {children}
    </StyledButton>
  );
}

export default Button;
