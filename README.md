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

# Kurtosis

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [F][f-distribution] distribution [excess kurtosis][kurtosis].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [excess kurtosis][kurtosis] for a [F][f-distribution] random variable with numerator degrees of freedom `d1` and denominator degrees of freedom `d2` is

<!-- <equation class="equation" label="eq:f_kurtosis" align="center" raw="\operatorname{Kurt}\left( X \right) = \gamma_{2}=12{\frac{d_{1}(5d_{2}-22)(d_{1}+d_{2}-2)+(d_{2}-4)(d_{2}-2)^{2}}{d_{1}(d_{2}-6)(d_{2}-8)(d_{1}+d_{2}-2)}}." alt="Excess kurtosis for an F distribution."> -->

<div class="equation" align="center" data-raw-text="\operatorname{Kurt}\left( X \right) = \gamma_{2}=12{\frac{d_{1}(5d_{2}-22)(d_{1}+d_{2}-2)+(d_{2}-4)(d_{2}-2)^{2}}{d_{1}(d_{2}-6)(d_{2}-8)(d_{1}+d_{2}-2)}}." data-equation="eq:f_kurtosis">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/f/kurtosis/docs/img/equation_f_kurtosis.svg" alt="Excess kurtosis for an F distribution.">
    <br>
</div>

<!-- </equation> -->

for `d1 > 0` and `d2 > 8`. Otherwise, the kurtosis is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-f-kurtosis
```

</section>

<section class="usage">

## Usage

```javascript
var kurtosis = require( '@stdlib/stats-base-dists-f-kurtosis' );
```

#### kurtosis( d1, d2 )

Returns the [excess kurtosis][kurtosis] of a [F][f-distribution] distribution with parameters `d1` (numerator degrees of freedom) and `d2` (denominator degrees of freedom).

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

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var kurtosis = require( '@stdlib/stats-base-dists-f-kurtosis' );

var d1;
var d2;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    d1 = ( randu()*10.0 ) + EPS;
    d2 = ( randu()*20.0 ) + EPS;
    v = kurtosis( d1, d2 );
    console.log( 'd1: %d, d2: %d, skew(X;d1,d2): %d', d1.toFixed( 4 ), d2.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-f-kurtosis.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-f-kurtosis

[test-image]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-f-kurtosis/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-f-kurtosis/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-f-kurtosis?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-f-kurtosis
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-f-kurtosis/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-f-kurtosis/main/LICENSE

[f-distribution]: https://en.wikipedia.org/wiki/F_distribution

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

</section>

<!-- /.links -->
