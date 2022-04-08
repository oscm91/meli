import React from 'react';
import { Breadcrumbs, BreadcrumbsProps, BreadcrumbsItem } from './index';

export default {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};

export const breadcrumbs = () => {
  const props: BreadcrumbsProps = {};

  return (
    <Breadcrumbs {...props}>
      <BreadcrumbsItem
        onClick={() => {
          console.log('1');
        }}
      >
        <p>Item 1</p>
      </BreadcrumbsItem>
      <BreadcrumbsItem
        onClick={() => {
          console.log('2');
        }}
      >
        <p>Item 2</p>
      </BreadcrumbsItem>
      <BreadcrumbsItem
        onClick={() => {
          console.log('3');
        }}
      >
        <p>Item 3</p>
      </BreadcrumbsItem>
      <BreadcrumbsItem
        data-active={true}
        onClick={() => {
          console.log('4');
        }}
      >
        <p>Item 4</p>
      </BreadcrumbsItem>
    </Breadcrumbs>
  );
};
