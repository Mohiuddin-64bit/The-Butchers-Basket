export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Yum Market",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Categories",
      href: "/docs",
    },
    {
      label: "Products",
      href: "/meats",
    },
    {
      label: "Flash Sale",
      href: "/flash-sale",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Categories",
      href: "/docs",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "Flash Sale",
      href: "/blog",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/about",
    }
	],

};
