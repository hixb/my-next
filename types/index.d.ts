import { MouseEventHandler } from "react";

interface EvtAttributes {
  onClick?: MouseEventHandler<T> | undefined
}

/**
 * Link association
 */
type Relation =
  "alternate"
  | "author"
  | "bookmark"
  | "canonical"
  | "dns-prefetch"
  | "external"
  | "help"
  | "icon"
  | "import"
  | "license"
  | "manifest"
  | "modulepreload"
  | "next"
  | "nofollow"
  | "noopener"
  | "noreferrer"
  | "opener"
  | "pingback"
  | "preconnect"
  | "prefetch"
  | "preload"
  | "prerender"
  | "prev"
  | "search"
  | "shortlink"
  | "stylesheet"
  | "tag"

type SvgSize = number