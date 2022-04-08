import React from 'react';

export interface BreadcrumbsProps {
  children?: React.ReactNode;
}

export function Breadcrumbs({ children }: BreadcrumbsProps) {
  const childrenCount = React.Children.count(children) - 1
  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return [React.cloneElement(child, {
        className: child.props['data-active']
          ? 'flex-1 bg-primary text-gray-600 text-md'
          : 'flex-1 bg-white text-gray-400 text-md text',
        'data-active': child.props['data-active'],
      }), index < childrenCount ? <span className="mx-5 text-gray-400 dark:text-gray-300">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd" />
      </svg>
    </span> : null];
    }
    return child;
  });

  return (
    <div className="flex items-center">
      {childrenWithProps}
    </div>
  );
}

export interface BreadcrumbsItemProps {
  children?: React.ReactElement;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export function BreadcrumbsItem({ children, ...props }: BreadcrumbsItemProps) {
  const Item = React.cloneElement(children, {
    className: props['data-active']
      ? 'text-gray-600'
      : 'text-gray-400 group-hover:text-gray-600',
  });
  return <span className="text-gray-600 dark:text-gray-200">{Item}</span>;
}

export default Breadcrumbs;
