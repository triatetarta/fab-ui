'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPositioner,
  NavigationMenuTrigger,
} from '@/registry/default/ui/navigation-menu';

const overviewLinks = [
  {
    href: '#',
    title: 'Quick Start',
    description: 'Install and assemble your first component.',
  },
  {
    href: '#',
    title: 'Accessibility',
    description: 'Learn how we build accessible components.',
  },
  {
    href: '#',
    title: 'Releases',
    description: "See what's new in the latest versions.",
  },
  {
    href: '#',
    title: 'About',
    description: 'Learn more about the project and our mission.',
  },
] as const;

const handbookLinks = [
  {
    href: '#',
    title: 'Styling',
    description:
      'Components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.',
  },
  {
    href: '#',
    title: 'Animation',
    description:
      'Components can be animated with CSS transitions, CSS animations, or JavaScript libraries.',
  },
  {
    href: '#',
    title: 'Composition',
    description:
      'Components can be replaced and composed with your own existing components.',
  },
] as const;

export function NavigationMenuDefault() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Overview <NavigationMenuIcon />
          </NavigationMenuTrigger>

          <NavigationMenuContent className='w-max min-w-100'>
            <ul className='grid list-none grid-cols-[12rem_12rem] gap-0'>
              {overviewLinks.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    <h3 className='m-0 mb-1 text-base leading-5 font-medium'>
                      {item.title}
                    </h3>
                    <p className='m-0 text-sm leading-5 text-muted-foreground'>
                      {item.description}
                    </p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Handbook <NavigationMenuIcon />
          </NavigationMenuTrigger>

          <NavigationMenuContent className='w-max min-w-100'>
            <ul className='flex max-w-100 flex-col justify-center'>
              {handbookLinks.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href={item.href}>
                    <h3 className='m-0 mb-1 text-base leading-5 font-medium'>
                      {item.title}
                    </h3>
                    <p className='m-0 text-sm leading-5 text-muted-foreground'>
                      {item.description}
                    </p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className='flex h-10 items-center justify-center rounded-md px-3.5 text-base font-medium hover:bg-accent'
            href='#'
          >
            GitHub
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPositioner />
    </NavigationMenu>
  );
}
