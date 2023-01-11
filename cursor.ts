import { encode } from "./deps.ts";

import {
  CLEAR_DOWN,
  CLEAR_LEFT,
  CLEAR_LINE,
  CLEAR_RIGHT,
  CLEAR_SCREEN,
  CLEAR_UP,
  DOWN,
  ESC,
  HIDE,
  HOME,
  LEFT,
  NEXT_LINE,
  POSITION,
  PREV_LINE,
  RESTORE,
  RIGHT,
  SAVE,
  SCROLL_DOWN,
  SCROLL_UP,
  SHOW,
  UP,
} from "./constants.ts";

export async function write(str: string) {
  await Deno.stdout.write(encode(str));
}

export async function cursor(action: string): Promise<void> {
  await write(ESC + action);
}

async function save(): Promise<void> {
  await write(SAVE);
}

async function restore(): Promise<void> {
  await write(RESTORE);
}

async function position(): Promise<void> {
  await cursor(POSITION);
}

async function hideCursor(): Promise<void> {
  await cursor(HIDE);
}

async function showCursor(): Promise<void> {
  await cursor(SHOW);
}

async function scrollUp(): Promise<void> {
  await cursor(SCROLL_UP);
}

async function scrollDown(): Promise<void> {
  await cursor(SCROLL_DOWN);
}

async function clearUp(): Promise<void> {
  await cursor(CLEAR_UP);
}

async function clearDown(): Promise<void> {
  await cursor(CLEAR_DOWN);
}

async function clearLeft(): Promise<void> {
  await cursor(CLEAR_LEFT);
}

async function clearRight(): Promise<void> {
  await cursor(CLEAR_RIGHT);
}

async function clearLine(): Promise<void> {
  await cursor(CLEAR_LINE);
}

async function clearScreen(): Promise<void> {
  await cursor(CLEAR_SCREEN);
}

async function nextLine(): Promise<void> {
  await cursor(NEXT_LINE);
}

async function prevLine(): Promise<void> {
  await cursor(PREV_LINE);
}

async function goHome(): Promise<void> {
  await cursor(HOME);
}

async function goUp(y = 1): Promise<void> {
  await cursor(y + UP);
}

async function goDown(y = 1): Promise<void> {
  await cursor(y + DOWN);
}

async function goLeft(x = 1): Promise<void> {
  await cursor(x + LEFT);
}

async function goRight(x = 1): Promise<void> {
  await cursor(x + RIGHT);
}

async function goTo(x: number, y: number): Promise<void> {
  await write(ESC + y + ";" + x + HOME);
}

export {
  clearDown,
  clearLeft,
  clearLine,
  clearRight,
  clearScreen,
  clearUp,
  goDown,
  goHome,
  goLeft,
  goRight,
  goTo,
  goUp,
  hideCursor,
  nextLine,
  position,
  prevLine,
  restore,
  save,
  scrollDown,
  scrollUp,
  showCursor,
};
