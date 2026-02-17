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
import { ChevronRightIcon } from 'lucide-react';

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

export function NavigationMenuNested() {
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
              <li>
                <NavigationMenu
                  orientation='vertical'
                  className='min-w-0 items-stretch rounded-none bg-transparent p-0'
                >
                  <NavigationMenuItem render={<div />}>
                    <NavigationMenuTrigger className='relative block h-auto w-full bg-transparent p-3 text-left text-inherit'>
                      <span className='m-0 mb-1 text-base leading-5 font-medium'>
                        Handbook
                      </span>
                      <p className='m-0 text-sm leading-5 text-muted-foreground'>
                        How to use components effectively.
                      </p>
                      <NavigationMenuIcon className='absolute top-1/2 right-2.5 flex size-2.5 -translate-y-1/2 items-center justify-center'>
                        <ChevronRightIcon className='size-3' />
                      </NavigationMenuIcon>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
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

                  <NavigationMenuPositioner
                    side='right'
                    sideOffset={24}
                    alignOffset={-24}
                    align='end'
                  />
                </NavigationMenu>
              </li>
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
