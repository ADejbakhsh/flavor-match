export interface recette_t {
    id: number;
    name: string;
    img_url: string;
    time: number;
    price: number;
    equipement: string[];
    recipe: string[];
    hastag: string[];
}
