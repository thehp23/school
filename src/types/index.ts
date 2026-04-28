export type NavLink = {
  name: string;
  href?: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
};