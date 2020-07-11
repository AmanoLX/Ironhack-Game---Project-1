class Player extends Component {
  constructor(game, x, y, w, h) {
    super(game, x, y, w, h);
  }

  move() {
    
    document.onkeydown = event => {
      const key = event.keyCode;
      const possibleKeysStrokes = [37, 38, 39, 40]; // arrow keys

      if (possibleKeysStrokes.includes(key)) {
        switch (key) {
          case 37: // left arrow, x axis
            if (this.x >= 10) {
              this.x -= 10;
            }
            break;
          case 38: // up arrow, y axis
            if (this.y >= 10) {
              this.y -= 10;
            }
            break;
          case 39: // right arrow, x axis
            if (this.x <= 490 - this.width) {
              this.x += 10;
            }
            break;
          case 40: // down arrow, y axis
            if (this.y <= 490 - this.height) {
              this.y += 10;
            }
            break;
        }
      }
    }
  }

  // wallCollision(element) {
  //   // y axis
  //   if (this.y + 10 <= element.y + element.height && this.y >= element.y) {
  //     // x axis
  //     if (this.x >= element.x && this.x <= element.x + element.width) {
  //       setTimeout(() => {
  //         alert('crash')
  //       }, 5);
  //       window.location.reload();
  //     }
  //   }
  // }
}