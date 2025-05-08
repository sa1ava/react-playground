
export type Color = {
    id: string;
    title: string;
    color: string;
    rating: number;
};

export type ColorContextType = {
    colors: Color[];
    // setColors: React.Dispatch<React.SetStateAction<Color[]>>;
    addColor: (title: string, color: string) => void;
    rateColor: (id: string, rating: number) => void;
    removeColor: (id: string) => void;
};
