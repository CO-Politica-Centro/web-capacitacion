import type { ComponentPropsWithoutRef } from "react";

function isExternalHref(href?: string | null) {
  return Boolean(href && /^https?:\/\//i.test(href));
}

type MarkdownLinkProps = ComponentPropsWithoutRef<"a"> & {
  node?: unknown;
};

/** Safe anchor for react-markdown: external links open in a new tab. */
export function MarkdownLink({
  href,
  children,
  node: _node,
  ...rest
}: MarkdownLinkProps) {
  void _node;
  const external = isExternalHref(href);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (se abre en una pestaña nueva)</span>
      </a>
    );
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
