import superagent from "superagent";
import { UPDATED_OBJ } from "../fixtures/objectsData";
import { URL_POSTS_100 } from "../fixtures/linksData";

describe("Test Suit #3. PUT", () => {
    let res: any;
    beforeEach(async () => {
        res = await superagent.put(URL_POSTS_100).set("Content-Type", "application/json").send(UPDATED_OBJ);
    });
    test("1. PUT check (status)", async () => {
        expect(res.statusCode).toEqual(200);
    });
    test("2. PUT check (title)", async () => {
        expect(res.body.title).toEqual(UPDATED_OBJ.title);
    });
});
