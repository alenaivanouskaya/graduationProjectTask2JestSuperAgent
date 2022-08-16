import superagent from "superagent";
import { EXPECTED_OBJ, QUERY_DATA } from "../fixtures/objectsData";
import { URL_POSTS } from "../fixtures/linksData";

describe("Test Suit #1. GET", () => {
    test("1. GET check (status)", async () => {
        const res = await superagent.get(URL_POSTS);
        expect(res.status).toBe(200);
    });
    test("2. GET check (object)", async () => {
        const res = await superagent.get(URL_POSTS).query(QUERY_DATA);
        expect(res.body).toEqual([EXPECTED_OBJ]);
    });
});
