/// <reference path="../.astro/types.d.ts" />

import type {MarkdownHeading} from "astro";

export type HeadingTree = MarkdownHeading & {subheadings: HeadingTree[]}
