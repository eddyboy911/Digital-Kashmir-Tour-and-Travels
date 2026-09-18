import { type HTMLAttributes } from 'react';
import clsx from 'clsx';

export function Container({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('container-x', className)} {...rest} />;
}
