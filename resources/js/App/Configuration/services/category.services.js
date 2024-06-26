import axios from "axios";
export const _loadItems = async (data) => {
    try {
        let response = await axios.post("/configuracion/categorias/lista", data);
        // return response.data;
        return {
            loading: false,
            headers: response.data.headers,
            items: response.data.items.data,
            totalItems: response.data.items.total,
            itemsPerPage: response.data.items.per_page,
            filters: {
                search: response.data.filters.search,
                sortBy: response.data.filters.sortBy,
                perPage: response.data.filters.perPage,
            },
        };
    } catch (error) {
        return false;
    }
};

export const _createCategory = async (data) => {
    try {
        let response = await axios.post("/configuracion/categorias", data);
        return response.data;
    } catch (error) {
        return false;
    }
}
