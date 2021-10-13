// type Direction = "left" | "right" | "top" | "bottom"

enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction){
  console.log(direction)
  switch (direction) {
    case 100:
      console.log("改变角色方向向左")
      break;
    case Direction.RIGHT:
      console.log("改变角色方向向右")
      break;
    case Direction.TOP:
      console.log("改变角色方向向上")
      break;
    case Direction.BOTTOM:
      console.log("改变角色方向向下")
      break;
    default:
      // const foo: never = direction
      break;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)