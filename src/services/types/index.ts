
export interface routeTypes {
    type: string;
    name: string;
    key: string;
    role: string;
    showToMenu: boolean;
    route: string;
    icon: JSX.Element;
    component: JSX.Element;
  }

  export interface Option {
  value: string;
  label: string;
}

export interface MultipleSelectPlaceholderProps {
  label: string;
  placeholder: string;
  required?: boolean;
  items: Option[];
  name: string;
  id: string;
  size: "small" | "medium" | "large";
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}