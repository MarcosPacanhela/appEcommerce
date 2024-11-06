export interface CardProductProps {
    name: string;
    description: string;
    price: string;
    image: string;
    onAddToCart?: (name: string, description: string, price: string, image: string) => void;
}
