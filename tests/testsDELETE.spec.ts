import superagent from "superagent";
import { URL_POSTS_100 } from "../fixtures/linksData";

describe("Test Suit #5. DELETE", () => {
    let res: any;
    beforeEach(async () => {
        res = await superagent.delete(URL_POSTS_100);
    });
    test("1. DELETE check (status)", async () => {
        expect(res.status).toBe(200);
    });
    test("2. DELETE check (title)", async () => {
        expect(res.body.title).toBe(undefined);
    });
});
