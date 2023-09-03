function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }

  let students = [];

  for (let i = 0; i < numberOfStudents; i++) {
    let seatNumber = studentSeat(i + 1);
    students.push(seatNumber());
  }

  return students;
}
