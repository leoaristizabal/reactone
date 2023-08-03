import {timesTwo} from "./funciones";

test("multiplica por dos", () => {
    expect(timesTwo(4)).toBe(8);
})