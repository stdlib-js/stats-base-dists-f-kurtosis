<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Kurtosis

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [F][f-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [F][f-distribution] random variable with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` is

<!-- <equation class="equation" label="eq:f_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \gamma_{2}=12{\frac{d_{1}(5d_{2}-22)(d_{1}+d_{2}-2)+(d_{2}-4)(d_{2}-2)^{2}}{d_{1}(d_{2}-6)(d_{2}-8)(d_{1}+d_{2}-2)}}." alt="Excess kurtosis for an F distribution."> -->

```math
\mathop{\mathrm{Kurt}}\left( X \right) = \gamma_{2}=12{\frac{d_{1}(5d_{2}-22)(d_{1}+d_{2}-2)+(d_{2}-4)(d_{2}-2)^{2}}{d_{1}(d_{2}-6)(d_{2}-8)(d_{1}+d_{2}-2)}}.
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \gamma_{2}=12{\frac{d_{1}(5d_{2}-22)(d_{1}+d_{2}-2)+(d_{2}-4)(d_{2}-2)^{2}}{d_{1}(d_{2}-6)(d_{2}-8)(d_{1}+d_{2}-2)}}." data-equation="eq:f_kurtosis">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/f/kurtosis/docs/img/equation_f_kurtosis.svg" alt="Excess kurtosis for an F distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `d1 > 0` and `d2 > 8`. Otherwise, the kurtosis is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
kurtosis = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-kurtosis@v0.3.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var kurtosis = require( 'path/to/vendor/umd/stats-base-dists-f-kurtosis/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-kurtosis@v0.3.1-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.kurtosis;
})();
</script>
```

#### kurtosis( d1, d2 )

Returns the [excess kurtosis][kurtosis] of an [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

```javascript
var v = kurtosis( 4.0, 9.0 );
// returns ~114.273

v = kurtosis( 4.0, 12.0 );
// returns ~26.143

v = kurtosis( 8.0, 9.0 );
// returns ~100.167
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = kurtosis( NaN, 7.0 );
// returns NaN

v = kurtosis( 3.0, NaN );
// returns NaN
```

If provided `d1 <= 0`, the function returns `NaN`.

```javascript
var v = kurtosis( 0.0, 9.0 );
// returns NaN

v = kurtosis( -1.0, 9.0 );
// returns NaN
```

If provided `d2 <= 8`, the function returns `NaN`.

```javascript
var v = kurtosis( 1.0, 8.0 );
// returns NaN

v = kurtosis( 2.2, 5.5 );
// returns NaN

v = kurtosis( 3.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-f-kurtosis@v0.3.1-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var opts = {
    'dtype': 'float64'
};
var d1 = uniform( 10, EPS, 10.0, opts );
var d2 = uniform( 10, EPS, 20.0, opts );

logEachMap( 'd1: %0.4f, d2: %0.4f, Kurt(X;d1,d2): %0.4f', d1, d2, kurtosis );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-f-kurtosis.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-f-kurtosis

[test-image]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-f-kurtosis/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-f-kurtosis?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-f-kurtosis.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-f-kurtosis/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-f-kurtosis/main/LICENSE

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
