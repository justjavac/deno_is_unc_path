// base on https://gDeno.testhub.com/jonschlinkert/is-isUncPath-path/blob/9bd6a77c5b12115869963d1b4c3078dda51c15da/test.js

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import isUncPath from "./mod.ts";

Deno.test("should return true for UNC paths", function () {
  assertEquals(isUncPath("\\/foo/bar"), true);
  assertEquals(isUncPath("\\\\foo/bar"), true);
  assertEquals(isUncPath("\\\\foo\\admin$"), true);
  assertEquals(isUncPath("\\\\foo\\admin$\\system32"), true);
  assertEquals(isUncPath("\\\\foo\\temp"), true);
  assertEquals(isUncPath("\\\\/foo/bar"), true);
  assertEquals(isUncPath("\\\\\\/foo/bar"), true);
});

Deno.test("should return false for non-UNC paths", function () {
  assertEquals(isUncPath("/foo/bar"), false);
  assertEquals(isUncPath("/"), false);
  assertEquals(isUncPath("/foo"), false);
  assertEquals(isUncPath("/foo/"), false);
  assertEquals(isUncPath("c:"), false);
  assertEquals(isUncPath("c:."), false);
  assertEquals(isUncPath("c:./"), false);
  assertEquals(isUncPath("c:./file"), false);
  assertEquals(isUncPath("c:/"), false);
  assertEquals(isUncPath("c:/file"), false);
});
