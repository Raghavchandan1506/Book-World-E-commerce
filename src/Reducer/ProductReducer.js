const ProductReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            };

        case "MY_API_DATA":
            const featureData = action.payload.filter((currElem) => currElem.featured === true);

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            };



        case "ERROR_API":
            return {
                ...state,
                isLoading: false,
                isError: true
            };


        case "MY_ALL_API_DATA":
            const featureAllData = action.payload.filter((currElem) => {
                return currElem;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureAllData
            }

        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true
            };

        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true
            };


        default:
            return state;
    }

};

export default ProductReducer;