enum Sort {
    latest,
    oldest,
}

exports.getSort = (sort: Sort) => {
    let sortBy;
    switch (sort) {
        case Sort.latest:
            sortBy = ['createdAt', 'DESC'];
            break;
        case Sort.oldest:
            sortBy = ['createdAt', 'ASC'];
        default:
            break;
    }
    return sortBy;
};
