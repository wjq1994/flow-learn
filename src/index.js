// @flow

function foo(x: ?number): number {
  if (x) {
    return x;
  } else {
	return 0;
  }
}