export interface CustomButtonProps {
    title: string;
    style: "dark"|"light";
    handleClick?: () => void;
    containerStyles?: string;
    img?:string;
}