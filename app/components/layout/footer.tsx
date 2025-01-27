import {Link} from "react-router";

export const Footer = () => {
    const navigationItems = [
        {
            title: "Information",
            href: "",
            target: "",
            description: "Research Software Development",
            items: [
                {
                    title: "About us",
                    href: "https://roybailey.biz",
                    target: "_blank",
                },
            ],
        },
    ];

    return (
        <div className="w-full pt-10 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 gap-10 items-top justify-center">
                    <div className="flex gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                Roy Bailey
                            </h2>
                            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                Research Project
                            </p>
                        </div>
                        <div className="flex gap-20 flex-row">
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                <p>London</p>
                                <p>United Kingdom</p>
                            </div>
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left">
                                <Link to="/terms">Terms of service</Link>
                                <Link to="/privacy">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-10 items-start justify-end">
                        {navigationItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex text-base gap-1 flex-col items-start"
                            >
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            to={item.href}
                                            target={item.target}
                                            className="flex justify-between md:justify-end items-center"
                                        >
                                            <span className="text-xl">{item.title}</span>
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
                                                className="flex justify-between md:justify-end items-center"
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
    );
};
