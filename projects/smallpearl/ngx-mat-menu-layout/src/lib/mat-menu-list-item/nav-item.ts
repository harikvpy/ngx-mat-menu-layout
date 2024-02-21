export interface NavItem {
  text: string;
  disabled?: boolean;
  icon: string;
  iconType?: 'mat' | 'bi' | 'fa'; // mat - material, bi - bootstrap icon, fa - font awesome, defaults to 'mat', if not specified
  route?: string;
  children?: NavItem[];
  backButton?: boolean;
  backHref?: string;
}
