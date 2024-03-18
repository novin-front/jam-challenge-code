export interface PropsType {
    enthusiasmLevel?: number;
    defaultValue : string | number | undefined ;
    label : string | undefined;
    placeholder : string | undefined;  
    required: boolean | undefined;
    id: string | undefined;
    name : string | undefined;
    type : string | undefined;
    onChange?: any | undefined;
    onBlur?: any | undefined;
  }