---
title: Navigation Menu
subtitle: A collection of links and menus for website navigation.
description: A high-quality, unstyled React navigation menu component that displays a collection of links and menus for website navigation.
---

# Navigation Menu

A high-quality, unstyled React navigation menu component that displays a collection of links and menus for website navigation.

## Anatomy

Import the component and assemble its parts:

```jsx title="Anatomy"
import { NavigationMenu } from '@base-ui/react/navigation-menu';

<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>
        <NavigationMenu.Icon />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <NavigationMenu.Link />
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  </NavigationMenu.List>

  <NavigationMenu.Portal>
    <NavigationMenu.Backdrop />
    <NavigationMenu.Positioner>
      <NavigationMenu.Popup>
        <NavigationMenu.Arrow />
        <NavigationMenu.Viewport />
      </NavigationMenu.Popup>
    </NavigationMenu.Positioner>
  </NavigationMenu.Portal>
</NavigationMenu.Root>;
```

## Examples

### Nested submenus

`<NavigationMenu.Root>` component can be nested within a higher-level `<NavigationMenu.Content>` part to create a multi-level navigation menu.

## Demo

### Tailwind

This example shows how to implement the component using Tailwind CSS.

```tsx
/* index.tsx */
import * as React from 'react';
import { NavigationMenu } from '@base-ui/react/navigation-menu';

export default function ExampleNavigationMenu() {
  return (
    <NavigationMenu.Root className="min-w-max rounded-lg bg-gray-50 p-1 text-gray-900">
      <NavigationMenu.List className="relative flex">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerClassName}>
            Overview
            <NavigationMenu.Icon className="transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
              <ChevronDownIcon />
            </NavigationMenu.Icon>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className={contentClassName}>
            <ul className="grid list-none grid-cols-1 gap-0 sm:grid-cols-[12rem_12rem]">
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkCardClassName}>
                    <h3 className="m-0 mb-1 text-base leading-5 font-medium">{item.title}</h3>
                    <p className="m-0 text-sm leading-5 text-gray-500">{item.description}</p>
                  </Link>
                </li>
              ))}
              <li>
                <NavigationMenu.Root orientation="vertical">
                  <NavigationMenu.Item>
                    <NavigationMenu.Trigger className={linkCardClassName}>
                      <span className="m-0 mb-1 text-base leading-5 font-medium">Handbook</span>
                      <p className="m-0 text-sm leading-5 text-gray-500">
                        How to use Base UI effectively.
                      </p>
                      <NavigationMenu.Icon className="absolute top-1/2 right-2.5 flex h-2.5 w-2.5 -translate-y-1/2 items-center justify-center transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180">
                        <ChevronRightIcon />
                      </NavigationMenu.Icon>
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className={contentClassName}>
                      <ul className="flex max-w-[400px] flex-col justify-center">
                        {handbookLinks.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className={linkCardClassName}>
                              <h3 className="m-0 mb-1 text-base leading-5 font-medium">
                                {item.title}
                              </h3>
                              <p className="m-0 text-sm leading-5 text-gray-500">
                                {item.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>

                  <NavigationMenu.Portal>
                    <NavigationMenu.Positioner
                      sideOffset={24}
                      alignOffset={-24}
                      align="end"
                      side="right"
                      className="box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5"
                      style={{
                        ['--duration' as string]: '0.35s',
                        ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      <NavigationMenu.Popup className="data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] w-[300px] origin-[var(--transform-origin)] rounded-lg bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 min-[500px]:w-[var(--popup-width)] dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                        <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
                      </NavigationMenu.Popup>
                    </NavigationMenu.Positioner>
                  </NavigationMenu.Portal>
                </NavigationMenu.Root>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          className="box-border h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-[instant]:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5"
          style={{
            ['--duration' as string]: '0.35s',
            ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <NavigationMenu.Popup className="data-[ending-style]:easing-[ease] relative h-[var(--popup-height)] origin-[var(--transform-origin)] rounded-lg bg-[canvas] text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[opacity,transform,width,height,scale,translate] duration-[var(--duration)] ease-[var(--easing)] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 w-[var(--popup-width)] dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <NavigationMenu.Arrow className="flex transition-[left] duration-[var(--duration)] ease-[var(--easing)] data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              <ArrowSvg />
            </NavigationMenu.Arrow>
            <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}

function Link(props: NavigationMenu.Link.Props) {
  return (
    <NavigationMenu.Link
      render={
        // Use the `render` prop to render your framework's Link component
        // for client-side routing.
        // e.g. `<NextLink href={props.href} />` instead of `<a />`.
        <a />
      }
      {...props}
    />
  );
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
      <path d="M3.5 1L7.5 5L3.5 9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-[canvas]"
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className="fill-gray-200 dark:fill-none"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="dark:fill-gray-300"
      />
    </svg>
  );
}

const triggerClassName =
  'box-border flex items-center justify-center gap-1.5 h-10 ' +
  'px-2 sm:px-3.5 m-0 rounded-md bg-gray-50 text-gray-900 font-medium ' +
  'text-[0.925rem] sm:text-base leading-6 select-none no-underline ' +
  'hover:bg-gray-100 active:bg-gray-100 data-[popup-open]:bg-gray-100 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 focus-visible:relative';

const contentClassName =
  'w-[calc(100vw_-_40px)] h-full p-6 min-[32rem]:w-max min-[32rem]:min-w-[400px] min-[32rem]:w-max ' +
  'transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] ' +
  'data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 ' +
  'data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%] ' +
  'data-[starting-style]:data-[activation-direction=right]:translate-x-[50%] ' +
  'data-[ending-style]:data-[activation-direction=left]:translate-x-[50%] ' +
  'data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]';

const linkCardClassName =
  'w-full text-left relative block rounded-md p-2 sm:p-3 no-underline text-inherit ' +
  'hover:bg-gray-100 focus-visible:relative focus-visible:outline focus-visible:outline-2 ' +
  'focus-visible:-outline-offset-1 focus-visible:outline-blue-800 ' +
  'data-[popup-open]:bg-gray-100';

const overviewLinks = [
  {
    href: '/react/overview/quick-start',
    title: 'Quick Start',
    description: 'Install and assemble your first component.',
  },
  {
    href: '/react/overview/accessibility',
    title: 'Accessibility',
    description: 'Learn how we build accessible components.',
  },
  {
    href: '/react/overview/releases',
    title: 'Releases',
    description: 'See what’s new in the latest Base UI versions.',
  },
] as const;

const handbookLinks = [
  {
    href: '/react/handbook/styling',
    title: 'Styling',
    description:
      'Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.',
  },
  {
    href: '/react/handbook/animation',
    title: 'Animation',
    description:
      'Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.',
  },
  {
    href: '/react/handbook/composition',
    title: 'Composition',
    description:
      'Base UI components can be replaced and composed with your own existing components.',
  },
] as const;
```

### Custom links

The `<NavigationMenu.Link>` part can be customized to render the link from your framework using the `render` prop to enable client-side routing.

```jsx title="Next.js example" {1,7}
import NextLink from 'next/link';
import { NavigationMenu } from '@base-ui/react/navigation-menu';

function Link(props: NavigationMenu.Link.Props) {
  return (
    <NavigationMenu.Link
      render={<NextLink href={props.href} />}
      {...props}
    />
  );
}
```

### Large menus

When you have large menu content that doesn't fit in the viewport in some cases, you usually have two choices:

1. Compress the navigation menu content

You can change the layout of the navigation menu to render less content or be more compact by reducing the space it takes up.
If your content is flexible, you can use the `max-height` property on `.Popup` to limit the height of the navigation menu to let it compress itself while preventing overflow.

```css title="Compact layout"
.Content,
.Popup {
  max-height: var(--available-height);
}
```

2. Make the navigation menu scrollable

```css title="Scrollable layout"
.Content,
.Popup {
  max-height: var(--available-height);
}

.Content {
  overflow-y: auto;
}
```

Native scrollbars are visible while transitioning content, so we recommend using the [Scroll Area](/react/components/scroll-area.md) component instead of native scrollbars to keep them hidden, which also allows the `Arrow` to be centered correctly.

## API reference

### Root

Groups all parts of the navigation menu.
Renders a `<nav>` element at the root, or `<div>` element when nested.

**Root Props:**

| Prop                 | Type                                                                                     | Default        | Description                                                                                                                                                                                                                                        |
| :------------------- | :--------------------------------------------------------------------------------------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultValue         | `any`                                                                                    | `null`         | The uncontrolled value of the item that should be initially selected.To render a controlled navigation menu, use the `value` prop instead.                                                                                                         |
| value                | `any`                                                                                    | `null`         | The controlled value of the navigation menu item that should be currently open.&#xA;When non-nullish, the menu will be open. When nullish, the menu will be closed.To render an uncontrolled navigation menu, use the `defaultValue` prop instead. |
| onValueChange        | `((value: any, eventDetails: NavigationMenu.Root.ChangeEventDetails) => void)`           | -              | Callback fired when the value changes.                                                                                                                                                                                                             |
| actionsRef           | `RefObject<NavigationMenu.Root.Actions \| null>`                                         | -              | A ref to imperative actions.                                                                                                                                                                                                                       |
| onOpenChangeComplete | `((open: boolean) => void)`                                                              | -              | Event handler called after any animations complete when the navigation menu is closed.                                                                                                                                                             |
| delay                | `number`                                                                                 | `50`           | How long to wait before opening the navigation menu. Specified in milliseconds.                                                                                                                                                                    |
| closeDelay           | `number`                                                                                 | `50`           | How long to wait before closing the navigation menu. Specified in milliseconds.                                                                                                                                                                    |
| orientation          | `'horizontal' \| 'vertical'`                                                             | `'horizontal'` | The orientation of the navigation menu.                                                                                                                                                                                                            |
| className            | `string \| ((state: NavigationMenu.Root.State) => string \| undefined)`                  | -              | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                                                                           |
| style                | `CSSProperties \| ((state: NavigationMenu.Root.State) => CSSProperties \| undefined)`    | -              | -                                                                                                                                                                                                                                                  |
| render               | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Root.State) => ReactElement)` | -              | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render.                                                       |

### List

Contains a list of navigation menu items.
Renders a `<ul>` element.

**List Props:**

| Prop      | Type                                                                                     | Default | Description                                                                                                                                                                                  |
| :-------- | :--------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: NavigationMenu.List.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: NavigationMenu.List.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.List.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Item

An individual navigation menu item.
Renders a `<li>` element.

**Item Props:**

| Prop      | Type                                                                                     | Default | Description                                                                                                                                                                                        |
| :-------- | :--------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value     | `any`                                                                                    | -       | A unique value that identifies this navigation menu item.&#xA;If no value is provided, a unique ID will be generated automatically.&#xA;Use when controlling the navigation menu programmatically. |
| className | `string \| ((state: NavigationMenu.Item.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                           |
| style     | `CSSProperties \| ((state: NavigationMenu.Item.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                                  |
| render    | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Item.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render.       |

### Trigger

Opens the navigation menu popup when hovered or clicked, revealing the
associated content.
Renders a `<button>` element.

**Trigger Props:**

| Prop         | Type                                                                                        | Default | Description                                                                                                                                                                                  |
| :----------- | :------------------------------------------------------------------------------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nativeButton | `boolean`                                                                                   | `true`  | Whether the component renders a native `<button>` element when replacing it&#xA;via the `render` prop.&#xA;Set to `false` if the rendered element is not a button (e.g. `<div>`).            |
| className    | `string \| ((state: NavigationMenu.Trigger.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style        | `CSSProperties \| ((state: NavigationMenu.Trigger.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render       | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Trigger.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Trigger Data Attributes:**

| Attribute       | Type | Description                                             |
| :-------------- | :--- | :------------------------------------------------------ |
| data-popup-open | -    | Present when the corresponding navigation menu is open. |
| data-pressed    | -    | Present when the trigger is pressed.                    |

### Icon

An icon that indicates that the trigger button opens a menu.

**Icon Props:**

| Prop      | Type                                                                                     | Default | Description                                                                                                                                                                                  |
| :-------- | :--------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: NavigationMenu.Icon.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: NavigationMenu.Icon.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Icon.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Content

A container for the content of the navigation menu item that is moved into the popup
when the item is active.
Renders a `<div>` element.

**Content Props:**

| Prop        | Type                                                                                        | Default | Description                                                                                                                                                                                  |
| :---------- | :------------------------------------------------------------------------------------------ | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className   | `string \| ((state: NavigationMenu.Content.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: NavigationMenu.Content.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| keepMounted | `boolean`                                                                                   | `false` | Whether to keep the content mounted in the DOM while the popup is closed.&#xA;Ensures the content is present during server-side rendering for web crawlers.                                  |
| render      | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Content.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Content Data Attributes:**

| Attribute                 | Type | Description                                         |
| :------------------------ | :--- | :-------------------------------------------------- |
| data-open                 | -    | Present when the popup is open.                     |
| data-closed               | -    | Present when the popup is closed.                   |
| data-activation-direction | -    | Which direction another trigger was activated from. |
| data-starting-style       | -    | Present when the content is animating in.           |
| data-ending-style         | -    | Present when the content is animating out.          |

### Link

A link in the navigation menu that can be used to navigate to a different page or section.
Renders an `<a>` element.

**Link Props:**

| Prop         | Type                                                                                     | Default | Description                                                                                                                                                                                  |
| :----------- | :--------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| closeOnClick | `boolean`                                                                                | `false` | Whether to close the navigation menu when the link is clicked.                                                                                                                               |
| active       | `boolean`                                                                                | `false` | Whether the link is the currently active page.                                                                                                                                               |
| className    | `string \| ((state: NavigationMenu.Link.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style        | `CSSProperties \| ((state: NavigationMenu.Link.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render       | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Link.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Link Data Attributes:**

| Attribute   | Type | Description                                         |
| :---------- | :--- | :-------------------------------------------------- |
| data-active | -    | Present when the link is the currently active page. |

### Backdrop

A backdrop for the navigation menu popup.
Renders a `<div>` element.

**Backdrop Props:**

| Prop      | Type                                                                                         | Default | Description                                                                                                                                                                                  |
| :-------- | :------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: NavigationMenu.Backdrop.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: NavigationMenu.Backdrop.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Backdrop.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Backdrop Data Attributes:**

| Attribute           | Type | Description                              |
| :------------------ | :--- | :--------------------------------------- |
| data-open           | -    | Present when the popup is open.          |
| data-closed         | -    | Present when the popup is closed.        |
| data-starting-style | -    | Present when the popup is animating in.  |
| data-ending-style   | -    | Present when the popup is animating out. |

### Portal

A portal element that moves the popup to a different part of the DOM.
By default, the portal element is appended to `<body>`.
Renders a `<div>` element.

**Portal Props:**

| Prop        | Type                                                                                       | Default | Description                                                                                                                                                                                  |
| :---------- | :----------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| container   | `HTMLElement \| ShadowRoot \| RefObject<HTMLElement \| ShadowRoot \| null> \| null`        | -       | A parent element to render the portal element into.                                                                                                                                          |
| className   | `string \| ((state: NavigationMenu.Portal.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style       | `CSSProperties \| ((state: NavigationMenu.Portal.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| keepMounted | `boolean`                                                                                  | `false` | Whether to keep the portal mounted in the DOM while the popup is hidden.                                                                                                                     |
| render      | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Portal.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Positioner

Positions the navigation menu against the currently active trigger.
Renders a `<div>` element.

**Positioner Props:**

| Prop                  | Type                       | Default    | Description                                                                                                                                                                                                                                                                                                                                                                           |
| :-------------------- | :------------------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| disableAnchorTracking | `boolean`                  | `false`    | Whether to disable the popup from tracking any layout shift of its positioning anchor.                                                                                                                                                                                                                                                                                                |
| align                 | `Align`                    | `'center'` | How to align the popup relative to the specified side.                                                                                                                                                                                                                                                                                                                                |
| alignOffset           | `number \| OffsetFunction` | `0`        | Additional offset along the alignment axis in pixels.&#xA;Also accepts a function that returns the offset to read the dimensions of the anchor&#xA;and positioner elements, along with its side and alignment.The function takes a `data` object parameter with the following properties:\* `data.anchor`: the dimensions of the anchor element with properties `width` and `height`. |

- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
- `data.side`: which side of the anchor element the positioner is aligned against.
- `data.align`: how the positioner is aligned relative to the specified side. |
  | side | `Side` | `'bottom'` | Which side of the anchor element to align the popup against.&#xA;May automatically change to avoid collisions. |
  | sideOffset | `number \| OffsetFunction` | `0` | Distance between the anchor and the popup in pixels.&#xA;Also accepts a function that returns the distance to read the dimensions of the anchor&#xA;and positioner elements, along with its side and alignment.The function takes a `data` object parameter with the following properties:\* `data.anchor`: the dimensions of the anchor element with properties `width` and `height`.
- `data.positioner`: the dimensions of the positioner element with properties `width` and `height`.
- `data.side`: which side of the anchor element the positioner is aligned against.
- `data.align`: how the positioner is aligned relative to the specified side. |
  | arrowPadding | `number` | `5` | Minimum distance to maintain between the arrow and the edges of the popup.Use it to prevent the arrow element from hanging out of the rounded corners of a popup. |
  | anchor | `Element \| VirtualElement \| RefObject<Element \| null> \| (() => Element \| VirtualElement \| null) \| null` | - | An element to position the popup against.&#xA;By default, the popup will be positioned against the trigger. |
  | collisionAvoidance | `CollisionAvoidance` | - | Determines how to handle collisions when positioning the popup. |
  | collisionBoundary | `Boundary` | `'clipping-ancestors'` | An element or a rectangle that delimits the area that the popup is confined to. |
  | collisionPadding | `Padding` | `5` | Additional space to maintain from the edge of the collision boundary. |
  | sticky | `boolean` | `false` | Whether to maintain the popup in the viewport after&#xA;the anchor element was scrolled out of view. |
  | positionMethod | `'absolute' \| 'fixed'` | `'absolute'` | Determines which CSS `position` property to use. |
  | className | `string \| ((state: NavigationMenu.Positioner.State) => string \| undefined)` | - | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state. |
  | style | `CSSProperties \| ((state: NavigationMenu.Positioner.State) => CSSProperties \| undefined)` | - | - |
  | render | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Positioner.State) => ReactElement)` | - | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Positioner Data Attributes:**

| Attribute          | Type                                                                       | Description                                                           |
| :----------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| data-open          | -                                                                          | Present when the popup is open.                                       |
| data-closed        | -                                                                          | Present when the popup is closed.                                     |
| data-anchor-hidden | -                                                                          | Present when the anchor is hidden.                                    |
| data-align         | `'start' \| 'center' \| 'end'`                                             | Indicates how the popup is aligned relative to the specified side.    |
| data-instant       | -                                                                          | Present if animations should be instant.                              |
| data-side          | `'top' \| 'bottom' \| 'left' \| 'right' \| 'inline-end' \| 'inline-start'` | Indicates which side the popup is positioned relative to the trigger. |

**Positioner CSS Variables:**

| Variable            | Type     | Default | Description                                                                            |
| :------------------ | :------- | :------ | :------------------------------------------------------------------------------------- |
| --anchor-height     | `number` | -       | The anchor's height.                                                                   |
| --anchor-width      | `number` | -       | The anchor's width.                                                                    |
| --available-height  | `number` | -       | The available height between the trigger and the edge of the viewport.                 |
| --available-width   | `number` | -       | The available width between the trigger and the edge of the viewport.                  |
| --positioner-height | `number` | -       | The fixed height of the positioner element.                                            |
| --positioner-width  | `number` | -       | The fixed width of the positioner element.                                             |
| --transform-origin  | `string` | -       | The coordinates that this element is anchored to. Used for animations and transitions. |

### Popup

A container for the navigation menu contents.
Renders a `<nav>` element.

**Popup Props:**

| Prop      | Type                                                                                      | Default | Description                                                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: NavigationMenu.Popup.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: NavigationMenu.Popup.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Popup.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Popup Data Attributes:**

| Attribute           | Type                                                                       | Description                                                           |
| :------------------ | :------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| data-open           | -                                                                          | Present when the popup is open.                                       |
| data-closed         | -                                                                          | Present when the popup is closed.                                     |
| data-align          | `'start' \| 'center' \| 'end'`                                             | Indicates how the popup is aligned relative to the specified side.    |
| data-side           | `'top' \| 'bottom' \| 'left' \| 'right' \| 'inline-end' \| 'inline-start'` | Indicates which side the popup is positioned relative to the trigger. |
| data-starting-style | -                                                                          | Present when the popup is animating in.                               |
| data-ending-style   | -                                                                          | Present when the popup is animating out.                              |

**Popup CSS Variables:**

| Variable       | Type     | Default | Description                            |
| :------------- | :------- | :------ | :------------------------------------- |
| --popup-height | `number` | -       | The fixed height of the popup element. |
| --popup-width  | `number` | -       | The fixed width of the popup element.  |

### Viewport

The clipping viewport of the navigation menu's current content.
Renders a `<div>` element.

**Viewport Props:**

| Prop      | Type                                                                                         | Default | Description                                                                                                                                                                                  |
| :-------- | :------------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: NavigationMenu.Viewport.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: NavigationMenu.Viewport.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Viewport.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

### Arrow

Displays an element pointing toward the navigation menu's current anchor.
Renders a `<div>` element.

**Arrow Props:**

| Prop      | Type                                                                                      | Default | Description                                                                                                                                                                                  |
| :-------- | :---------------------------------------------------------------------------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className | `string \| ((state: NavigationMenu.Arrow.State) => string \| undefined)`                  | -       | CSS class applied to the element, or a function that&#xA;returns a class based on the component’s state.                                                                                     |
| style     | `CSSProperties \| ((state: NavigationMenu.Arrow.State) => CSSProperties \| undefined)`    | -       | -                                                                                                                                                                                            |
| render    | `ReactElement \| ((props: HTMLProps, state: NavigationMenu.Arrow.State) => ReactElement)` | -       | Allows you to replace the component’s HTML element&#xA;with a different tag, or compose it with another component.Accepts a `ReactElement` or a function that returns the element to render. |

**Arrow Data Attributes:**

| Attribute       | Type                                                                       | Description                                                           |
| :-------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| data-open       | -                                                                          | Present when the popup is open.                                       |
| data-closed     | -                                                                          | Present when the popup is closed.                                     |
| data-uncentered | -                                                                          | Present when the popup arrow is uncentered.                           |
| data-align      | `'start' \| 'center' \| 'end'`                                             | Indicates how the popup is aligned relative to specified side.        |
| data-side       | `'top' \| 'bottom' \| 'left' \| 'right' \| 'inline-end' \| 'inline-start'` | Indicates which side the popup is positioned relative to the trigger. |
