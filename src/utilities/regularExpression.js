"use strict";

import { EMPTY_STRING, ESCAPE_WATCH_PATTERN } from "../constants";

export function trim(string) { return string.replace(/^\/|\/$/g, EMPTY_STRING); }

export function escape(string) { return string.replace(/[.*+?^${}()|[\]\\]/g, ESCAPE_WATCH_PATTERN); }

