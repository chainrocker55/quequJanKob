// 0. import Queue มาใช้ ใน test
// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)
// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20
// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)
// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)
// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน
// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null

const queue = require('./Queue')

test('สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)', ()=>{
    var q = new queue();
    expect(q.empty()).toBe(true)

})
test('สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20', ()=>{
    var q = new queue(1);
    expect(q.enqueue(20)).toBe(true)
    expect(q.dequeue()).toBe(20)

})
test('สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)', ()=>{
    var q = new queue(1);
    expect(q.enqueue(20)).toBe(true)
    expect(q.full()).toBe(true)
})
test('สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)', ()=>{
    var q = new queue(1);
    expect(q.enqueue(1)).toBe(true)
    expect(q.enqueue(5)).toBe(false)
})

test('สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน', ()=>{
    var q = new queue(2);
    expect(q.enqueue(1)).toBe(true)
    expect(q.enqueue(2)).toBe(true)
    expect(q.dequeue()).toBe(1)
    expect(q.dequeue()).toBe(2)
})

test('สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null', ()=>{
    var q = new queue(1);
    expect(q.dequeue()).toBe(null)
})