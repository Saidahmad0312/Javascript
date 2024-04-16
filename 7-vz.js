class Box {
    constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
    }
  
    getVolume() {
      return this.length * this.width * this.height;
    }
  
    static totalVolume(boxes) {
      let total = 0;
      for (let box of boxes) {
        total += box.getVolume();
      }
      return total;
    }
  }
  
  const box1 = new Box(2, 3, 4);
  const box2 = new Box(1, 2, 3);
  
  const total = Box.totalVolume([box1, box2]);
  console.log("Umumiy hajm:", total);
  