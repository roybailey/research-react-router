"use client";

import { Button } from "~/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import {useState} from "react";
import {Link} from "react-router";
import DarkModeSwitcher from "~/components/layout/dark-mode-switcher";
import ClickOutside from "~/components/click-outside";
import {Logo} from "~/components/layout/logo";


// ----------------------------------------------------------------------

type NavigationItem = {
    title: string;
    subtitle?: string|undefined;
    href?: string|undefined;
    target?: string|undefined;
    description?: string|undefined;
    items?: NavigationItem[]; // Optional array of nested ThreeStringFields
};

const navigationItems:NavigationItem[] = [
    {
        title: "Products",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
        items: [
            {
                title: "Product 1",
                href: "/product/1",
            },
            {
                title: "Product 2",
                href: "/product/2",
            },
            {
                title: "Product 3",
                href: "/product/3",
            },
            {
                title: "Product 4",
                href: "/product/4",
            },
        ],
    },
];

// ----------------------------------------------------------------------

export const Header = () => {
    // const [isOpen, setOpen] = useState(false);

    return (
        <header className="w-full z-40 sticky top-0 left-0 bg-background shadow-primary dark:shadow-white shadow-b-2 mb-10 px-4">
            <div className="min-h-20 flex flex-row items-center justify-between">

                <div className="flex-shrink-0">
                    <Logo />
                </div>
                <div className="flex-1 flex items-center px-8 hidden lg:inline">
                    <HeaderMainMenu/>
                </div>
                <div className="flex-shrink-0 flex flex-row items-center justify-between gap-4 pl-4">
                    <HeaderRightMenu/>
                </div>

            </div>
        </header>
    );
};

// ----------------------------------------------------------------------

const HeaderMainMenu = () => {
    return (
        <>
            <NavigationMenu className="flex justify-start items-start">
                <NavigationMenuList className="flex justify-start gap-4 flex-row">
                    {navigationItems.map((item) => (
                        <NavigationMenuItem key={item.title}>
                            {item.href ? (
                                <>
                                    <NavigationMenuLink href={item.href} target={item.target || ''}>
                                        <Button variant="ghost"
                                                className="font-medium text-xl">{item.title}</Button>
                                    </NavigationMenuLink>
                                </>
                            ) : (
                                <>
                                    <NavigationMenuTrigger className="font-medium text-xl">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="w-[450px]! p-4 bg-background">
                                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                            <div className="flex flex-col h-full justify-between">
                                                <div className="flex flex-col">
                                                    <p className="text-base">{item.title}</p>
                                                    <p className="text-muted-foreground text-sm">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <Link to="/sign-in">
                                                    <Button size="sm" className="gap-4">
                                                        Sign In <MoveRight className="w-4 h-4"/>
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div className="flex flex-col text-sm h-full justify-end">
                                                {item.items?.map((subItem) => (
                                                    <NavigationMenuLink
                                                        href={subItem.href}
                                                        target={subItem.target}
                                                        key={subItem.title}
                                                        className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded text-xl"
                                                    >
                                                        <span>{subItem.title}</span>
                                                        <MoveRight
                                                            className="w-4 h-4 text-muted-foreground"/>
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
                    Sign In <MoveRight className="w-4 h-4"/>
                </Button>
            </Link>
        </div>
        <div className="border-r border-1 border-secondary-muted min-h-10"></div>
        <DarkModeSwitcher/>
        <div className="flex w-12 shrink items-end justify-end lg:hidden">
            <HeaderBurgerMenu/>
        </div>
    </>
    )

    // ----------------------------------------------------------------------

    const HeaderBurgerMenu = () => {
                                       const [isOpen, setOpen] = useState(false);

                                       return (
                                       <>
                                       <ClickOutside onClick={() => setOpen(false)}>
    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
        {isOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
    </Button>
    {isOpen && (
        <div
            className="absolute top-20 border-t flex flex-col w-full max-w-72 right-0 bg-background shadow-lg py-4 container p-4 gap-8">
            {navigationItems.map((item) => (
                <div key={item.title}>
                    <div className="flex flex-col gap-2">
                        {item.href ? (
                            <Link
                                to={item.href}
                                target={item.target}
                                className="flex justify-between items-center"
                            >
                                <span className="text-lg">{item.title}</span>
                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground"/>
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
                                    className="flex justify-between items-center"
                                >
                    <span className="text-muted-foreground">
                        {subItem.title}
                    </span>
                                    <MoveRight className="w-4 h-4 stroke-1"/>
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
