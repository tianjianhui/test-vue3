/*
 * @Author: 田建辉
 * @Date: 2023-04-27 19:10:03
 * @LastEditors: 田建辉
 * @LastEditTime: 2023-04-27 19:11:33
 * @FilePath: /vue3-project/src/components/sum.test.js
 * @Description: 
 * 
 */
test("object equal", () => {
  const data = {
    one: 1,
    two: {
      kkk: "hello"
    }
  }
  expect(data).toEqual({
    one: 1,
    two: {
      kkk: "hello"
    }
  }) // toEqual 一般用来检查对象的值
})