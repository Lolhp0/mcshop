export interface CustomButtonProps {
    title: string;
    style: "dark"|"light";
    handleClick?: () => void;
    containerStyles?: string;
    img?:string;
}

export interface User {
    profile: {
        name: string;
        avatar: string;
        banner: string;
    },
    shop: [
        {
            item_name?: string;
            item_description?: string;
            item_type?: string;
            item_price?: number;
            item_quantity?: number;
            item_information?: {
                item_enchants?: string[];
                item_used?: boolean
            }
        }
    ]
}