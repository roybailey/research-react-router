'use client'

import { Button } from '~/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '~/components/ui/navigation-menu'
import { Menu, MoveRight, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import DarkModeSwitcher from '~/components/layout/dark-mode-switcher'
import ClickOutside from '~/components/click-outside'
import { Logo } from '~/components/layout/logo'

// ----------------------------------------------------------------------

type NavigationItem = {
    title: string
    subtitle?: string | undefined
    href?: string | undefined
    target?: string | undefined
    description?: string | undefined
    items?: NavigationItem[] // Optional array of nested ThreeStringFields
}

const navigationItems: NavigationItem[] = [
    {
        title: 'Products',
        description: 'Lorem ipsum odor amet, consectetuer adipiscing elit.',
        items: [
            {
                title: 'Product 1',
                href: '/product/1',
            },
            {
                title: 'Product 2',
                href: '/product/2',
            },
            {
                title: 'Product 3',
                href: '/product/3',
            },
            {
                title: 'Product 4',
                href: '/product/4',
            },
        ],
    },
]

// ----------------------------------------------------------------------

export const Header = () => {
    // const [isOpen, setOpen] = useState(false);

    return (
        <header className="bg-background shadow-primary shadow-b-2 sticky top-0 left-0 z-40 mb-10 w-full px-4 dark:shadow-white">
            <div className="flex min-h-20 flex-row items-center justify-between">
                <div className="flex-shrink-0">
                    <Logo />
                </div>
                <div className="flex hidden flex-1 items-center px-8 lg:inline">
                    <HeaderMainMenu />
                </div>
                <div className="flex flex-shrink-0 flex-row items-center justify-between gap-4 pl-4">
                    <HeaderRightMenu />
                </div>
            </div>
        </header>
    )
}

// ----------------------------------------------------------------------

const HeaderMainMenu = () => {
    return (
        <>
            <NavigationMenu className="flex items-start justify-start">
                <NavigationMenuList className="flex flex-row justify-start gap-4">
                    {navigationItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            {item.href ? (
                                <>
                                    <NavigationMenuLink
                                        href={item.href}
                                        target={item.target || ''}
                                    >
                                        <Button
                                            variant="ghost"
                                            className="text-xl font-medium"
                                        >
                                            {item.title}
                                        </Button>
                                    </NavigationMenuLink>
                                </>
                            ) : (
                                <>
                                    <NavigationMenuTrigger className="text-xl font-medium">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-background w-[450px]! p-4">
                                        <div className="flex grid-cols-2 flex-col gap-4 lg:grid">
                                            <div className="flex h-full flex-col justify-between">
                                                <div className="flex flex-col">
                                                    <p className="text-base">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-muted-foreground text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <Link to="/sign-in">
                                                    <Button
                                                        size="sm"
                                                        className="gap-4"
                                                    >
                                                        Sign In{' '}
                                                        <MoveRight className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div className="flex h-full flex-col justify-end text-sm">
                                                {item.items?.map((subItem) => (
                                                    <NavigationMenuLink
                                                        href={subItem.href}
                                                        target={subItem.target}
                                                        key={subItem.title}
                                                        className="hover:bg-muted flex flex-row items-center justify-between rounded px-4 py-2 text-xl"
                                                    >
                                                        <span>
                                                            {subItem.title}
                                                        </span>
                                                        <MoveRight className="text-muted-foreground h-4 w-4" />
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}

// ----------------------------------------------------------------------

const HeaderRightMenu = () => (
    <>
        <div className="hidden md:inline">
            <Link to="/sign-in">
                <Button className="gap-4">
                    Sign In <MoveRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
        <div className="border-secondary-muted min-h-10 border-1 border-r"></div>
        <DarkModeSwitcher />
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
            <HeaderBurgerMenu />
        </div>
    </>
)

// ----------------------------------------------------------------------

const HeaderBurgerMenu = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <ClickOutside onClick={() => setOpen(false)}>
                <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                    {isOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </Button>
                {isOpen && (
                    <div className="bg-background absolute top-20 right-0 container flex w-full max-w-72 flex-col gap-8 border-t p-4 py-4 shadow-lg">
                        {navigationItems.map((item) => (
                            <div key={item.title}>
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            to={item.href}
                                            target={item.target}
                                            className="flex items-center justify-between"
                                        >
                                            <span className="text-lg">
                                                {item.title}
                                            </span>
                                            <MoveRight className="text-muted-foreground h-4 w-4 stroke-1" />
                                        </Link>
                                    ) : (
                                        <p className="text-lg">{item.title}</p>
                                    )}
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                to={subItem.href || '#'}
                                                target={subItem.target}
                                                className="flex items-center justify-between"
                                            >
                                                <span className="text-muted-foreground">
                                                    {subItem.title}
                                                </span>
                                                <MoveRight className="h-4 w-4 stroke-1" />
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ClickOutside>
        </>
    )
}
