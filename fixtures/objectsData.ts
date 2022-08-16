export const QUERY_DATA: { id: number } = { id: 3 };

export const EXPECTED_OBJ: {
    userId: number;
    id: number;
    title: string;
    body: string;
} = {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
        "et iusto sed quo iure\n" +
        "voluptatem occaecati omnis eligendi aut ad\n" +
        "voluptatem doloribus vel accusantium quis pariatur\n" +
        "molestiae porro eius odio et labore et velit aut",
};

export const NEW_OBJ: {
    userId: number;
    id: number;
    title: string;
    body: string;
} = {
    userId: 11,
    id: 101,
    title: "TEST_TITLE",
    body: "TEST_BODY",
};

export const UPDATED_OBJ: {
    userId: number;
    id: number;
    title: string;
    body: string;
} = {
    userId: 10,
    id: 100,
    title: "TEST_TITLE",
    body:
        "cupiditate quo est a modi nesciunt soluta\n" +
        "ipsa voluptas error itaque dicta in\n" +
        "autem qui minus magnam et distinctio eum\n" +
        "accusamus ratione error aut",
};
