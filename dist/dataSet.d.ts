declare const recipe: {
    color: {
        value: number;
        unit: string;
    };
    author: {
        ref: string;
        sub: string;
        name: string;
        firstname: string;
    };
    batch_size: {
        value: number;
        unit: string;
    };
    ingredients: {
        hops: {
            id: number;
            aroma: string;
            brewingUsage: number;
            name: string;
            pedigree: string;
            alphaMax: number;
            alphaMin: number;
            betaMax: number;
            betaMin: number;
            coHumuloneMax: number;
            coHumuloneMin: number;
            info: string;
            styles: string;
            totalOilMax: number;
            totalOilMin: number;
            trade: string;
            amount: {
                value: number;
                unit: string;
            };
            alpha: string;
            form: string;
            use: string;
            time: string;
            tableData: {
                id: number;
            };
        }[];
        fermentables: ({
            color: {
                value: number;
                unit: string;
            };
            author: {
                ref: string;
                sub: string;
                name: string;
                firstname: string;
            };
            _id: string;
            name: string;
            yield: number;
            origin: string;
            type: string;
            __v: number;
            isValid: boolean;
            maxInBatch: number;
            moisture: string;
            notes: string;
            protein: string;
            specificaton: string;
            supplier: string;
            updatedAt: string;
            amount: {
                value: number;
                unit: string;
            };
            tableData: {
                id: number;
            };
            version?: undefined;
            createdAt?: undefined;
            diastaticPower?: undefined;
        } | {
            amount: {
                value: number;
                unit: string;
            };
            name: string;
            yield: string;
            color: {
                value: number;
                unit: string;
            };
            origin: string;
            type: string;
            _id: null;
            tableData: {
                id: number;
            };
            author?: undefined;
            __v?: undefined;
            isValid?: undefined;
            maxInBatch?: undefined;
            moisture?: undefined;
            notes?: undefined;
            protein?: undefined;
            specificaton?: undefined;
            supplier?: undefined;
            updatedAt?: undefined;
            version?: undefined;
            createdAt?: undefined;
            diastaticPower?: undefined;
        } | {
            color: {
                value: number;
                unit: string;
            };
            _id: string;
            version: string;
            name: string;
            createdAt: string;
            updatedAt: string;
            __v: number;
            specificaton: string;
            diastaticPower: number;
            isValid: boolean;
            maxInBatch: number;
            moisture: string;
            origin: string;
            protein: string;
            supplier: string;
            type: string;
            yield: number;
            amount: {
                value: number;
                unit: string;
            };
            tableData: {
                id: number;
            };
            author?: undefined;
            notes?: undefined;
        } | {
            color: null;
            author: null;
            _id: string;
            type: string;
            name: string;
            yield: number;
            version: string;
            isValid: boolean;
            createdAt: string;
            updatedAt: string;
            __v: number;
            amount: {
                value: number;
                unit: string;
            };
            tableData: {
                id: number;
            };
            origin?: undefined;
            maxInBatch?: undefined;
            moisture?: undefined;
            notes?: undefined;
            protein?: undefined;
            specificaton?: undefined;
            supplier?: undefined;
            diastaticPower?: undefined;
        })[];
        yeasts: {
            _id: string;
            type: string;
            flocculation: string;
            form: string;
            minTemp: {
                value: number;
                unit: string;
            };
            maxTemp: {
                value: number;
                unit: string;
            };
            name: string;
            productID: string;
            laboratory: string;
            attenuation: string;
            createdAt: string;
            updatedAt: string;
            __v: number;
            isValid: boolean;
            specification: string;
            amount: {
                value: number;
                unit: string;
            };
            from: string;
            tableData: {
                id: number;
            };
        }[];
        miscs: never[];
    };
    mash: {
        mash_steps: never[];
    };
    waters: never[];
    food_pairing: never[];
    _id: string;
    created_at: string;
    updated_at: string;
    isValid: boolean;
    isPublic: boolean;
    name: string;
    proGroups: never[];
    fermentation_steps: never[];
    __v: number;
    abv: number;
    attenuation_level: string;
    efficiency: number;
    fg: number;
    ibu: number;
    notes: string;
    og: number;
    style: {
        abv_max: string;
        abv_min: string;
        og_min: string;
        og_max: string;
        fg_min: string;
        fg_max: string;
        ibu_min: string;
        ibu_max: string;
        color_min: string;
        color_max: string;
        category_number: string;
        style_guide: string;
        name: string;
        version: string;
    };
    type: string;
};
export default recipe;
