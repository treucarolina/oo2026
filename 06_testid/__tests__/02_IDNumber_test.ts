import { IDCode } from "../02_IDNumber";

test("Male gender", ()=>{
    expect(new IDCode("30604120293").gender()).toBe("M");
})