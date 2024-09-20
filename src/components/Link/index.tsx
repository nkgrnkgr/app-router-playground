import NextLink from "next/link";
import type { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  href: string;
} & HTMLAttributes<HTMLAnchorElement>;

export function Link({ children, href, ...rest }: Props) {
  return (
    <NextLink
      {...rest}
      className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline transition duration-300"
      href={href}
    >
      {children}
    </NextLink>
  );
}
