import _ from "lodash";

export const paginate = (items, pageSize, page) => {
    const startIndex = ( page - 1 ) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
};