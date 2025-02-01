import { Link } from 'react-router'

export const Footer = () => {
    const navigationItems = [
        {
            title: 'Information',
            href: '',
            target: '',
            description: 'Research Software Development',
            items: [
                {
                    title: 'About us',
                    href: 'https://roybailey.biz',
                    target: '_blank',
                },
            ],
        },
    ]

    return (
        <div className="w-full pt-10 pb-20">
            <div className="container mx-auto px-4">
                <div className="items-top grid justify-center gap-10 sm:grid-cols-2">
                    <div className="flex flex-col items-start gap-8">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                                Research React Router
                            </h2>
                            <p className="text-foreground/75 max-w-lg text-left text-lg leading-relaxed tracking-tight">
                                React Web Framework
                            </p>
                        </div>
                        <div className="flex flex-row gap-20">
                            <div className="text-foreground/75 flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight">
                                <p>London</p>
                                <p>United Kingdom</p>
                            </div>
                            <div className="text-foreground/75 flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight">
                                <Link to="/terms">Terms of service</Link>
                                <Link to="/privacy">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-end gap-10 md:flex-row">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col items-start gap-1 text-base"
                            >
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            to={item.href}
                                            target={item.target}
                                            className="flex items-center justify-between md:justify-end"
                                        >
                                            <span className="text-xl">
                                                {item.title}
                                            </span>
                                        </Link>
                                    ) : (
                                        <p className="text-xl">{item.title}</p>
                                    )}
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                to={subItem.href}
                                                target={subItem.target}
                                                className="flex items-center justify-between md:justify-end"
                                            >
                                                <span className="text-foreground/75">
                                                    {subItem.title}
                                                </span>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
