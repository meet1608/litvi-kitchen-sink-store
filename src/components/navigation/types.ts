
export interface DropdownItem {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}
