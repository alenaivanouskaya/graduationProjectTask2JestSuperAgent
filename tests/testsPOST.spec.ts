import superagent from "superagent";
import { NEW_OBJ } from "../fixtures/objectsData";
import { URL_POSTS } from "../fixtures/linksData";

describe("Test Suit #2. POST", () => {
    let res: any;
    beforeEach(async () => {
        res = await superagent.post(URL_POSTS).set("Content-Type", "application/json").send({ NEW_OBJ });
    });
    test("1. POST check (status)", async () => {
        expect(res.statusCode).toEqual(201);
    });
    test("2. POST check (id)", async () => {
        expect(res.body.id).toEqual(NEW_OBJ.id);
    });
});
