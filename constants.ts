export const isTerminalApp = Deno.env.get("TERM_PROGRAM") === "Apple_Terminal";

export const ESC = "\u001B[";

export const SAVE = isTerminalApp ? "\u001B7" : ESC + "s";
export const RESTORE = isTerminalApp ? "\u001B8" : ESC + "u";
export const POSITION = "6n";
export const HIDE = "?25l";
export const SHOW = "?25h";
export const SCROLL_UP = "T";
export const SCROLL_DOWN = "S";

export const UP = "A";
export const DOWN = "B";
export const RIGHT = "C";
export const LEFT = "D";

export const CLEAR_RIGHT = "0K";
export const CLEAR_LEFT = "1K";
export const CLEAR_LINE = "2K";

export const CLEAR_DOWN = "0J";
export const CLEAR_UP = "1J";
export const CLEAR_SCREEN = "2J";
export const CLEAR = "\u001Bc";

export const NEXT_LINE = "1E";
export const PREV_LINE = "1F";
export const COLUMN = "1G"; // left?
export const HOME = "H";
