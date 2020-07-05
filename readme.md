# PROJECT | Maze Game

## Description

Maze game where the player has to reach the baby within a specific time.

## MVP (DOM - CANVAS)
- Player starts in left top corner and has to reach right bottom corner
- Player can move up, down, left or right
- Player can only move on the free path, collision when there is a wall
- If player hasn't arrived in time, the game is lost

## Backlog
- Create opening screen with introduction, instructions and start botton (splashScreen)
- When game starts, create a maze board with canvas and include a timer (gameScreen)
- Create an alert/pop-up if player has lost the game (gameoverScreen)
- Create an alert/pop-up if player has won the game (winScreen)

## Data structure

- HTML file (splashScreen)
- Game Instructions
- Start Game button
- Open Canvas

- CSS style file (styling of splashScreen)




### main.js

includeGameCanvas()

clearGameCanvas()

gameOverScreen()

removeGameOverScreen()

winScreen()

removeWinScreen()

### timer.js
timer()

### game.js

Game()

startGame()

checkCollisions()

setGameOver()


### player.js

Player()

movePlayer()

draw() 

updatePosition()



## States and States Transitions

- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  

- startGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - winScreen()



## Task

Main - create opening screen
Main - show instructions
Main - start game button
Main - fade in canvas
Game - create game canvas
Game - put baby on end position (bottom right)
Game - set timer and run it down every second
Game - check collisions with walls
Game - check if player reaches end position before timer is 0
Game - game over
Game - clear game canvas
Game - show alert if player has won or lost
Game - return to opening screen
Player - draw player icon
Player - put player on starting position (top left)
Player - move directions
Player - update position


## Trello

https://trello.com/b/Kv5im0W6/ironhack-project-1-maze-game

## Figma Wireframes

https://www.figma.com/file/eT5BgbOQyQHTvHrQFHqwCe/Maze-Game?node-id=0%3A1