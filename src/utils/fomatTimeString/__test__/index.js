import { formatMinutesSeconds } from "..";

test('Should return 00 for single digit values', () =>  {
  expect((formatMinutesSeconds(0))).toBe("00")
})

test('Should return 10 for double digit values', () =>  {
  expect((formatMinutesSeconds(10))).toBe("10")
})
