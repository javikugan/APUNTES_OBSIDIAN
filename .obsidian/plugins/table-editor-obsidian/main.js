'use strict';

var obsidian = require('obsidian');
var state = require('@codemirror/state');
var view = require('@codemirror/view');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var icons = {
    spreadsheet: "\n<svg version=\"1.1\" viewBox=\"0 0 482.81 482.81\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"currentColor\" d=\"m457.58 25.464-432.83 0.42151c-13.658 0.013314-24.758 11.115-24.757 24.757l0.031024 347.45c7.4833e-4 8.3808 4.211 15.772 10.608 20.259 3.4533 2.4499 5.0716 3.2901 8.879 3.9022 1.7033 0.37333 3.4561 0.59471 5.2692 0.59294l432.84-0.42151c1.809-1e-3 3.5618-0.21823 5.2568-0.59294h1.2174v-0.37196c10.505-2.8727 18.279-12.397 18.278-23.788l-0.031-347.43c1e-3 -13.649-11.107-24.763-24.768-24.763zm3.5453 24.763v71.344h-163.31v-74.886h159.76c1.9641 0.0014 3.5467 1.5922 3.5467 3.5425zm-1.6737 350.37h-161.6v-67.207h163.31v64.268c1e-3 1.2572-0.70549 2.321-1.7033 2.9386zm-438.21-2.5171v-64.268h76.646v67.207h-74.942c-0.99784-0.61765-1.7033-1.6814-1.7033-2.9386zm255.28-155.18v69.688h-157.42v-69.688zm0 90.913v67.207h-157.42v-67.207zm-0.031-211.83h-157.42v-74.886h157.42zm0 21.226v77.826h-157.42v-77.826zm-178.64 77.826h-76.646v-77.826h76.646zm0.03102 21.862v69.688h-76.646v-69.688zm199.95 69.268v-69.697h163.31v69.697zm-0.031-91.552v-77.826h163.31v77.826z\" stroke-width=\"1.3725\"/>\n</svg>",
    alignLeft: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(-1 0 0 1 512 0)\">\n    <path d=\"m501.33 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n    <path d=\"m501.33 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  </g>\n</svg>",
    alignCenter: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(-1 0 0 1 512 0)\">\n    <path d=\"m416 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n    <path d=\"m416 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n    <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  </g>\n</svg>",
    alignRight: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 512 512\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m501.33 170.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n  <path d=\"m501.33 298.67h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n  <path d=\"m501.33 426.67h-320c-5.896 0-10.667 4.771-10.667 10.667v21.333c0 5.896 4.771 10.667 10.667 10.667h320c5.896 0 10.667-4.771 10.667-10.667v-21.333c0-5.896-4.771-10.667-10.667-10.667z\"/>\n  <path d=\"m501.33 42.667h-490.67c-5.896 0-10.667 4.771-10.667 10.666v21.333c0 5.896 4.771 10.667 10.667 10.667h490.67c5.896 0 10.667-4.771 10.667-10.667v-21.333c-1e-3 -5.895-4.772-10.666-10.668-10.666z\"/>\n</svg>",
    deleteColumn: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 26 26\" version=\"1.1\" viewBox=\"0 0 26 26\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m13.594 20.85v3.15h-10v-22h10v3.15c0.633-0.323 1.304-0.565 2-0.727v-3.423c0-0.551-0.448-1-1-1h-12c-0.55 0-1 0.449-1 1v24c0 0.551 0.449 1 1 1h12c0.552 0 1-0.449 1-1v-3.424c-0.696-0.161-1.367-0.403-2-0.726z\"/>\n  <path d=\"m17.594 6.188c-3.762 0-6.813 3.051-6.812 6.813-1e-3 3.761 3.05 6.812 6.812 6.812s6.813-3.051 6.813-6.813-3.052-6.812-6.813-6.812zm3.632 7.802-7.267 1e-3v-1.982h7.268l-1e-3 1.981z\"/>\n</svg>",
    deleteRow: "\n<svg class=\"widget-icon\" enable-background=\"new 0 0 15.381 15.381\" version=\"1.1\" viewBox=\"0 0 15.381 15.381\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M0,1.732v7.732h6.053c0-0.035-0.004-0.07-0.004-0.104c0-0.434,0.061-0.854,0.165-1.255H1.36V3.092    h12.662v2.192c0.546,0.396,1.01,0.897,1.359,1.477V1.732H0z\"/>\n  <path d=\"m11.196 5.28c-2.307 0-4.183 1.877-4.183 4.184 0 2.308 1.876 4.185 4.183 4.185 2.309 0 4.185-1.877 4.185-4.185 0-2.307-1.876-4.184-4.185-4.184zm0 7.233c-1.679 0-3.047-1.367-3.047-3.049 0-1.68 1.368-3.049 3.047-3.049 1.684 0 3.05 1.369 3.05 3.049 0 1.682-1.366 3.049-3.05 3.049z\"/>\n  <rect x=\"9.312\" y=\"8.759\" width=\"3.844\" height=\"1.104\"/>\n</svg>",
    insertColumn: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"-21 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m288 106.67c-3.9258 0-7.8516-1.4297-10.922-4.3125l-80-74.664c-4.8008-4.4805-6.3789-11.457-3.9688-17.559 2.4102-6.1016 8.3203-10.133 14.891-10.133h160c6.5703 0 12.48 4.0117 14.891 10.133 2.4102 6.125 0.83203 13.078-3.9688 17.559l-80 74.664c-3.0703 2.8828-6.9961 4.3125-10.922 4.3125zm-39.402-74.668 39.402 36.777 39.402-36.777z\"/>\n  <path d=\"m432 512h-53.332c-20.59 0-37.336-16.746-37.336-37.332v-330.67c0-20.586 16.746-37.332 37.336-37.332h53.332c20.586 0 37.332 16.746 37.332 37.332v330.67c0 20.586-16.746 37.332-37.332 37.332zm-53.332-373.33c-2.9453 0-5.3359 2.3867-5.3359 5.332v330.67c0 2.9414 2.3906 5.332 5.3359 5.332h53.332c2.9453 0 5.332-2.3906 5.332-5.332v-330.67c0-2.9453-2.3867-5.332-5.332-5.332z\"/>\n  <path d=\"m197.33 512h-160c-20.586 0-37.332-16.746-37.332-37.332v-330.67c0-20.586 16.746-37.332 37.332-37.332h160c20.59 0 37.336 16.746 37.336 37.332v330.67c0 20.586-16.746 37.332-37.336 37.332zm-160-373.33c-2.9414 0-5.332 2.3867-5.332 5.332v330.67c0 2.9414 2.3906 5.332 5.332 5.332h160c2.9453 0 5.3359-2.3906 5.3359-5.332v-330.67c0-2.9453-2.3906-5.332-5.3359-5.332z\"/>\n  <path d=\"m453.33 325.33h-96c-8.832 0-16-7.168-16-16s7.168-16 16-16h96c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n  <path d=\"m218.67 325.33h-202.67c-8.832 0-16-7.168-16-16s7.168-16 16-16h202.67c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n  <path d=\"m117.33 512c-8.832 0-16-7.168-16-16v-373.33c0-8.832 7.168-16 16-16s16 7.168 16 16v373.33c0 8.832-7.168 16-16 16z\"/>\n</svg>",
    insertRow: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 -21 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m16 277.33c-1.9844 0-3.9688-0.36328-5.8672-1.1094-6.1211-2.4102-10.133-8.3203-10.133-14.891v-160c0-6.5703 4.0117-12.48 10.133-14.891 6.1445-2.4102 13.078-0.85156 17.559 3.9688l74.664 80c5.7617 6.1445 5.7617 15.68 0 21.824l-74.664 80c-3.0938 3.3281-7.3398 5.0977-11.691 5.0977zm16-135.4v78.805l36.777-39.402z\"/>\n  <path d=\"m474.67 128h-330.67c-20.586 0-37.332-16.746-37.332-37.332v-53.336c0-20.586 16.746-37.332 37.332-37.332h330.67c20.586 0 37.332 16.746 37.332 37.332v53.336c0 20.586-16.746 37.332-37.332 37.332zm-330.67-96c-2.9453 0-5.332 2.3906-5.332 5.332v53.336c0 2.9414 2.3867 5.332 5.332 5.332h330.67c2.9414 0 5.332-2.3906 5.332-5.332v-53.336c0-2.9414-2.3906-5.332-5.332-5.332z\"/>\n  <path d=\"m474.67 469.33h-330.67c-20.586 0-37.332-16.746-37.332-37.332v-160c0-20.586 16.746-37.332 37.332-37.332h330.67c20.586 0 37.332 16.746 37.332 37.332v160c0 20.586-16.746 37.332-37.332 37.332zm-330.67-202.66c-2.9453 0-5.332 2.3867-5.332 5.332v160c0 2.9453 2.3867 5.332 5.332 5.332h330.67c2.9414 0 5.332-2.3867 5.332-5.332v-160c0-2.9453-2.3906-5.332-5.332-5.332z\"/>\n  <path d=\"m309.33 128c-8.832 0-16-7.168-16-16v-96c0-8.832 7.168-16 16-16s16 7.168 16 16v96c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m309.33 469.33c-8.832 0-16-7.168-16-16v-202.66c0-8.832 7.168-16 16-16s16 7.168 16 16v202.66c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m496 368h-373.33c-8.832 0-16-7.168-16-16s7.168-16 16-16h373.33c8.832 0 16 7.168 16 16s-7.168 16-16 16z\"/>\n</svg>",
    moveColumnLeft: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512.02 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m357.35 512.01h96c32.363 0 58.668-26.305 58.668-58.668v-394.66c0-32.363-26.305-58.668-58.668-58.668h-96c-32.363 0-58.664 26.305-58.664 58.668v394.66c0 32.363 26.301 58.668 58.664 58.668zm96-480c14.699 0 26.668 11.969 26.668 26.668v394.66c0 14.699-11.969 26.668-26.668 26.668h-96c-14.699 0-26.664-11.969-26.664-26.668v-394.66c0-14.699 11.965-26.668 26.664-26.668z\"/>\n  <path d=\"m16.016 272.01h224c8.832 0 16-7.168 16-16s-7.168-16-16-16h-224c-8.832 0-16 7.168-16 16s7.168 16 16 16z\"/>\n  <path d=\"m101.35 357.34c4.0976 0 8.1914-1.5547 11.309-4.6914 6.25-6.25 6.25-16.383 0-22.637l-74.027-74.023 74.027-74.027c6.25-6.25 6.25-16.387 0-22.637s-16.383-6.25-22.637 0l-85.332 85.336c-6.25 6.25-6.25 16.383 0 22.633l85.332 85.332c3.1367 3.1602 7.2344 4.7148 11.328 4.7148z\"/>\n</svg>",
    moveColumnRight: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512.02 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m154.67 512.01h-96c-32.363 0-58.668-26.305-58.668-58.668v-394.66c0-32.363 26.305-58.668 58.668-58.668h96c32.363 0 58.664 26.305 58.664 58.668v394.66c0 32.363-26.301 58.668-58.664 58.668zm-96-480c-14.699 0-26.668 11.969-26.668 26.668v394.66c0 14.699 11.969 26.668 26.668 26.668h96c14.699 0 26.664-11.969 26.664-26.668v-394.66c0-14.699-11.965-26.668-26.664-26.668z\"/>\n  <path d=\"m496 272.01h-224c-8.832 0-16-7.168-16-16 0-8.832 7.168-16 16-16h224c8.832 0 16 7.168 16 16 0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m410.67 357.34c-4.0977 0-8.1914-1.5547-11.309-4.6914-6.25-6.25-6.25-16.383 0-22.637l74.027-74.023-74.027-74.027c-6.25-6.25-6.25-16.387 0-22.637s16.383-6.25 22.637 0l85.332 85.336c6.25 6.25 6.25 16.383 0 22.633l-85.332 85.332c-3.1367 3.1602-7.2344 4.7148-11.328 4.7148z\"/>\n</svg>",
    moveRowDown: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m453.33 213.33h-394.66c-32.363 0-58.668-26.301-58.668-58.664v-96c0-32.363 26.305-58.668 58.668-58.668h394.66c32.363 0 58.668 26.305 58.668 58.668v96c0 32.363-26.305 58.664-58.668 58.664zm-394.66-181.33c-14.699 0-26.668 11.969-26.668 26.668v96c0 14.699 11.969 26.664 26.668 26.664h394.66c14.699 0 26.668-11.965 26.668-26.664v-96c0-14.699-11.969-26.668-26.668-26.668z\"/>\n  <path d=\"m256 512c-8.832 0-16-7.168-16-16v-224c0-8.832 7.168-16 16-16s16 7.168 16 16v224c0 8.832-7.168 16-16 16z\"/>\n  <path d=\"m256 512c-4.0977 0-8.1914-1.5586-11.309-4.6914l-85.332-85.336c-6.25-6.25-6.25-16.383 0-22.633s16.383-6.25 22.637 0l74.023 74.027 74.027-74.027c6.25-6.25 16.387-6.25 22.637 0s6.25 16.383 0 22.633l-85.336 85.336c-3.1562 3.1328-7.25 4.6914-11.348 4.6914z\"/>\n</svg>",
    moveRowUp: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m453.33 298.67h-394.66c-32.363 0-58.668 26.301-58.668 58.664v96c0 32.363 26.305 58.668 58.668 58.668h394.66c32.363 0 58.668-26.305 58.668-58.668v-96c0-32.363-26.305-58.664-58.668-58.664zm-394.66 181.33c-14.699 0-26.668-11.969-26.668-26.668v-96c0-14.699 11.969-26.664 26.668-26.664h394.66c14.699 0 26.668 11.965 26.668 26.664v96c0 14.699-11.969 26.668-26.668 26.668z\"/>\n  <path d=\"m256 0c-8.832 0-16 7.168-16 16v224c0 8.832 7.168 16 16 16s16-7.168 16-16v-224c0-8.832-7.168-16-16-16z\"/>\n  <path d=\"m256 0c-4.0977 0-8.1914 1.5586-11.309 4.6914l-85.332 85.336c-6.25 6.25-6.25 16.383 0 22.633s16.383 6.25 22.637 0l74.023-74.027 74.027 74.027c6.25 6.25 16.387 6.25 22.637 0s6.25-16.383 0-22.633l-85.336-85.336c-3.1562-3.1328-7.25-4.6914-11.348-4.6914z\"/>\n</svg>",
    sortAsc: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(1 0 0 -1 0 501.15)\" stroke-width=\"1.3333\">\n    <path d=\"m353.6 74.486c-11.776 0-21.333 9.5573-21.333 21.333v298.67c0 11.776 9.5573 21.333 21.333 21.333s21.333-9.5573 21.333-21.333v-298.67c0-11.776-9.5573-21.333-21.333-21.333z\"/>\n    <path d=\"m353.6 74.486c-5.4636 0-10.922 2.0781-15.079 6.2552l-113.78 113.78c-8.3333 8.3333-8.3333 21.844 0 30.177 8.3333 8.3333 21.844 8.3333 30.183 0l98.697-98.703 98.703 98.703c8.3333 8.3333 21.849 8.3333 30.183 0 8.3333-8.3333 8.3333-21.844 0-30.177l-113.78-113.78c-4.2083-4.1771-9.6667-6.2552-15.131-6.2552z\"/>\n  </g>\n  <path d=\"m166.04 210.11q-5.0971-13.492-9.5945-26.385-4.4974-13.192-9.2947-26.685h-94.146l-18.889 53.07h-30.283q11.993-32.981 22.487-60.865 10.494-28.184 20.388-53.369 10.194-25.186 20.089-47.973 9.8943-23.087 20.688-45.574h26.685q10.794 22.487 20.688 45.574 9.8943 22.787 19.789 47.973 10.194 25.186 20.688 53.369 10.494 27.884 22.487 60.865zm-27.284-77.056q-9.5945-26.085-19.189-50.371-9.2947-24.586-19.489-47.073-10.494 22.487-20.089 47.073-9.2947 24.286-18.589 50.371z\"/>\n  <path d=\"m173.24 325.25q-6.896 7.7955-16.191 18.889-8.9948 10.794-19.189 24.286-10.194 13.192-20.988 28.184-10.794 14.692-21.288 29.983-10.194 14.991-19.489 29.983-9.2947 14.991-16.79 28.484h116.93v24.886h-150.81v-19.489q6.2964-11.993 14.692-26.385 8.695-14.392 18.29-29.383 9.8943-14.991 20.388-30.283t20.688-29.383q10.494-14.092 20.088-26.385 9.8943-12.293 17.99-21.588h-106.74v-24.886h142.42z\"/>\n</svg>",
    sortDesc: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g transform=\"matrix(1 0 0 -1 0 501.15)\" stroke-width=\"1.3333\">\n    <path d=\"m353.6 74.486c-11.776 0-21.333 9.5573-21.333 21.333v298.67c0 11.776 9.5573 21.333 21.333 21.333s21.333-9.5573 21.333-21.333v-298.67c0-11.776-9.5573-21.333-21.333-21.333z\"/>\n    <path d=\"m353.6 74.486c-5.4636 0-10.922 2.0781-15.079 6.2552l-113.78 113.78c-8.3333 8.3333-8.3333 21.844 0 30.177 8.3333 8.3333 21.844 8.3333 30.183 0l98.697-98.703 98.703 98.703c8.3333 8.3333 21.849 8.3333 30.183 0 8.3333-8.3333 8.3333-21.844 0-30.177l-113.78-113.78c-4.2083-4.1771-9.6667-6.2552-15.131-6.2552z\"/>\n  </g>\n  <path d=\"m169.11 507.72q-5.0971-13.492-9.5945-26.385-4.4974-13.192-9.2947-26.685h-94.146l-18.889 53.07h-30.283q11.993-32.981 22.487-60.865 10.494-28.184 20.388-53.369 10.194-25.186 20.088-47.973 9.8943-23.087 20.688-45.574h26.685q10.794 22.487 20.688 45.574 9.8943 22.787 19.789 47.973 10.194 25.186 20.688 53.369 10.494 27.884 22.487 60.865zm-27.284-77.056q-9.5945-26.085-19.189-50.371-9.2947-24.586-19.489-47.073-10.494 22.487-20.089 47.073-9.2947 24.286-18.589 50.371z\"/>\n  <path d=\"m176.31 27.639q-6.896 7.7955-16.191 18.889-8.9948 10.794-19.189 24.286-10.194 13.192-20.988 28.184-10.794 14.692-21.288 29.983-10.194 14.991-19.489 29.983-9.2947 14.991-16.79 28.484h116.93v24.886h-150.81v-19.489q6.2964-11.993 14.692-26.385 8.695-14.392 18.29-29.383 9.8943-14.991 20.388-30.283 10.494-15.291 20.688-29.383 10.494-14.092 20.088-26.385 9.8943-12.293 17.99-21.588h-106.74v-24.886h142.42z\"/>\n</svg>",
    formula: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m263.51 62.967c1.672-11.134 9.326-22.967 20.222-22.967 11.028 0 20 8.972 20 20h40c0-33.084-26.916-60-60-60-33.629 0-55.527 28.691-59.784 57.073l-12.862 86.927h-61.354v40h55.436l-39.22 265.07-0.116 0.937c-1.063 10.62-9.393 21.99-20.1 21.99-11.028 0-20-8.972-20-20h-40c0 33.084 26.916 60 60 60 33.661 0 56.771-29.141 59.848-57.496l40.023-270.5h60.129v-40h-54.211l11.989-81.033z\"/>\n  <polygon points=\"426.27 248 378.24 248 352.25 287.08 334.92 248 291.17 248 326 326.57 270.52 410 318.56 410 345.21 369.92 362.98 410 406.73 410 371.46 330.43\"/>\n</svg>",
    help: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"m248.16 343.22c-14.639 0-26.491 12.2-26.491 26.84 0 14.291 11.503 26.84 26.491 26.84s26.84-12.548 26.84-26.84c0-14.64-12.199-26.84-26.84-26.84z\"/>\n  <path d=\"m252.69 140c-47.057 0-68.668 27.885-68.668 46.708 0 13.595 11.502 19.869 20.914 19.869 18.822 0 11.154-26.84 46.708-26.84 17.429 0 31.372 7.669 31.372 23.703 0 18.824-19.52 29.629-31.023 39.389-10.108 8.714-23.354 23.006-23.354 52.983 0 18.125 4.879 23.354 19.171 23.354 17.08 0 20.565-7.668 20.565-14.291 0-18.126 0.35-28.583 19.521-43.571 9.411-7.32 39.04-31.023 39.04-63.789s-29.629-57.515-74.246-57.515z\"/>\n  <path d=\"m256 0c-141.48 0-256 114.5-256 256v236c0 11.046 8.954 20 20 20h236c141.48 0 256-114.5 256-256 0-141.48-114.5-256-256-256zm0 472h-216v-216c0-119.38 96.607-216 216-216 119.38 0 216 96.607 216 216 0 119.38-96.607 216-216 216z\"/>\n</svg>",
    csv: "\n<svg class=\"widget-icon\" version=\"1.1\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n <path d=\"m4.9979 9v-8h14.502l3.5 3.5 2e-7 18.5h-19m14-22v5h5m-16 7h-2c-1 0-2 0.5-2 1.5v1.5s1e-8 0.5 0 1.5 1 1.5 2 1.5h2m6.25-6h-2.5c-1.5 0-2 0.5-2 1.5s0.5 1.5 2 1.5 2 0.5 2 1.5-0.5 1.5-2 1.5h-2.5m12.25-7v0.5c0 0.5-2.5 6.5-2.5 6.5h-0.5s-2.5-6-2.5-6.5v-0.5\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1.5\"/>\n</svg>",
    arrowenter: "\n<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"currentColor\" d=\"m4.64119 12.5 2.87283 2.7038c.30163.2839.31602.7586.03213 1.0602-.28389.3017-.75854.316-1.06017.0321l-4.25-4c-.15059-.1417-.23598-.3393-.23598-.5461s.08539-.4044.23598-.5462l4.25-3.99995c.30163-.28389.77628-.2695 1.06017.03213s.2695.77628-.03213 1.06017l-2.87284 2.70385h10.10882c.9665 0 1.75-.7835 1.75-1.75v-4.5c0-.41421.3358-.75.75-.75s.75.33579.75.75v4.5c0 1.7949-1.4551 3.25-3.25 3.25z\"/>\n</svg>",
    arrowtab: "\n<svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill=\"currentColor\" d=\"m18.2071068 11.2928932-6.5-6.49999998c-.3905243-.39052429-1.0236893-.39052429-1.4142136 0-.36048394.36048396-.38821348.92771502-.0831886 1.32000622l.0831886.09420734 4.7931068 4.79289322h-11.086c-.51283584 0-.93550716.3860402-.99327227.8833789l-.00672773.1166211c0 .5128358.38604019.9355072.88337887.9932723l.11662113.0067277h11.086l-4.7931068 4.7928932c-.36048394.360484-.38821348.927715-.0831886 1.3200062l.0831886.0942074c.360484.3604839.927715.3882135 1.3200062.0831886l.0942074-.0831886 6.5-6.5c.3604839-.360484.3882135-.927715.0831886-1.3200062l-.0831886-.0942074-6.5-6.49999998zm2.7928932 7.2071068v-13c0-.55228475-.4477153-1-1-1s-1 .44771525-1 1v13c0 .5522847.4477153 1 1 1s1-.4477153 1-1z\" fill=\"#212121\"/>\n</svg>",
};
var addIcons = function () {
    Object.keys(icons).forEach(function (key) {
        // Don't add the 'help' icon here as it will overwrite the native one.
        if (key !== 'help') {
            obsidian.addIcon(key, icons[key]);
        }
    });
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var lib$1 = {};

var point = {};

Object.defineProperty(point, "__esModule", { value: true });
point.Point = void 0;
/**
 * A `Point` represents a point in the text editor.
 */
class Point {
    /**
     * Creates a new `Point` object.
     *
     * @param row - Row of the point, starts from 0.
     * @param column - Column of the point, starts from 0.
     */
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
    /**
     * Checks if the point is equal to another point.
     */
    equals(point) {
        return this.row === point.row && this.column === point.column;
    }
}
point.Point = Point;

var range$1 = {};

Object.defineProperty(range$1, "__esModule", { value: true });
range$1.Range = void 0;
/**
 * A `Range` object represents a range in the text editor.
 */
let Range$1 = class Range {
    /**
     * Creates a new `Range` object.
     *
     * @param start - The start point of the range.
     * @param end - The end point of the range.
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};
range$1.Range = Range$1;

var focus = {};

Object.defineProperty(focus, "__esModule", { value: true });
focus.Focus = void 0;
/**
 * A `Focus` object represents which cell is focused in the table.
 *
 * Note that `row` and `column` properties specifiy a cell's position in the
 * table, not the cursor's position in the text editor as {@link Point} class.
 *
 * @private
 */
class Focus {
    /**
     * Creates a new `Focus` object.
     *
     * @param row - Row of the focused cell.
     * @param column - Column of the focused cell.
     * @param offset - Raw offset in the cell.
     */
    constructor(row, column, offset) {
        this.row = row;
        this.column = column;
        this.offset = offset;
    }
    /**
     * Checks if two focuses point the same cell.
     * Offsets are ignored.
     */
    posEquals(focus) {
        return this.row === focus.row && this.column === focus.column;
    }
    /**
     * Creates a copy of the focus object by setting its row to the specified value.
     *
     * @param row - Row of the focused cell.
     * @returns A new focus object with the specified row.
     */
    setRow(row) {
        return new Focus(row, this.column, this.offset);
    }
    /**
     * Creates a copy of the focus object by setting its column to the specified value.
     *
     * @param column - Column of the focused cell.
     * @returns A new focus object with the specified column.
     */
    setColumn(column) {
        return new Focus(this.row, column, this.offset);
    }
    /**
     * Creates a copy of the focus object by setting its offset to the specified value.
     *
     * @param offset - Offset in the focused cell.
     * @returns A new focus object with the specified offset.
     */
    setOffset(offset) {
        return new Focus(this.row, this.column, offset);
    }
}
focus.Focus = Focus;

var alignment = {};

Object.defineProperty(alignment, "__esModule", { value: true });
alignment.HeaderAlignment = alignment.DefaultAlignment = alignment.Alignment = void 0;
/**
 * Represents column alignment.
 *
 * - `Alignment.NONE` - Use default alignment.
 * - `Alignment.LEFT` - Align left.
 * - `Alignment.RIGHT` - Align right.
 * - `Alignment.CENTER` - Align center.
 *
 */
var Alignment;
(function (Alignment) {
    Alignment["NONE"] = "none";
    Alignment["LEFT"] = "left";
    Alignment["RIGHT"] = "right";
    Alignment["CENTER"] = "center";
})(Alignment || (alignment.Alignment = Alignment = {}));
/**
 * Represents default column alignment
 *
 * - `DefaultAlignment.LEFT` - Align left.
 * - `DefaultAlignment.RIGHT` - Align right.
 * - `DefaultAlignment.CENTER` - Align center.
 *
 */
var DefaultAlignment;
(function (DefaultAlignment) {
    DefaultAlignment["LEFT"] = "left";
    DefaultAlignment["RIGHT"] = "right";
    DefaultAlignment["CENTER"] = "center";
})(DefaultAlignment || (alignment.DefaultAlignment = DefaultAlignment = {}));
/**
 * Represents alignment of header cells.
 *
 * - `HeaderAlignment.FOLLOW` - Follow column's alignment.
 * - `HeaderAlignment.LEFT` - Align left.
 * - `HeaderAlignment.RIGHT` - Align right.
 * - `HeaderAlignment.CENTER` - Align center.
 *
 */
var HeaderAlignment;
(function (HeaderAlignment) {
    HeaderAlignment["FOLLOW"] = "follow";
    HeaderAlignment["LEFT"] = "left";
    HeaderAlignment["RIGHT"] = "right";
    HeaderAlignment["CENTER"] = "center";
})(HeaderAlignment || (alignment.HeaderAlignment = HeaderAlignment = {}));

var tableCell = {};

Object.defineProperty(tableCell, "__esModule", { value: true });
tableCell.TableCell = void 0;
const alignment_1 = alignment;
/**
 * A `TableCell` object represents a table cell.
 *
 * @private
 */
class TableCell {
    /**
     * Creates a new `TableCell` object.
     *
     * @param rawContent - Raw content of the cell.
     */
    constructor(rawContent) {
        this.rawContent = rawContent;
        this.content = rawContent.trim();
        this.paddingLeft =
            this.content === ''
                ? this.rawContent === ''
                    ? 0
                    : 1
                : this.rawContent.length - this.rawContent.trimLeft().length;
        this.paddingRight =
            this.rawContent.length - this.content.length - this.paddingLeft;
    }
    /**
     * Convers the cell to a text representation.
     *
     * @returns The raw content of the cell.
     */
    toText() {
        return this.rawContent;
    }
    /**
     * Checks if the cell is a delimiter i.e. it only contains hyphens `-` with optional one
     * leading and trailing colons `:`.
     *
     * @returns `true` if the cell is a delimiter.
     */
    isDelimiter() {
        return /^\s*:?-+:?\s*$/.test(this.rawContent);
    }
    /**
     * Returns the alignment the cell represents.
     *
     * @returns The alignment the cell represents; `undefined` if the cell is not a delimiter.
     */
    getAlignment() {
        if (!this.isDelimiter()) {
            return undefined;
        }
        if (this.content[0] === ':') {
            if (this.content[this.content.length - 1] === ':') {
                return alignment_1.Alignment.CENTER;
            }
            return alignment_1.Alignment.LEFT;
        }
        if (this.content[this.content.length - 1] === ':') {
            return alignment_1.Alignment.RIGHT;
        }
        return alignment_1.Alignment.NONE;
    }
    /**
     * Computes a relative position in the trimmed content from that in the raw content.
     *
     * @param rawOffset - Relative position in the raw content.
     * @returns - Relative position in the trimmed content.
     */
    computeContentOffset(rawOffset) {
        if (this.content === '') {
            return 0;
        }
        if (rawOffset < this.paddingLeft) {
            return 0;
        }
        if (rawOffset < this.paddingLeft + this.content.length) {
            return rawOffset - this.paddingLeft;
        }
        return this.content.length;
    }
    /**
     * Computes a relative position in the raw content from that in the trimmed content.
     *
     * @param contentOffset - Relative position in the trimmed content.
     * @returns - Relative position in the raw content.
     */
    computeRawOffset(contentOffset) {
        return contentOffset + this.paddingLeft;
    }
}
tableCell.TableCell = TableCell;

var tableRow = {};

Object.defineProperty(tableRow, "__esModule", { value: true });
tableRow.TableRow = void 0;
const table_cell_1 = tableCell;
/**
 * A `TableRow` object represents a table row.
 *
 * @private
 */
class TableRow {
    /**
     * Creates a new `TableRow` objec.
     *
     * @param cells - Cells that the row contains.
     * @param marginLeft - Margin string at the left of the row.
     * @param marginRight - Margin string at the right of the row.
     */
    constructor(cells, marginLeft, marginRight) {
        this._cells = cells.slice();
        this.marginLeft = marginLeft;
        this.marginRight = marginRight;
    }
    /**
     * Gets the number of the cells in the row.
     */
    getWidth() {
        return this._cells.length;
    }
    /**
     * Returns the cells that the row contains.
     */
    getCells() {
        return this._cells.slice();
    }
    /**
     * Gets a cell at the specified index.
     *
     * @param index - Index.
     * @returns The cell at the specified index if exists; `undefined` if no cell is found.
     */
    getCellAt(index) {
        return this._cells[index];
    }
    /**
     * Sets a cell in the row to a new value, returning a copy of the row
     * with the modified value.
     *
     * If an invalid index is provided, the row will be unchanged.
     */
    setCellAt(index, value) {
        const cells = this.getCells(); // a copy
        cells[index] = new table_cell_1.TableCell(value);
        return new TableRow(cells, this.marginLeft, this.marginRight);
    }
    /**
     * Convers the row to a text representation.
     */
    toText() {
        if (this._cells.length === 0) {
            return this.marginLeft;
        }
        const cells = this._cells.map((cell) => cell.toText()).join('|');
        return `${this.marginLeft}|${cells}|${this.marginRight}`;
    }
    /**
     * Checks if the row is a delimiter or not.
     *
     * @returns `true` if the row is a delimiter i.e. all the cells contained are delimiters.
     */
    isDelimiter() {
        return this._cells.every((cell) => cell.isDelimiter());
    }
}
tableRow.TableRow = TableRow;

var table = {};

var calc = {};

var neverthrow = {};

(function (exports) {
	/**
	 * Retrieved from
	 *   https://github.com/supermacro/neverthrow
	 *
	 * MIT License
	 * Copyright (c) 2019 Giorgio Delgado
	 */
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Err = exports.Ok = exports.err = exports.ok = void 0;
	const ok = (value) => new Ok(value);
	exports.ok = ok;
	const err = (err) => new Err(err);
	exports.err = err;
	class Ok {
	    constructor(value) {
	        this.value = value;
	        this.match = (ok, _err) => ok(this.value);
	    }
	    isOk() {
	        return true;
	    }
	    isErr() {
	        return !this.isOk();
	    }
	    map(f) {
	        return (0, exports.ok)(f(this.value));
	    }
	    mapErr(_f) {
	        return (0, exports.ok)(this.value);
	    }
	    // add info on how this is really useful for converting a
	    // Result<Result<T, E2>, E1>
	    // into a Result<T, E2>
	    andThen(f) {
	        return f(this.value);
	    }
	    unwrapOr(_v) {
	        return this.value;
	    }
	    _unsafeUnwrap() {
	        return this.value;
	    }
	    _unsafeUnwrapErr() {
	        throw new Error('Called `_unsafeUnwrapErr` on an Ok');
	    }
	}
	exports.Ok = Ok;
	class Err {
	    constructor(error) {
	        this.error = error;
	        this.match = (_ok, err) => err(this.error);
	    }
	    isOk() {
	        return false;
	    }
	    isErr() {
	        return !this.isOk();
	    }
	    map(_f) {
	        return (0, exports.err)(this.error);
	    }
	    mapErr(f) {
	        return (0, exports.err)(f(this.error));
	    }
	    andThen(_f) {
	        return (0, exports.err)(this.error);
	    }
	    unwrapOr(v) {
	        return v;
	    }
	    _unsafeUnwrap() {
	        throw new Error('Called `_unsafeUnwrap` on an Err');
	    }
	    _unsafeUnwrapErr() {
	        return this.error;
	    }
	}
	exports.Err = Err; 
} (neverthrow));

var algebraic_operation = {};

var ast_utils = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.prettyPrintAST = exports.checkChildLength = exports.checkType = exports.errRelativeReferenceIndex = exports.errIndex0 = void 0;
	exports.errIndex0 = new Error('Index 0 used to create a reference');
	exports.errRelativeReferenceIndex = new Error('Can not use relative reference where absolute reference is required');
	const checkType = (ast, ...expectedTypes) => {
	    if (expectedTypes.indexOf(ast.type) >= 0) {
	        return;
	    }
	    return new Error(`Formula element '${ast.text}' is a ${ast.type} but expected ` +
	        `one of ${expectedTypes} in this position.`);
	};
	exports.checkType = checkType;
	const checkChildLength = (ast, len) => {
	    if (ast.children.length === len) {
	        return;
	    }
	    return new Error(`Formula element '${ast.text}' was expected to have ${len} ` +
	        `elements, but had ${ast.children.length}`);
	};
	exports.checkChildLength = checkChildLength;
	const prettyPrintAST = (token, level = 0) => {
	    console.log('  '.repeat(level) +
	        `|-${token.type}${token.children.length === 0 ? '=' + token.text : ''}`);
	    if (token.children) {
	        token.children.forEach((c) => {
	            (0, exports.prettyPrintAST)(c, level + 1);
	        });
	    }
	};
	exports.prettyPrintAST = prettyPrintAST; 
} (ast_utils));

var results = {};

var decimal = {exports: {}};

(function (module) {
(function (globalScope) {


	  /*!
	   *  decimal.js v10.4.3
	   *  An arbitrary-precision Decimal type for JavaScript.
	   *  https://github.com/MikeMcl/decimal.js
	   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
	   *  MIT Licence
	   */


	  // -----------------------------------  EDITABLE DEFAULTS  ------------------------------------ //


	    // The maximum exponent magnitude.
	    // The limit on the value of `toExpNeg`, `toExpPos`, `minE` and `maxE`.
	  var EXP_LIMIT = 9e15,                      // 0 to 9e15

	    // The limit on the value of `precision`, and on the value of the first argument to
	    // `toDecimalPlaces`, `toExponential`, `toFixed`, `toPrecision` and `toSignificantDigits`.
	    MAX_DIGITS = 1e9,                        // 0 to 1e9

	    // Base conversion alphabet.
	    NUMERALS = '0123456789abcdef',

	    // The natural logarithm of 10 (1025 digits).
	    LN10 = '2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058',

	    // Pi (1025 digits).
	    PI = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789',


	    // The initial configuration properties of the Decimal constructor.
	    DEFAULTS = {

	      // These values must be integers within the stated ranges (inclusive).
	      // Most of these values can be changed at run-time using the `Decimal.config` method.

	      // The maximum number of significant digits of the result of a calculation or base conversion.
	      // E.g. `Decimal.config({ precision: 20 });`
	      precision: 20,                         // 1 to MAX_DIGITS

	      // The rounding mode used when rounding to `precision`.
	      //
	      // ROUND_UP         0 Away from zero.
	      // ROUND_DOWN       1 Towards zero.
	      // ROUND_CEIL       2 Towards +Infinity.
	      // ROUND_FLOOR      3 Towards -Infinity.
	      // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
	      // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
	      // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
	      // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
	      // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
	      //
	      // E.g.
	      // `Decimal.rounding = 4;`
	      // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
	      rounding: 4,                           // 0 to 8

	      // The modulo mode used when calculating the modulus: a mod n.
	      // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
	      // The remainder (r) is calculated as: r = a - n * q.
	      //
	      // UP         0 The remainder is positive if the dividend is negative, else is negative.
	      // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
	      // FLOOR      3 The remainder has the same sign as the divisor (Python %).
	      // HALF_EVEN  6 The IEEE 754 remainder function.
	      // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
	      //
	      // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
	      // division (9) are commonly used for the modulus operation. The other rounding modes can also
	      // be used, but they may not give useful results.
	      modulo: 1,                             // 0 to 9

	      // The exponent value at and beneath which `toString` returns exponential notation.
	      // JavaScript numbers: -7
	      toExpNeg: -7,                          // 0 to -EXP_LIMIT

	      // The exponent value at and above which `toString` returns exponential notation.
	      // JavaScript numbers: 21
	      toExpPos:  21,                         // 0 to EXP_LIMIT

	      // The minimum exponent value, beneath which underflow to zero occurs.
	      // JavaScript numbers: -324  (5e-324)
	      minE: -EXP_LIMIT,                      // -1 to -EXP_LIMIT

	      // The maximum exponent value, above which overflow to Infinity occurs.
	      // JavaScript numbers: 308  (1.7976931348623157e+308)
	      maxE: EXP_LIMIT,                       // 1 to EXP_LIMIT

	      // Whether to use cryptographically-secure random number generation, if available.
	      crypto: false                          // true/false
	    },


	  // ----------------------------------- END OF EDITABLE DEFAULTS ------------------------------- //


	    Decimal, inexact, noConflict, quadrant,
	    external = true,

	    decimalError = '[DecimalError] ',
	    invalidArgument = decimalError + 'Invalid argument: ',
	    precisionLimitExceeded = decimalError + 'Precision limit exceeded',
	    cryptoUnavailable = decimalError + 'crypto unavailable',
	    tag = '[object Decimal]',

	    mathfloor = Math.floor,
	    mathpow = Math.pow,

	    isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
	    isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
	    isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
	    isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,

	    BASE = 1e7,
	    LOG_BASE = 7,
	    MAX_SAFE_INTEGER = 9007199254740991,

	    LN10_PRECISION = LN10.length - 1,
	    PI_PRECISION = PI.length - 1,

	    // Decimal.prototype object
	    P = { toStringTag: tag };


	  // Decimal prototype methods


	  /*
	   *  absoluteValue             abs
	   *  ceil
	   *  clampedTo                 clamp
	   *  comparedTo                cmp
	   *  cosine                    cos
	   *  cubeRoot                  cbrt
	   *  decimalPlaces             dp
	   *  dividedBy                 div
	   *  dividedToIntegerBy        divToInt
	   *  equals                    eq
	   *  floor
	   *  greaterThan               gt
	   *  greaterThanOrEqualTo      gte
	   *  hyperbolicCosine          cosh
	   *  hyperbolicSine            sinh
	   *  hyperbolicTangent         tanh
	   *  inverseCosine             acos
	   *  inverseHyperbolicCosine   acosh
	   *  inverseHyperbolicSine     asinh
	   *  inverseHyperbolicTangent  atanh
	   *  inverseSine               asin
	   *  inverseTangent            atan
	   *  isFinite
	   *  isInteger                 isInt
	   *  isNaN
	   *  isNegative                isNeg
	   *  isPositive                isPos
	   *  isZero
	   *  lessThan                  lt
	   *  lessThanOrEqualTo         lte
	   *  logarithm                 log
	   *  [maximum]                 [max]
	   *  [minimum]                 [min]
	   *  minus                     sub
	   *  modulo                    mod
	   *  naturalExponential        exp
	   *  naturalLogarithm          ln
	   *  negated                   neg
	   *  plus                      add
	   *  precision                 sd
	   *  round
	   *  sine                      sin
	   *  squareRoot                sqrt
	   *  tangent                   tan
	   *  times                     mul
	   *  toBinary
	   *  toDecimalPlaces           toDP
	   *  toExponential
	   *  toFixed
	   *  toFraction
	   *  toHexadecimal             toHex
	   *  toNearest
	   *  toNumber
	   *  toOctal
	   *  toPower                   pow
	   *  toPrecision
	   *  toSignificantDigits       toSD
	   *  toString
	   *  truncated                 trunc
	   *  valueOf                   toJSON
	   */


	  /*
	   * Return a new Decimal whose value is the absolute value of this Decimal.
	   *
	   */
	  P.absoluteValue = P.abs = function () {
	    var x = new this.constructor(this);
	    if (x.s < 0) x.s = 1;
	    return finalise(x);
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
	   * direction of positive Infinity.
	   *
	   */
	  P.ceil = function () {
	    return finalise(new this.constructor(this), this.e + 1, 2);
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal clamped to the range
	   * delineated by `min` and `max`.
	   *
	   * min {number|string|Decimal}
	   * max {number|string|Decimal}
	   *
	   */
	  P.clampedTo = P.clamp = function (min, max) {
	    var k,
	      x = this,
	      Ctor = x.constructor;
	    min = new Ctor(min);
	    max = new Ctor(max);
	    if (!min.s || !max.s) return new Ctor(NaN);
	    if (min.gt(max)) throw Error(invalidArgument + max);
	    k = x.cmp(min);
	    return k < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
	  };


	  /*
	   * Return
	   *   1    if the value of this Decimal is greater than the value of `y`,
	   *  -1    if the value of this Decimal is less than the value of `y`,
	   *   0    if they have the same value,
	   *   NaN  if the value of either Decimal is NaN.
	   *
	   */
	  P.comparedTo = P.cmp = function (y) {
	    var i, j, xdL, ydL,
	      x = this,
	      xd = x.d,
	      yd = (y = new x.constructor(y)).d,
	      xs = x.s,
	      ys = y.s;

	    // Either NaN or ±Infinity?
	    if (!xd || !yd) {
	      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
	    }

	    // Either zero?
	    if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;

	    // Signs differ?
	    if (xs !== ys) return xs;

	    // Compare exponents.
	    if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;

	    xdL = xd.length;
	    ydL = yd.length;

	    // Compare digit by digit.
	    for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
	      if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
	    }

	    // Compare lengths.
	    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
	  };


	  /*
	   * Return a new Decimal whose value is the cosine of the value in radians of this Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-1, 1]
	   *
	   * cos(0)         = 1
	   * cos(-0)        = 1
	   * cos(Infinity)  = NaN
	   * cos(-Infinity) = NaN
	   * cos(NaN)       = NaN
	   *
	   */
	  P.cosine = P.cos = function () {
	    var pr, rm,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.d) return new Ctor(NaN);

	    // cos(0) = cos(-0) = 1
	    if (!x.d[0]) return new Ctor(1);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
	    Ctor.rounding = 1;

	    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));

	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
	  };


	  /*
	   *
	   * Return a new Decimal whose value is the cube root of the value of this Decimal, rounded to
	   * `precision` significant digits using rounding mode `rounding`.
	   *
	   *  cbrt(0)  =  0
	   *  cbrt(-0) = -0
	   *  cbrt(1)  =  1
	   *  cbrt(-1) = -1
	   *  cbrt(N)  =  N
	   *  cbrt(-I) = -I
	   *  cbrt(I)  =  I
	   *
	   * Math.cbrt(x) = (x < 0 ? -Math.pow(-x, 1/3) : Math.pow(x, 1/3))
	   *
	   */
	  P.cubeRoot = P.cbrt = function () {
	    var e, m, n, r, rep, s, sd, t, t3, t3plusx,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.isFinite() || x.isZero()) return new Ctor(x);
	    external = false;

	    // Initial estimate.
	    s = x.s * mathpow(x.s * x, 1 / 3);

	     // Math.cbrt underflow/overflow?
	     // Pass x to Math.pow as integer, then adjust the exponent of the result.
	    if (!s || Math.abs(s) == 1 / 0) {
	      n = digitsToString(x.d);
	      e = x.e;

	      // Adjust n exponent so it is a multiple of 3 away from x exponent.
	      if (s = (e - n.length + 1) % 3) n += (s == 1 || s == -2 ? '0' : '00');
	      s = mathpow(n, 1 / 3);

	      // Rarely, e may be one less than the result exponent value.
	      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));

	      if (s == 1 / 0) {
	        n = '5e' + e;
	      } else {
	        n = s.toExponential();
	        n = n.slice(0, n.indexOf('e') + 1) + e;
	      }

	      r = new Ctor(n);
	      r.s = x.s;
	    } else {
	      r = new Ctor(s.toString());
	    }

	    sd = (e = Ctor.precision) + 3;

	    // Halley's method.
	    // TODO? Compare Newton's method.
	    for (;;) {
	      t = r;
	      t3 = t.times(t).times(t);
	      t3plusx = t3.plus(x);
	      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);

	      // TODO? Replace with for-loop and checkRoundingDigits.
	      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
	        n = n.slice(sd - 3, sd + 1);

	        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or 4999
	        // , i.e. approaching a rounding boundary, continue the iteration.
	        if (n == '9999' || !rep && n == '4999') {

	          // On the first iteration only, check to see if rounding up gives the exact result as the
	          // nines may infinitely repeat.
	          if (!rep) {
	            finalise(t, e + 1, 0);

	            if (t.times(t).times(t).eq(x)) {
	              r = t;
	              break;
	            }
	          }

	          sd += 4;
	          rep = 1;
	        } else {

	          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
	          // If not, then there are further digits and m will be truthy.
	          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

	            // Truncate to the first rounding digit.
	            finalise(r, e + 1, 1);
	            m = !r.times(r).times(r).eq(x);
	          }

	          break;
	        }
	      }
	    }

	    external = true;

	    return finalise(r, e, Ctor.rounding, m);
	  };


	  /*
	   * Return the number of decimal places of the value of this Decimal.
	   *
	   */
	  P.decimalPlaces = P.dp = function () {
	    var w,
	      d = this.d,
	      n = NaN;

	    if (d) {
	      w = d.length - 1;
	      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;

	      // Subtract the number of trailing zeros of the last word.
	      w = d[w];
	      if (w) for (; w % 10 == 0; w /= 10) n--;
	      if (n < 0) n = 0;
	    }

	    return n;
	  };


	  /*
	   *  n / 0 = I
	   *  n / N = N
	   *  n / I = 0
	   *  0 / n = 0
	   *  0 / 0 = N
	   *  0 / N = N
	   *  0 / I = 0
	   *  N / n = N
	   *  N / 0 = N
	   *  N / N = N
	   *  N / I = N
	   *  I / n = I
	   *  I / 0 = I
	   *  I / N = N
	   *  I / I = N
	   *
	   * Return a new Decimal whose value is the value of this Decimal divided by `y`, rounded to
	   * `precision` significant digits using rounding mode `rounding`.
	   *
	   */
	  P.dividedBy = P.div = function (y) {
	    return divide(this, new this.constructor(y));
	  };


	  /*
	   * Return a new Decimal whose value is the integer part of dividing the value of this Decimal
	   * by the value of `y`, rounded to `precision` significant digits using rounding mode `rounding`.
	   *
	   */
	  P.dividedToIntegerBy = P.divToInt = function (y) {
	    var x = this,
	      Ctor = x.constructor;
	    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
	  };


	  /*
	   * Return true if the value of this Decimal is equal to the value of `y`, otherwise return false.
	   *
	   */
	  P.equals = P.eq = function (y) {
	    return this.cmp(y) === 0;
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number in the
	   * direction of negative Infinity.
	   *
	   */
	  P.floor = function () {
	    return finalise(new this.constructor(this), this.e + 1, 3);
	  };


	  /*
	   * Return true if the value of this Decimal is greater than the value of `y`, otherwise return
	   * false.
	   *
	   */
	  P.greaterThan = P.gt = function (y) {
	    return this.cmp(y) > 0;
	  };


	  /*
	   * Return true if the value of this Decimal is greater than or equal to the value of `y`,
	   * otherwise return false.
	   *
	   */
	  P.greaterThanOrEqualTo = P.gte = function (y) {
	    var k = this.cmp(y);
	    return k == 1 || k === 0;
	  };


	  /*
	   * Return a new Decimal whose value is the hyperbolic cosine of the value in radians of this
	   * Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [1, Infinity]
	   *
	   * cosh(x) = 1 + x^2/2! + x^4/4! + x^6/6! + ...
	   *
	   * cosh(0)         = 1
	   * cosh(-0)        = 1
	   * cosh(Infinity)  = Infinity
	   * cosh(-Infinity) = Infinity
	   * cosh(NaN)       = NaN
	   *
	   *  x        time taken (ms)   result
	   * 1000      9                 9.8503555700852349694e+433
	   * 10000     25                4.4034091128314607936e+4342
	   * 100000    171               1.4033316802130615897e+43429
	   * 1000000   3817              1.5166076984010437725e+434294
	   * 10000000  abandoned after 2 minute wait
	   *
	   * TODO? Compare performance of cosh(x) = 0.5 * (exp(x) + exp(-x))
	   *
	   */
	  P.hyperbolicCosine = P.cosh = function () {
	    var k, n, pr, rm, len,
	      x = this,
	      Ctor = x.constructor,
	      one = new Ctor(1);

	    if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
	    if (x.isZero()) return one;

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
	    Ctor.rounding = 1;
	    len = x.d.length;

	    // Argument reduction: cos(4x) = 1 - 8cos^2(x) + 8cos^4(x) + 1
	    // i.e. cos(x) = 1 - cos^2(x/4)(8 - 8cos^2(x/4))

	    // Estimate the optimum number of times to use the argument reduction.
	    // TODO? Estimation reused from cosine() and may not be optimal here.
	    if (len < 32) {
	      k = Math.ceil(len / 3);
	      n = (1 / tinyPow(4, k)).toString();
	    } else {
	      k = 16;
	      n = '2.3283064365386962890625e-10';
	    }

	    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);

	    // Reverse argument reduction
	    var cosh2_x,
	      i = k,
	      d8 = new Ctor(8);
	    for (; i--;) {
	      cosh2_x = x.times(x);
	      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
	    }

	    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
	  };


	  /*
	   * Return a new Decimal whose value is the hyperbolic sine of the value in radians of this
	   * Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-Infinity, Infinity]
	   *
	   * sinh(x) = x + x^3/3! + x^5/5! + x^7/7! + ...
	   *
	   * sinh(0)         = 0
	   * sinh(-0)        = -0
	   * sinh(Infinity)  = Infinity
	   * sinh(-Infinity) = -Infinity
	   * sinh(NaN)       = NaN
	   *
	   * x        time taken (ms)
	   * 10       2 ms
	   * 100      5 ms
	   * 1000     14 ms
	   * 10000    82 ms
	   * 100000   886 ms            1.4033316802130615897e+43429
	   * 200000   2613 ms
	   * 300000   5407 ms
	   * 400000   8824 ms
	   * 500000   13026 ms          8.7080643612718084129e+217146
	   * 1000000  48543 ms
	   *
	   * TODO? Compare performance of sinh(x) = 0.5 * (exp(x) - exp(-x))
	   *
	   */
	  P.hyperbolicSine = P.sinh = function () {
	    var k, pr, rm, len,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.isFinite() || x.isZero()) return new Ctor(x);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
	    Ctor.rounding = 1;
	    len = x.d.length;

	    if (len < 3) {
	      x = taylorSeries(Ctor, 2, x, x, true);
	    } else {

	      // Alternative argument reduction: sinh(3x) = sinh(x)(3 + 4sinh^2(x))
	      // i.e. sinh(x) = sinh(x/3)(3 + 4sinh^2(x/3))
	      // 3 multiplications and 1 addition

	      // Argument reduction: sinh(5x) = sinh(x)(5 + sinh^2(x)(20 + 16sinh^2(x)))
	      // i.e. sinh(x) = sinh(x/5)(5 + sinh^2(x/5)(20 + 16sinh^2(x/5)))
	      // 4 multiplications and 2 additions

	      // Estimate the optimum number of times to use the argument reduction.
	      k = 1.4 * Math.sqrt(len);
	      k = k > 16 ? 16 : k | 0;

	      x = x.times(1 / tinyPow(5, k));
	      x = taylorSeries(Ctor, 2, x, x, true);

	      // Reverse argument reduction
	      var sinh2_x,
	        d5 = new Ctor(5),
	        d16 = new Ctor(16),
	        d20 = new Ctor(20);
	      for (; k--;) {
	        sinh2_x = x.times(x);
	        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
	      }
	    }

	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return finalise(x, pr, rm, true);
	  };


	  /*
	   * Return a new Decimal whose value is the hyperbolic tangent of the value in radians of this
	   * Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-1, 1]
	   *
	   * tanh(x) = sinh(x) / cosh(x)
	   *
	   * tanh(0)         = 0
	   * tanh(-0)        = -0
	   * tanh(Infinity)  = 1
	   * tanh(-Infinity) = -1
	   * tanh(NaN)       = NaN
	   *
	   */
	  P.hyperbolicTangent = P.tanh = function () {
	    var pr, rm,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.isFinite()) return new Ctor(x.s);
	    if (x.isZero()) return new Ctor(x);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + 7;
	    Ctor.rounding = 1;

	    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
	  };


	  /*
	   * Return a new Decimal whose value is the arccosine (inverse cosine) in radians of the value of
	   * this Decimal.
	   *
	   * Domain: [-1, 1]
	   * Range: [0, pi]
	   *
	   * acos(x) = pi/2 - asin(x)
	   *
	   * acos(0)       = pi/2
	   * acos(-0)      = pi/2
	   * acos(1)       = 0
	   * acos(-1)      = pi
	   * acos(1/2)     = pi/3
	   * acos(-1/2)    = 2*pi/3
	   * acos(|x| > 1) = NaN
	   * acos(NaN)     = NaN
	   *
	   */
	  P.inverseCosine = P.acos = function () {
	    var halfPi,
	      x = this,
	      Ctor = x.constructor,
	      k = x.abs().cmp(1),
	      pr = Ctor.precision,
	      rm = Ctor.rounding;

	    if (k !== -1) {
	      return k === 0
	        // |x| is 1
	        ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0)
	        // |x| > 1 or x is NaN
	        : new Ctor(NaN);
	    }

	    if (x.isZero()) return getPi(Ctor, pr + 4, rm).times(0.5);

	    // TODO? Special case acos(0.5) = pi/3 and acos(-0.5) = 2*pi/3

	    Ctor.precision = pr + 6;
	    Ctor.rounding = 1;

	    x = x.asin();
	    halfPi = getPi(Ctor, pr + 4, rm).times(0.5);

	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return halfPi.minus(x);
	  };


	  /*
	   * Return a new Decimal whose value is the inverse of the hyperbolic cosine in radians of the
	   * value of this Decimal.
	   *
	   * Domain: [1, Infinity]
	   * Range: [0, Infinity]
	   *
	   * acosh(x) = ln(x + sqrt(x^2 - 1))
	   *
	   * acosh(x < 1)     = NaN
	   * acosh(NaN)       = NaN
	   * acosh(Infinity)  = Infinity
	   * acosh(-Infinity) = NaN
	   * acosh(0)         = NaN
	   * acosh(-0)        = NaN
	   * acosh(1)         = 0
	   * acosh(-1)        = NaN
	   *
	   */
	  P.inverseHyperbolicCosine = P.acosh = function () {
	    var pr, rm,
	      x = this,
	      Ctor = x.constructor;

	    if (x.lte(1)) return new Ctor(x.eq(1) ? 0 : NaN);
	    if (!x.isFinite()) return new Ctor(x);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
	    Ctor.rounding = 1;
	    external = false;

	    x = x.times(x).minus(1).sqrt().plus(x);

	    external = true;
	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return x.ln();
	  };


	  /*
	   * Return a new Decimal whose value is the inverse of the hyperbolic sine in radians of the value
	   * of this Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-Infinity, Infinity]
	   *
	   * asinh(x) = ln(x + sqrt(x^2 + 1))
	   *
	   * asinh(NaN)       = NaN
	   * asinh(Infinity)  = Infinity
	   * asinh(-Infinity) = -Infinity
	   * asinh(0)         = 0
	   * asinh(-0)        = -0
	   *
	   */
	  P.inverseHyperbolicSine = P.asinh = function () {
	    var pr, rm,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.isFinite() || x.isZero()) return new Ctor(x);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
	    Ctor.rounding = 1;
	    external = false;

	    x = x.times(x).plus(1).sqrt().plus(x);

	    external = true;
	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return x.ln();
	  };


	  /*
	   * Return a new Decimal whose value is the inverse of the hyperbolic tangent in radians of the
	   * value of this Decimal.
	   *
	   * Domain: [-1, 1]
	   * Range: [-Infinity, Infinity]
	   *
	   * atanh(x) = 0.5 * ln((1 + x) / (1 - x))
	   *
	   * atanh(|x| > 1)   = NaN
	   * atanh(NaN)       = NaN
	   * atanh(Infinity)  = NaN
	   * atanh(-Infinity) = NaN
	   * atanh(0)         = 0
	   * atanh(-0)        = -0
	   * atanh(1)         = Infinity
	   * atanh(-1)        = -Infinity
	   *
	   */
	  P.inverseHyperbolicTangent = P.atanh = function () {
	    var pr, rm, wpr, xsd,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.isFinite()) return new Ctor(NaN);
	    if (x.e >= 0) return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    xsd = x.sd();

	    if (Math.max(xsd, pr) < 2 * -x.e - 1) return finalise(new Ctor(x), pr, rm, true);

	    Ctor.precision = wpr = xsd - x.e;

	    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);

	    Ctor.precision = pr + 4;
	    Ctor.rounding = 1;

	    x = x.ln();

	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return x.times(0.5);
	  };


	  /*
	   * Return a new Decimal whose value is the arcsine (inverse sine) in radians of the value of this
	   * Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-pi/2, pi/2]
	   *
	   * asin(x) = 2*atan(x/(1 + sqrt(1 - x^2)))
	   *
	   * asin(0)       = 0
	   * asin(-0)      = -0
	   * asin(1/2)     = pi/6
	   * asin(-1/2)    = -pi/6
	   * asin(1)       = pi/2
	   * asin(-1)      = -pi/2
	   * asin(|x| > 1) = NaN
	   * asin(NaN)     = NaN
	   *
	   * TODO? Compare performance of Taylor series.
	   *
	   */
	  P.inverseSine = P.asin = function () {
	    var halfPi, k,
	      pr, rm,
	      x = this,
	      Ctor = x.constructor;

	    if (x.isZero()) return new Ctor(x);

	    k = x.abs().cmp(1);
	    pr = Ctor.precision;
	    rm = Ctor.rounding;

	    if (k !== -1) {

	      // |x| is 1
	      if (k === 0) {
	        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
	        halfPi.s = x.s;
	        return halfPi;
	      }

	      // |x| > 1 or x is NaN
	      return new Ctor(NaN);
	    }

	    // TODO? Special case asin(1/2) = pi/6 and asin(-1/2) = -pi/6

	    Ctor.precision = pr + 6;
	    Ctor.rounding = 1;

	    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();

	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return x.times(2);
	  };


	  /*
	   * Return a new Decimal whose value is the arctangent (inverse tangent) in radians of the value
	   * of this Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-pi/2, pi/2]
	   *
	   * atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
	   *
	   * atan(0)         = 0
	   * atan(-0)        = -0
	   * atan(1)         = pi/4
	   * atan(-1)        = -pi/4
	   * atan(Infinity)  = pi/2
	   * atan(-Infinity) = -pi/2
	   * atan(NaN)       = NaN
	   *
	   */
	  P.inverseTangent = P.atan = function () {
	    var i, j, k, n, px, t, r, wpr, x2,
	      x = this,
	      Ctor = x.constructor,
	      pr = Ctor.precision,
	      rm = Ctor.rounding;

	    if (!x.isFinite()) {
	      if (!x.s) return new Ctor(NaN);
	      if (pr + 4 <= PI_PRECISION) {
	        r = getPi(Ctor, pr + 4, rm).times(0.5);
	        r.s = x.s;
	        return r;
	      }
	    } else if (x.isZero()) {
	      return new Ctor(x);
	    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
	      r = getPi(Ctor, pr + 4, rm).times(0.25);
	      r.s = x.s;
	      return r;
	    }

	    Ctor.precision = wpr = pr + 10;
	    Ctor.rounding = 1;

	    // TODO? if (x >= 1 && pr <= PI_PRECISION) atan(x) = halfPi * x.s - atan(1 / x);

	    // Argument reduction
	    // Ensure |x| < 0.42
	    // atan(x) = 2 * atan(x / (1 + sqrt(1 + x^2)))

	    k = Math.min(28, wpr / LOG_BASE + 2 | 0);

	    for (i = k; i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));

	    external = false;

	    j = Math.ceil(wpr / LOG_BASE);
	    n = 1;
	    x2 = x.times(x);
	    r = new Ctor(x);
	    px = x;

	    // atan(x) = x - x^3/3 + x^5/5 - x^7/7 + ...
	    for (; i !== -1;) {
	      px = px.times(x2);
	      t = r.minus(px.div(n += 2));

	      px = px.times(x2);
	      r = t.plus(px.div(n += 2));

	      if (r.d[j] !== void 0) for (i = j; r.d[i] === t.d[i] && i--;);
	    }

	    if (k) r = r.times(2 << (k - 1));

	    external = true;

	    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
	  };


	  /*
	   * Return true if the value of this Decimal is a finite number, otherwise return false.
	   *
	   */
	  P.isFinite = function () {
	    return !!this.d;
	  };


	  /*
	   * Return true if the value of this Decimal is an integer, otherwise return false.
	   *
	   */
	  P.isInteger = P.isInt = function () {
	    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
	  };


	  /*
	   * Return true if the value of this Decimal is NaN, otherwise return false.
	   *
	   */
	  P.isNaN = function () {
	    return !this.s;
	  };


	  /*
	   * Return true if the value of this Decimal is negative, otherwise return false.
	   *
	   */
	  P.isNegative = P.isNeg = function () {
	    return this.s < 0;
	  };


	  /*
	   * Return true if the value of this Decimal is positive, otherwise return false.
	   *
	   */
	  P.isPositive = P.isPos = function () {
	    return this.s > 0;
	  };


	  /*
	   * Return true if the value of this Decimal is 0 or -0, otherwise return false.
	   *
	   */
	  P.isZero = function () {
	    return !!this.d && this.d[0] === 0;
	  };


	  /*
	   * Return true if the value of this Decimal is less than `y`, otherwise return false.
	   *
	   */
	  P.lessThan = P.lt = function (y) {
	    return this.cmp(y) < 0;
	  };


	  /*
	   * Return true if the value of this Decimal is less than or equal to `y`, otherwise return false.
	   *
	   */
	  P.lessThanOrEqualTo = P.lte = function (y) {
	    return this.cmp(y) < 1;
	  };


	  /*
	   * Return the logarithm of the value of this Decimal to the specified base, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * If no base is specified, return log[10](arg).
	   *
	   * log[base](arg) = ln(arg) / ln(base)
	   *
	   * The result will always be correctly rounded if the base of the log is 10, and 'almost always'
	   * otherwise:
	   *
	   * Depending on the rounding mode, the result may be incorrectly rounded if the first fifteen
	   * rounding digits are [49]99999999999999 or [50]00000000000000. In that case, the maximum error
	   * between the result and the correctly rounded result will be one ulp (unit in the last place).
	   *
	   * log[-b](a)       = NaN
	   * log[0](a)        = NaN
	   * log[1](a)        = NaN
	   * log[NaN](a)      = NaN
	   * log[Infinity](a) = NaN
	   * log[b](0)        = -Infinity
	   * log[b](-0)       = -Infinity
	   * log[b](-a)       = NaN
	   * log[b](1)        = 0
	   * log[b](Infinity) = Infinity
	   * log[b](NaN)      = NaN
	   *
	   * [base] {number|string|Decimal} The base of the logarithm.
	   *
	   */
	  P.logarithm = P.log = function (base) {
	    var isBase10, d, denominator, k, inf, num, sd, r,
	      arg = this,
	      Ctor = arg.constructor,
	      pr = Ctor.precision,
	      rm = Ctor.rounding,
	      guard = 5;

	    // Default base is 10.
	    if (base == null) {
	      base = new Ctor(10);
	      isBase10 = true;
	    } else {
	      base = new Ctor(base);
	      d = base.d;

	      // Return NaN if base is negative, or non-finite, or is 0 or 1.
	      if (base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);

	      isBase10 = base.eq(10);
	    }

	    d = arg.d;

	    // Is arg negative, non-finite, 0 or 1?
	    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
	      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
	    }

	    // The result will have a non-terminating decimal expansion if base is 10 and arg is not an
	    // integer power of 10.
	    if (isBase10) {
	      if (d.length > 1) {
	        inf = true;
	      } else {
	        for (k = d[0]; k % 10 === 0;) k /= 10;
	        inf = k !== 1;
	      }
	    }

	    external = false;
	    sd = pr + guard;
	    num = naturalLogarithm(arg, sd);
	    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);

	    // The result will have 5 rounding digits.
	    r = divide(num, denominator, sd, 1);

	    // If at a rounding boundary, i.e. the result's rounding digits are [49]9999 or [50]0000,
	    // calculate 10 further digits.
	    //
	    // If the result is known to have an infinite decimal expansion, repeat this until it is clear
	    // that the result is above or below the boundary. Otherwise, if after calculating the 10
	    // further digits, the last 14 are nines, round up and assume the result is exact.
	    // Also assume the result is exact if the last 14 are zero.
	    //
	    // Example of a result that will be incorrectly rounded:
	    // log[1048576](4503599627370502) = 2.60000000000000009610279511444746...
	    // The above result correctly rounded using ROUND_CEIL to 1 decimal place should be 2.7, but it
	    // will be given as 2.6 as there are 15 zeros immediately after the requested decimal place, so
	    // the exact result would be assumed to be 2.6, which rounded using ROUND_CEIL to 1 decimal
	    // place is still 2.6.
	    if (checkRoundingDigits(r.d, k = pr, rm)) {

	      do {
	        sd += 10;
	        num = naturalLogarithm(arg, sd);
	        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
	        r = divide(num, denominator, sd, 1);

	        if (!inf) {

	          // Check for 14 nines from the 2nd rounding digit, as the first may be 4.
	          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14) {
	            r = finalise(r, pr + 1, 0);
	          }

	          break;
	        }
	      } while (checkRoundingDigits(r.d, k += 10, rm));
	    }

	    external = true;

	    return finalise(r, pr, rm);
	  };


	  /*
	   * Return a new Decimal whose value is the maximum of the arguments and the value of this Decimal.
	   *
	   * arguments {number|string|Decimal}
	   *
	  P.max = function () {
	    Array.prototype.push.call(arguments, this);
	    return maxOrMin(this.constructor, arguments, 'lt');
	  };
	   */


	  /*
	   * Return a new Decimal whose value is the minimum of the arguments and the value of this Decimal.
	   *
	   * arguments {number|string|Decimal}
	   *
	  P.min = function () {
	    Array.prototype.push.call(arguments, this);
	    return maxOrMin(this.constructor, arguments, 'gt');
	  };
	   */


	  /*
	   *  n - 0 = n
	   *  n - N = N
	   *  n - I = -I
	   *  0 - n = -n
	   *  0 - 0 = 0
	   *  0 - N = N
	   *  0 - I = -I
	   *  N - n = N
	   *  N - 0 = N
	   *  N - N = N
	   *  N - I = N
	   *  I - n = I
	   *  I - 0 = I
	   *  I - N = N
	   *  I - I = N
	   *
	   * Return a new Decimal whose value is the value of this Decimal minus `y`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   */
	  P.minus = P.sub = function (y) {
	    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd,
	      x = this,
	      Ctor = x.constructor;

	    y = new Ctor(y);

	    // If either is not finite...
	    if (!x.d || !y.d) {

	      // Return NaN if either is NaN.
	      if (!x.s || !y.s) y = new Ctor(NaN);

	      // Return y negated if x is finite and y is ±Infinity.
	      else if (x.d) y.s = -y.s;

	      // Return x if y is finite and x is ±Infinity.
	      // Return x if both are ±Infinity with different signs.
	      // Return NaN if both are ±Infinity with the same sign.
	      else y = new Ctor(y.d || x.s !== y.s ? x : NaN);

	      return y;
	    }

	    // If signs differ...
	    if (x.s != y.s) {
	      y.s = -y.s;
	      return x.plus(y);
	    }

	    xd = x.d;
	    yd = y.d;
	    pr = Ctor.precision;
	    rm = Ctor.rounding;

	    // If either is zero...
	    if (!xd[0] || !yd[0]) {

	      // Return y negated if x is zero and y is non-zero.
	      if (yd[0]) y.s = -y.s;

	      // Return x if y is zero and x is non-zero.
	      else if (xd[0]) y = new Ctor(x);

	      // Return zero if both are zero.
	      // From IEEE 754 (2008) 6.3: 0 - 0 = -0 - -0 = -0 when rounding to -Infinity.
	      else return new Ctor(rm === 3 ? -0 : 0);

	      return external ? finalise(y, pr, rm) : y;
	    }

	    // x and y are finite, non-zero numbers with the same sign.

	    // Calculate base 1e7 exponents.
	    e = mathfloor(y.e / LOG_BASE);
	    xe = mathfloor(x.e / LOG_BASE);

	    xd = xd.slice();
	    k = xe - e;

	    // If base 1e7 exponents differ...
	    if (k) {
	      xLTy = k < 0;

	      if (xLTy) {
	        d = xd;
	        k = -k;
	        len = yd.length;
	      } else {
	        d = yd;
	        e = xe;
	        len = xd.length;
	      }

	      // Numbers with massively different exponents would result in a very high number of
	      // zeros needing to be prepended, but this can be avoided while still ensuring correct
	      // rounding by limiting the number of zeros to `Math.ceil(pr / LOG_BASE) + 2`.
	      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;

	      if (k > i) {
	        k = i;
	        d.length = 1;
	      }

	      // Prepend zeros to equalise exponents.
	      d.reverse();
	      for (i = k; i--;) d.push(0);
	      d.reverse();

	    // Base 1e7 exponents equal.
	    } else {

	      // Check digits to determine which is the bigger number.

	      i = xd.length;
	      len = yd.length;
	      xLTy = i < len;
	      if (xLTy) len = i;

	      for (i = 0; i < len; i++) {
	        if (xd[i] != yd[i]) {
	          xLTy = xd[i] < yd[i];
	          break;
	        }
	      }

	      k = 0;
	    }

	    if (xLTy) {
	      d = xd;
	      xd = yd;
	      yd = d;
	      y.s = -y.s;
	    }

	    len = xd.length;

	    // Append zeros to `xd` if shorter.
	    // Don't add zeros to `yd` if shorter as subtraction only needs to start at `yd` length.
	    for (i = yd.length - len; i > 0; --i) xd[len++] = 0;

	    // Subtract yd from xd.
	    for (i = yd.length; i > k;) {

	      if (xd[--i] < yd[i]) {
	        for (j = i; j && xd[--j] === 0;) xd[j] = BASE - 1;
	        --xd[j];
	        xd[i] += BASE;
	      }

	      xd[i] -= yd[i];
	    }

	    // Remove trailing zeros.
	    for (; xd[--len] === 0;) xd.pop();

	    // Remove leading zeros and adjust exponent accordingly.
	    for (; xd[0] === 0; xd.shift()) --e;

	    // Zero?
	    if (!xd[0]) return new Ctor(rm === 3 ? -0 : 0);

	    y.d = xd;
	    y.e = getBase10Exponent(xd, e);

	    return external ? finalise(y, pr, rm) : y;
	  };


	  /*
	   *   n % 0 =  N
	   *   n % N =  N
	   *   n % I =  n
	   *   0 % n =  0
	   *  -0 % n = -0
	   *   0 % 0 =  N
	   *   0 % N =  N
	   *   0 % I =  0
	   *   N % n =  N
	   *   N % 0 =  N
	   *   N % N =  N
	   *   N % I =  N
	   *   I % n =  N
	   *   I % 0 =  N
	   *   I % N =  N
	   *   I % I =  N
	   *
	   * Return a new Decimal whose value is the value of this Decimal modulo `y`, rounded to
	   * `precision` significant digits using rounding mode `rounding`.
	   *
	   * The result depends on the modulo mode.
	   *
	   */
	  P.modulo = P.mod = function (y) {
	    var q,
	      x = this,
	      Ctor = x.constructor;

	    y = new Ctor(y);

	    // Return NaN if x is ±Infinity or NaN, or y is NaN or ±0.
	    if (!x.d || !y.s || y.d && !y.d[0]) return new Ctor(NaN);

	    // Return x if y is ±Infinity or x is ±0.
	    if (!y.d || x.d && !x.d[0]) {
	      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
	    }

	    // Prevent rounding of intermediate calculations.
	    external = false;

	    if (Ctor.modulo == 9) {

	      // Euclidian division: q = sign(y) * floor(x / abs(y))
	      // result = x - q * y    where  0 <= result < abs(y)
	      q = divide(x, y.abs(), 0, 3, 1);
	      q.s *= y.s;
	    } else {
	      q = divide(x, y, 0, Ctor.modulo, 1);
	    }

	    q = q.times(y);

	    external = true;

	    return x.minus(q);
	  };


	  /*
	   * Return a new Decimal whose value is the natural exponential of the value of this Decimal,
	   * i.e. the base e raised to the power the value of this Decimal, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   */
	  P.naturalExponential = P.exp = function () {
	    return naturalExponential(this);
	  };


	  /*
	   * Return a new Decimal whose value is the natural logarithm of the value of this Decimal,
	   * rounded to `precision` significant digits using rounding mode `rounding`.
	   *
	   */
	  P.naturalLogarithm = P.ln = function () {
	    return naturalLogarithm(this);
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal negated, i.e. as if multiplied by
	   * -1.
	   *
	   */
	  P.negated = P.neg = function () {
	    var x = new this.constructor(this);
	    x.s = -x.s;
	    return finalise(x);
	  };


	  /*
	   *  n + 0 = n
	   *  n + N = N
	   *  n + I = I
	   *  0 + n = n
	   *  0 + 0 = 0
	   *  0 + N = N
	   *  0 + I = I
	   *  N + n = N
	   *  N + 0 = N
	   *  N + N = N
	   *  N + I = N
	   *  I + n = I
	   *  I + 0 = I
	   *  I + N = N
	   *  I + I = I
	   *
	   * Return a new Decimal whose value is the value of this Decimal plus `y`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   */
	  P.plus = P.add = function (y) {
	    var carry, d, e, i, k, len, pr, rm, xd, yd,
	      x = this,
	      Ctor = x.constructor;

	    y = new Ctor(y);

	    // If either is not finite...
	    if (!x.d || !y.d) {

	      // Return NaN if either is NaN.
	      if (!x.s || !y.s) y = new Ctor(NaN);

	      // Return x if y is finite and x is ±Infinity.
	      // Return x if both are ±Infinity with the same sign.
	      // Return NaN if both are ±Infinity with different signs.
	      // Return y if x is finite and y is ±Infinity.
	      else if (!x.d) y = new Ctor(y.d || x.s === y.s ? x : NaN);

	      return y;
	    }

	     // If signs differ...
	    if (x.s != y.s) {
	      y.s = -y.s;
	      return x.minus(y);
	    }

	    xd = x.d;
	    yd = y.d;
	    pr = Ctor.precision;
	    rm = Ctor.rounding;

	    // If either is zero...
	    if (!xd[0] || !yd[0]) {

	      // Return x if y is zero.
	      // Return y if y is non-zero.
	      if (!yd[0]) y = new Ctor(x);

	      return external ? finalise(y, pr, rm) : y;
	    }

	    // x and y are finite, non-zero numbers with the same sign.

	    // Calculate base 1e7 exponents.
	    k = mathfloor(x.e / LOG_BASE);
	    e = mathfloor(y.e / LOG_BASE);

	    xd = xd.slice();
	    i = k - e;

	    // If base 1e7 exponents differ...
	    if (i) {

	      if (i < 0) {
	        d = xd;
	        i = -i;
	        len = yd.length;
	      } else {
	        d = yd;
	        e = k;
	        len = xd.length;
	      }

	      // Limit number of zeros prepended to max(ceil(pr / LOG_BASE), len) + 1.
	      k = Math.ceil(pr / LOG_BASE);
	      len = k > len ? k + 1 : len + 1;

	      if (i > len) {
	        i = len;
	        d.length = 1;
	      }

	      // Prepend zeros to equalise exponents. Note: Faster to use reverse then do unshifts.
	      d.reverse();
	      for (; i--;) d.push(0);
	      d.reverse();
	    }

	    len = xd.length;
	    i = yd.length;

	    // If yd is longer than xd, swap xd and yd so xd points to the longer array.
	    if (len - i < 0) {
	      i = len;
	      d = yd;
	      yd = xd;
	      xd = d;
	    }

	    // Only start adding at yd.length - 1 as the further digits of xd can be left as they are.
	    for (carry = 0; i;) {
	      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
	      xd[i] %= BASE;
	    }

	    if (carry) {
	      xd.unshift(carry);
	      ++e;
	    }

	    // Remove trailing zeros.
	    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
	    for (len = xd.length; xd[--len] == 0;) xd.pop();

	    y.d = xd;
	    y.e = getBase10Exponent(xd, e);

	    return external ? finalise(y, pr, rm) : y;
	  };


	  /*
	   * Return the number of significant digits of the value of this Decimal.
	   *
	   * [z] {boolean|number} Whether to count integer-part trailing zeros: true, false, 1 or 0.
	   *
	   */
	  P.precision = P.sd = function (z) {
	    var k,
	      x = this;

	    if (z !== void 0 && z !== !!z && z !== 1 && z !== 0) throw Error(invalidArgument + z);

	    if (x.d) {
	      k = getPrecision(x.d);
	      if (z && x.e + 1 > k) k = x.e + 1;
	    } else {
	      k = NaN;
	    }

	    return k;
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal rounded to a whole number using
	   * rounding mode `rounding`.
	   *
	   */
	  P.round = function () {
	    var x = this,
	      Ctor = x.constructor;

	    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
	  };


	  /*
	   * Return a new Decimal whose value is the sine of the value in radians of this Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-1, 1]
	   *
	   * sin(x) = x - x^3/3! + x^5/5! - ...
	   *
	   * sin(0)         = 0
	   * sin(-0)        = -0
	   * sin(Infinity)  = NaN
	   * sin(-Infinity) = NaN
	   * sin(NaN)       = NaN
	   *
	   */
	  P.sine = P.sin = function () {
	    var pr, rm,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.isFinite()) return new Ctor(NaN);
	    if (x.isZero()) return new Ctor(x);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
	    Ctor.rounding = 1;

	    x = sine(Ctor, toLessThanHalfPi(Ctor, x));

	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
	  };


	  /*
	   * Return a new Decimal whose value is the square root of this Decimal, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   *  sqrt(-n) =  N
	   *  sqrt(N)  =  N
	   *  sqrt(-I) =  N
	   *  sqrt(I)  =  I
	   *  sqrt(0)  =  0
	   *  sqrt(-0) = -0
	   *
	   */
	  P.squareRoot = P.sqrt = function () {
	    var m, n, sd, r, rep, t,
	      x = this,
	      d = x.d,
	      e = x.e,
	      s = x.s,
	      Ctor = x.constructor;

	    // Negative/NaN/Infinity/zero?
	    if (s !== 1 || !d || !d[0]) {
	      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
	    }

	    external = false;

	    // Initial estimate.
	    s = Math.sqrt(+x);

	    // Math.sqrt underflow/overflow?
	    // Pass x to Math.sqrt as integer, then adjust the exponent of the result.
	    if (s == 0 || s == 1 / 0) {
	      n = digitsToString(d);

	      if ((n.length + e) % 2 == 0) n += '0';
	      s = Math.sqrt(n);
	      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);

	      if (s == 1 / 0) {
	        n = '5e' + e;
	      } else {
	        n = s.toExponential();
	        n = n.slice(0, n.indexOf('e') + 1) + e;
	      }

	      r = new Ctor(n);
	    } else {
	      r = new Ctor(s.toString());
	    }

	    sd = (e = Ctor.precision) + 3;

	    // Newton-Raphson iteration.
	    for (;;) {
	      t = r;
	      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);

	      // TODO? Replace with for-loop and checkRoundingDigits.
	      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
	        n = n.slice(sd - 3, sd + 1);

	        // The 4th rounding digit may be in error by -1 so if the 4 rounding digits are 9999 or
	        // 4999, i.e. approaching a rounding boundary, continue the iteration.
	        if (n == '9999' || !rep && n == '4999') {

	          // On the first iteration only, check to see if rounding up gives the exact result as the
	          // nines may infinitely repeat.
	          if (!rep) {
	            finalise(t, e + 1, 0);

	            if (t.times(t).eq(x)) {
	              r = t;
	              break;
	            }
	          }

	          sd += 4;
	          rep = 1;
	        } else {

	          // If the rounding digits are null, 0{0,4} or 50{0,3}, check for an exact result.
	          // If not, then there are further digits and m will be truthy.
	          if (!+n || !+n.slice(1) && n.charAt(0) == '5') {

	            // Truncate to the first rounding digit.
	            finalise(r, e + 1, 1);
	            m = !r.times(r).eq(x);
	          }

	          break;
	        }
	      }
	    }

	    external = true;

	    return finalise(r, e, Ctor.rounding, m);
	  };


	  /*
	   * Return a new Decimal whose value is the tangent of the value in radians of this Decimal.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-Infinity, Infinity]
	   *
	   * tan(0)         = 0
	   * tan(-0)        = -0
	   * tan(Infinity)  = NaN
	   * tan(-Infinity) = NaN
	   * tan(NaN)       = NaN
	   *
	   */
	  P.tangent = P.tan = function () {
	    var pr, rm,
	      x = this,
	      Ctor = x.constructor;

	    if (!x.isFinite()) return new Ctor(NaN);
	    if (x.isZero()) return new Ctor(x);

	    pr = Ctor.precision;
	    rm = Ctor.rounding;
	    Ctor.precision = pr + 10;
	    Ctor.rounding = 1;

	    x = x.sin();
	    x.s = 1;
	    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);

	    Ctor.precision = pr;
	    Ctor.rounding = rm;

	    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
	  };


	  /*
	   *  n * 0 = 0
	   *  n * N = N
	   *  n * I = I
	   *  0 * n = 0
	   *  0 * 0 = 0
	   *  0 * N = N
	   *  0 * I = N
	   *  N * n = N
	   *  N * 0 = N
	   *  N * N = N
	   *  N * I = N
	   *  I * n = I
	   *  I * 0 = N
	   *  I * N = N
	   *  I * I = I
	   *
	   * Return a new Decimal whose value is this Decimal times `y`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   */
	  P.times = P.mul = function (y) {
	    var carry, e, i, k, r, rL, t, xdL, ydL,
	      x = this,
	      Ctor = x.constructor,
	      xd = x.d,
	      yd = (y = new Ctor(y)).d;

	    y.s *= x.s;

	     // If either is NaN, ±Infinity or ±0...
	    if (!xd || !xd[0] || !yd || !yd[0]) {

	      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd

	        // Return NaN if either is NaN.
	        // Return NaN if x is ±0 and y is ±Infinity, or y is ±0 and x is ±Infinity.
	        ? NaN

	        // Return ±Infinity if either is ±Infinity.
	        // Return ±0 if either is ±0.
	        : !xd || !yd ? y.s / 0 : y.s * 0);
	    }

	    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
	    xdL = xd.length;
	    ydL = yd.length;

	    // Ensure xd points to the longer array.
	    if (xdL < ydL) {
	      r = xd;
	      xd = yd;
	      yd = r;
	      rL = xdL;
	      xdL = ydL;
	      ydL = rL;
	    }

	    // Initialise the result array with zeros.
	    r = [];
	    rL = xdL + ydL;
	    for (i = rL; i--;) r.push(0);

	    // Multiply!
	    for (i = ydL; --i >= 0;) {
	      carry = 0;
	      for (k = xdL + i; k > i;) {
	        t = r[k] + yd[i] * xd[k - i - 1] + carry;
	        r[k--] = t % BASE | 0;
	        carry = t / BASE | 0;
	      }

	      r[k] = (r[k] + carry) % BASE | 0;
	    }

	    // Remove trailing zeros.
	    for (; !r[--rL];) r.pop();

	    if (carry) ++e;
	    else r.shift();

	    y.d = r;
	    y.e = getBase10Exponent(r, e);

	    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
	  };


	  /*
	   * Return a string representing the value of this Decimal in base 2, round to `sd` significant
	   * digits using rounding mode `rm`.
	   *
	   * If the optional `sd` argument is present then return binary exponential notation.
	   *
	   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   */
	  P.toBinary = function (sd, rm) {
	    return toStringBinary(this, 2, sd, rm);
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `dp`
	   * decimal places using rounding mode `rm` or `rounding` if `rm` is omitted.
	   *
	   * If `dp` is omitted, return a new Decimal whose value is the value of this Decimal.
	   *
	   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   */
	  P.toDecimalPlaces = P.toDP = function (dp, rm) {
	    var x = this,
	      Ctor = x.constructor;

	    x = new Ctor(x);
	    if (dp === void 0) return x;

	    checkInt32(dp, 0, MAX_DIGITS);

	    if (rm === void 0) rm = Ctor.rounding;
	    else checkInt32(rm, 0, 8);

	    return finalise(x, dp + x.e + 1, rm);
	  };


	  /*
	   * Return a string representing the value of this Decimal in exponential notation rounded to
	   * `dp` fixed decimal places using rounding mode `rounding`.
	   *
	   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   */
	  P.toExponential = function (dp, rm) {
	    var str,
	      x = this,
	      Ctor = x.constructor;

	    if (dp === void 0) {
	      str = finiteToString(x, true);
	    } else {
	      checkInt32(dp, 0, MAX_DIGITS);

	      if (rm === void 0) rm = Ctor.rounding;
	      else checkInt32(rm, 0, 8);

	      x = finalise(new Ctor(x), dp + 1, rm);
	      str = finiteToString(x, true, dp + 1);
	    }

	    return x.isNeg() && !x.isZero() ? '-' + str : str;
	  };


	  /*
	   * Return a string representing the value of this Decimal in normal (fixed-point) notation to
	   * `dp` fixed decimal places and rounded using rounding mode `rm` or `rounding` if `rm` is
	   * omitted.
	   *
	   * As with JavaScript numbers, (-0).toFixed(0) is '0', but e.g. (-0.00001).toFixed(0) is '-0'.
	   *
	   * [dp] {number} Decimal places. Integer, 0 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
	   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
	   * (-0).toFixed(3) is '0.000'.
	   * (-0.5).toFixed(0) is '-0'.
	   *
	   */
	  P.toFixed = function (dp, rm) {
	    var str, y,
	      x = this,
	      Ctor = x.constructor;

	    if (dp === void 0) {
	      str = finiteToString(x);
	    } else {
	      checkInt32(dp, 0, MAX_DIGITS);

	      if (rm === void 0) rm = Ctor.rounding;
	      else checkInt32(rm, 0, 8);

	      y = finalise(new Ctor(x), dp + x.e + 1, rm);
	      str = finiteToString(y, false, dp + y.e + 1);
	    }

	    // To determine whether to add the minus sign look at the value before it was rounded,
	    // i.e. look at `x` rather than `y`.
	    return x.isNeg() && !x.isZero() ? '-' + str : str;
	  };


	  /*
	   * Return an array representing the value of this Decimal as a simple fraction with an integer
	   * numerator and an integer denominator.
	   *
	   * The denominator will be a positive non-zero value less than or equal to the specified maximum
	   * denominator. If a maximum denominator is not specified, the denominator will be the lowest
	   * value necessary to represent the number exactly.
	   *
	   * [maxD] {number|string|Decimal} Maximum denominator. Integer >= 1 and < Infinity.
	   *
	   */
	  P.toFraction = function (maxD) {
	    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r,
	      x = this,
	      xd = x.d,
	      Ctor = x.constructor;

	    if (!xd) return new Ctor(x);

	    n1 = d0 = new Ctor(1);
	    d1 = n0 = new Ctor(0);

	    d = new Ctor(d1);
	    e = d.e = getPrecision(xd) - x.e - 1;
	    k = e % LOG_BASE;
	    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);

	    if (maxD == null) {

	      // d is 10**e, the minimum max-denominator needed.
	      maxD = e > 0 ? d : n1;
	    } else {
	      n = new Ctor(maxD);
	      if (!n.isInt() || n.lt(n1)) throw Error(invalidArgument + n);
	      maxD = n.gt(d) ? (e > 0 ? d : n1) : n;
	    }

	    external = false;
	    n = new Ctor(digitsToString(xd));
	    pr = Ctor.precision;
	    Ctor.precision = e = xd.length * LOG_BASE * 2;

	    for (;;)  {
	      q = divide(n, d, 0, 1, 1);
	      d2 = d0.plus(q.times(d1));
	      if (d2.cmp(maxD) == 1) break;
	      d0 = d1;
	      d1 = d2;
	      d2 = n1;
	      n1 = n0.plus(q.times(d2));
	      n0 = d2;
	      d2 = d;
	      d = n.minus(q.times(d2));
	      n = d2;
	    }

	    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
	    n0 = n0.plus(d2.times(n1));
	    d0 = d0.plus(d2.times(d1));
	    n0.s = n1.s = x.s;

	    // Determine which fraction is closer to x, n0/d0 or n1/d1?
	    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1
	        ? [n1, d1] : [n0, d0];

	    Ctor.precision = pr;
	    external = true;

	    return r;
	  };


	  /*
	   * Return a string representing the value of this Decimal in base 16, round to `sd` significant
	   * digits using rounding mode `rm`.
	   *
	   * If the optional `sd` argument is present then return binary exponential notation.
	   *
	   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   */
	  P.toHexadecimal = P.toHex = function (sd, rm) {
	    return toStringBinary(this, 16, sd, rm);
	  };


	  /*
	   * Returns a new Decimal whose value is the nearest multiple of `y` in the direction of rounding
	   * mode `rm`, or `Decimal.rounding` if `rm` is omitted, to the value of this Decimal.
	   *
	   * The return value will always have the same sign as this Decimal, unless either this Decimal
	   * or `y` is NaN, in which case the return value will be also be NaN.
	   *
	   * The return value is not affected by the value of `precision`.
	   *
	   * y {number|string|Decimal} The magnitude to round to a multiple of.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   * 'toNearest() rounding mode not an integer: {rm}'
	   * 'toNearest() rounding mode out of range: {rm}'
	   *
	   */
	  P.toNearest = function (y, rm) {
	    var x = this,
	      Ctor = x.constructor;

	    x = new Ctor(x);

	    if (y == null) {

	      // If x is not finite, return x.
	      if (!x.d) return x;

	      y = new Ctor(1);
	      rm = Ctor.rounding;
	    } else {
	      y = new Ctor(y);
	      if (rm === void 0) {
	        rm = Ctor.rounding;
	      } else {
	        checkInt32(rm, 0, 8);
	      }

	      // If x is not finite, return x if y is not NaN, else NaN.
	      if (!x.d) return y.s ? x : y;

	      // If y is not finite, return Infinity with the sign of x if y is Infinity, else NaN.
	      if (!y.d) {
	        if (y.s) y.s = x.s;
	        return y;
	      }
	    }

	    // If y is not zero, calculate the nearest multiple of y to x.
	    if (y.d[0]) {
	      external = false;
	      x = divide(x, y, 0, rm, 1).times(y);
	      external = true;
	      finalise(x);

	    // If y is zero, return zero with the sign of x.
	    } else {
	      y.s = x.s;
	      x = y;
	    }

	    return x;
	  };


	  /*
	   * Return the value of this Decimal converted to a number primitive.
	   * Zero keeps its sign.
	   *
	   */
	  P.toNumber = function () {
	    return +this;
	  };


	  /*
	   * Return a string representing the value of this Decimal in base 8, round to `sd` significant
	   * digits using rounding mode `rm`.
	   *
	   * If the optional `sd` argument is present then return binary exponential notation.
	   *
	   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   */
	  P.toOctal = function (sd, rm) {
	    return toStringBinary(this, 8, sd, rm);
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal raised to the power `y`, rounded
	   * to `precision` significant digits using rounding mode `rounding`.
	   *
	   * ECMAScript compliant.
	   *
	   *   pow(x, NaN)                           = NaN
	   *   pow(x, ±0)                            = 1

	   *   pow(NaN, non-zero)                    = NaN
	   *   pow(abs(x) > 1, +Infinity)            = +Infinity
	   *   pow(abs(x) > 1, -Infinity)            = +0
	   *   pow(abs(x) == 1, ±Infinity)           = NaN
	   *   pow(abs(x) < 1, +Infinity)            = +0
	   *   pow(abs(x) < 1, -Infinity)            = +Infinity
	   *   pow(+Infinity, y > 0)                 = +Infinity
	   *   pow(+Infinity, y < 0)                 = +0
	   *   pow(-Infinity, odd integer > 0)       = -Infinity
	   *   pow(-Infinity, even integer > 0)      = +Infinity
	   *   pow(-Infinity, odd integer < 0)       = -0
	   *   pow(-Infinity, even integer < 0)      = +0
	   *   pow(+0, y > 0)                        = +0
	   *   pow(+0, y < 0)                        = +Infinity
	   *   pow(-0, odd integer > 0)              = -0
	   *   pow(-0, even integer > 0)             = +0
	   *   pow(-0, odd integer < 0)              = -Infinity
	   *   pow(-0, even integer < 0)             = +Infinity
	   *   pow(finite x < 0, finite non-integer) = NaN
	   *
	   * For non-integer or very large exponents pow(x, y) is calculated using
	   *
	   *   x^y = exp(y*ln(x))
	   *
	   * Assuming the first 15 rounding digits are each equally likely to be any digit 0-9, the
	   * probability of an incorrectly rounded result
	   * P([49]9{14} | [50]0{14}) = 2 * 0.2 * 10^-14 = 4e-15 = 1/2.5e+14
	   * i.e. 1 in 250,000,000,000,000
	   *
	   * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in last place).
	   *
	   * y {number|string|Decimal} The power to which to raise this Decimal.
	   *
	   */
	  P.toPower = P.pow = function (y) {
	    var e, k, pr, r, rm, s,
	      x = this,
	      Ctor = x.constructor,
	      yn = +(y = new Ctor(y));

	    // Either ±Infinity, NaN or ±0?
	    if (!x.d || !y.d || !x.d[0] || !y.d[0]) return new Ctor(mathpow(+x, yn));

	    x = new Ctor(x);

	    if (x.eq(1)) return x;

	    pr = Ctor.precision;
	    rm = Ctor.rounding;

	    if (y.eq(1)) return finalise(x, pr, rm);

	    // y exponent
	    e = mathfloor(y.e / LOG_BASE);

	    // If y is a small integer use the 'exponentiation by squaring' algorithm.
	    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
	      r = intPow(Ctor, x, k, pr);
	      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
	    }

	    s = x.s;

	    // if x is negative
	    if (s < 0) {

	      // if y is not an integer
	      if (e < y.d.length - 1) return new Ctor(NaN);

	      // Result is positive if x is negative and the last digit of integer y is even.
	      if ((y.d[e] & 1) == 0) s = 1;

	      // if x.eq(-1)
	      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
	        x.s = s;
	        return x;
	      }
	    }

	    // Estimate result exponent.
	    // x^y = 10^e,  where e = y * log10(x)
	    // log10(x) = log10(x_significand) + x_exponent
	    // log10(x_significand) = ln(x_significand) / ln(10)
	    k = mathpow(+x, yn);
	    e = k == 0 || !isFinite(k)
	      ? mathfloor(yn * (Math.log('0.' + digitsToString(x.d)) / Math.LN10 + x.e + 1))
	      : new Ctor(k + '').e;

	    // Exponent estimate may be incorrect e.g. x: 0.999999999999999999, y: 2.29, e: 0, r.e: -1.

	    // Overflow/underflow?
	    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1) return new Ctor(e > 0 ? s / 0 : 0);

	    external = false;
	    Ctor.rounding = x.s = 1;

	    // Estimate the extra guard digits needed to ensure five correct rounding digits from
	    // naturalLogarithm(x). Example of failure without these extra digits (precision: 10):
	    // new Decimal(2.32456).pow('2087987436534566.46411')
	    // should be 1.162377823e+764914905173815, but is 1.162355823e+764914905173815
	    k = Math.min(12, (e + '').length);

	    // r = x^y = exp(y*ln(x))
	    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);

	    // r may be Infinity, e.g. (0.9999999999999999).pow(-1e+40)
	    if (r.d) {

	      // Truncate to the required precision plus five rounding digits.
	      r = finalise(r, pr + 5, 1);

	      // If the rounding digits are [49]9999 or [50]0000 increase the precision by 10 and recalculate
	      // the result.
	      if (checkRoundingDigits(r.d, pr, rm)) {
	        e = pr + 10;

	        // Truncate to the increased precision plus five rounding digits.
	        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);

	        // Check for 14 nines from the 2nd rounding digit (the first rounding digit may be 4 or 9).
	        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
	          r = finalise(r, pr + 1, 0);
	        }
	      }
	    }

	    r.s = s;
	    external = true;
	    Ctor.rounding = rm;

	    return finalise(r, pr, rm);
	  };


	  /*
	   * Return a string representing the value of this Decimal rounded to `sd` significant digits
	   * using rounding mode `rounding`.
	   *
	   * Return exponential notation if `sd` is less than the number of digits necessary to represent
	   * the integer part of the value in normal notation.
	   *
	   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   */
	  P.toPrecision = function (sd, rm) {
	    var str,
	      x = this,
	      Ctor = x.constructor;

	    if (sd === void 0) {
	      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
	    } else {
	      checkInt32(sd, 1, MAX_DIGITS);

	      if (rm === void 0) rm = Ctor.rounding;
	      else checkInt32(rm, 0, 8);

	      x = finalise(new Ctor(x), sd, rm);
	      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
	    }

	    return x.isNeg() && !x.isZero() ? '-' + str : str;
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal rounded to a maximum of `sd`
	   * significant digits using rounding mode `rm`, or to `precision` and `rounding` respectively if
	   * omitted.
	   *
	   * [sd] {number} Significant digits. Integer, 1 to MAX_DIGITS inclusive.
	   * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
	   *
	   * 'toSD() digits out of range: {sd}'
	   * 'toSD() digits not an integer: {sd}'
	   * 'toSD() rounding mode not an integer: {rm}'
	   * 'toSD() rounding mode out of range: {rm}'
	   *
	   */
	  P.toSignificantDigits = P.toSD = function (sd, rm) {
	    var x = this,
	      Ctor = x.constructor;

	    if (sd === void 0) {
	      sd = Ctor.precision;
	      rm = Ctor.rounding;
	    } else {
	      checkInt32(sd, 1, MAX_DIGITS);

	      if (rm === void 0) rm = Ctor.rounding;
	      else checkInt32(rm, 0, 8);
	    }

	    return finalise(new Ctor(x), sd, rm);
	  };


	  /*
	   * Return a string representing the value of this Decimal.
	   *
	   * Return exponential notation if this Decimal has a positive exponent equal to or greater than
	   * `toExpPos`, or a negative exponent equal to or less than `toExpNeg`.
	   *
	   */
	  P.toString = function () {
	    var x = this,
	      Ctor = x.constructor,
	      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

	    return x.isNeg() && !x.isZero() ? '-' + str : str;
	  };


	  /*
	   * Return a new Decimal whose value is the value of this Decimal truncated to a whole number.
	   *
	   */
	  P.truncated = P.trunc = function () {
	    return finalise(new this.constructor(this), this.e + 1, 1);
	  };


	  /*
	   * Return a string representing the value of this Decimal.
	   * Unlike `toString`, negative zero will include the minus sign.
	   *
	   */
	  P.valueOf = P.toJSON = function () {
	    var x = this,
	      Ctor = x.constructor,
	      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);

	    return x.isNeg() ? '-' + str : str;
	  };


	  // Helper functions for Decimal.prototype (P) and/or Decimal methods, and their callers.


	  /*
	   *  digitsToString           P.cubeRoot, P.logarithm, P.squareRoot, P.toFraction, P.toPower,
	   *                           finiteToString, naturalExponential, naturalLogarithm
	   *  checkInt32               P.toDecimalPlaces, P.toExponential, P.toFixed, P.toNearest,
	   *                           P.toPrecision, P.toSignificantDigits, toStringBinary, random
	   *  checkRoundingDigits      P.logarithm, P.toPower, naturalExponential, naturalLogarithm
	   *  convertBase              toStringBinary, parseOther
	   *  cos                      P.cos
	   *  divide                   P.atanh, P.cubeRoot, P.dividedBy, P.dividedToIntegerBy,
	   *                           P.logarithm, P.modulo, P.squareRoot, P.tan, P.tanh, P.toFraction,
	   *                           P.toNearest, toStringBinary, naturalExponential, naturalLogarithm,
	   *                           taylorSeries, atan2, parseOther
	   *  finalise                 P.absoluteValue, P.atan, P.atanh, P.ceil, P.cos, P.cosh,
	   *                           P.cubeRoot, P.dividedToIntegerBy, P.floor, P.logarithm, P.minus,
	   *                           P.modulo, P.negated, P.plus, P.round, P.sin, P.sinh, P.squareRoot,
	   *                           P.tan, P.times, P.toDecimalPlaces, P.toExponential, P.toFixed,
	   *                           P.toNearest, P.toPower, P.toPrecision, P.toSignificantDigits,
	   *                           P.truncated, divide, getLn10, getPi, naturalExponential,
	   *                           naturalLogarithm, ceil, floor, round, trunc
	   *  finiteToString           P.toExponential, P.toFixed, P.toPrecision, P.toString, P.valueOf,
	   *                           toStringBinary
	   *  getBase10Exponent        P.minus, P.plus, P.times, parseOther
	   *  getLn10                  P.logarithm, naturalLogarithm
	   *  getPi                    P.acos, P.asin, P.atan, toLessThanHalfPi, atan2
	   *  getPrecision             P.precision, P.toFraction
	   *  getZeroString            digitsToString, finiteToString
	   *  intPow                   P.toPower, parseOther
	   *  isOdd                    toLessThanHalfPi
	   *  maxOrMin                 max, min
	   *  naturalExponential       P.naturalExponential, P.toPower
	   *  naturalLogarithm         P.acosh, P.asinh, P.atanh, P.logarithm, P.naturalLogarithm,
	   *                           P.toPower, naturalExponential
	   *  nonFiniteToString        finiteToString, toStringBinary
	   *  parseDecimal             Decimal
	   *  parseOther               Decimal
	   *  sin                      P.sin
	   *  taylorSeries             P.cosh, P.sinh, cos, sin
	   *  toLessThanHalfPi         P.cos, P.sin
	   *  toStringBinary           P.toBinary, P.toHexadecimal, P.toOctal
	   *  truncate                 intPow
	   *
	   *  Throws:                  P.logarithm, P.precision, P.toFraction, checkInt32, getLn10, getPi,
	   *                           naturalLogarithm, config, parseOther, random, Decimal
	   */


	  function digitsToString(d) {
	    var i, k, ws,
	      indexOfLastWord = d.length - 1,
	      str = '',
	      w = d[0];

	    if (indexOfLastWord > 0) {
	      str += w;
	      for (i = 1; i < indexOfLastWord; i++) {
	        ws = d[i] + '';
	        k = LOG_BASE - ws.length;
	        if (k) str += getZeroString(k);
	        str += ws;
	      }

	      w = d[i];
	      ws = w + '';
	      k = LOG_BASE - ws.length;
	      if (k) str += getZeroString(k);
	    } else if (w === 0) {
	      return '0';
	    }

	    // Remove trailing zeros of last w.
	    for (; w % 10 === 0;) w /= 10;

	    return str + w;
	  }


	  function checkInt32(i, min, max) {
	    if (i !== ~~i || i < min || i > max) {
	      throw Error(invalidArgument + i);
	    }
	  }


	  /*
	   * Check 5 rounding digits if `repeating` is null, 4 otherwise.
	   * `repeating == null` if caller is `log` or `pow`,
	   * `repeating != null` if caller is `naturalLogarithm` or `naturalExponential`.
	   */
	  function checkRoundingDigits(d, i, rm, repeating) {
	    var di, k, r, rd;

	    // Get the length of the first word of the array d.
	    for (k = d[0]; k >= 10; k /= 10) --i;

	    // Is the rounding digit in the first word of d?
	    if (--i < 0) {
	      i += LOG_BASE;
	      di = 0;
	    } else {
	      di = Math.ceil((i + 1) / LOG_BASE);
	      i %= LOG_BASE;
	    }

	    // i is the index (0 - 6) of the rounding digit.
	    // E.g. if within the word 3487563 the first rounding digit is 5,
	    // then i = 4, k = 1000, rd = 3487563 % 1000 = 563
	    k = mathpow(10, LOG_BASE - i);
	    rd = d[di] % k | 0;

	    if (repeating == null) {
	      if (i < 3) {
	        if (i == 0) rd = rd / 100 | 0;
	        else if (i == 1) rd = rd / 10 | 0;
	        r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
	      } else {
	        r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) &&
	          (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 ||
	            (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
	      }
	    } else {
	      if (i < 4) {
	        if (i == 0) rd = rd / 1000 | 0;
	        else if (i == 1) rd = rd / 100 | 0;
	        else if (i == 2) rd = rd / 10 | 0;
	        r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
	      } else {
	        r = ((repeating || rm < 4) && rd + 1 == k ||
	        (!repeating && rm > 3) && rd + 1 == k / 2) &&
	          (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
	      }
	    }

	    return r;
	  }


	  // Convert string of `baseIn` to an array of numbers of `baseOut`.
	  // Eg. convertBase('255', 10, 16) returns [15, 15].
	  // Eg. convertBase('ff', 16, 10) returns [2, 5, 5].
	  function convertBase(str, baseIn, baseOut) {
	    var j,
	      arr = [0],
	      arrL,
	      i = 0,
	      strL = str.length;

	    for (; i < strL;) {
	      for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
	      arr[0] += NUMERALS.indexOf(str.charAt(i++));
	      for (j = 0; j < arr.length; j++) {
	        if (arr[j] > baseOut - 1) {
	          if (arr[j + 1] === void 0) arr[j + 1] = 0;
	          arr[j + 1] += arr[j] / baseOut | 0;
	          arr[j] %= baseOut;
	        }
	      }
	    }

	    return arr.reverse();
	  }


	  /*
	   * cos(x) = 1 - x^2/2! + x^4/4! - ...
	   * |x| < pi/2
	   *
	   */
	  function cosine(Ctor, x) {
	    var k, len, y;

	    if (x.isZero()) return x;

	    // Argument reduction: cos(4x) = 8*(cos^4(x) - cos^2(x)) + 1
	    // i.e. cos(x) = 8*(cos^4(x/4) - cos^2(x/4)) + 1

	    // Estimate the optimum number of times to use the argument reduction.
	    len = x.d.length;
	    if (len < 32) {
	      k = Math.ceil(len / 3);
	      y = (1 / tinyPow(4, k)).toString();
	    } else {
	      k = 16;
	      y = '2.3283064365386962890625e-10';
	    }

	    Ctor.precision += k;

	    x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));

	    // Reverse argument reduction
	    for (var i = k; i--;) {
	      var cos2x = x.times(x);
	      x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
	    }

	    Ctor.precision -= k;

	    return x;
	  }


	  /*
	   * Perform division in the specified base.
	   */
	  var divide = (function () {

	    // Assumes non-zero x and k, and hence non-zero result.
	    function multiplyInteger(x, k, base) {
	      var temp,
	        carry = 0,
	        i = x.length;

	      for (x = x.slice(); i--;) {
	        temp = x[i] * k + carry;
	        x[i] = temp % base | 0;
	        carry = temp / base | 0;
	      }

	      if (carry) x.unshift(carry);

	      return x;
	    }

	    function compare(a, b, aL, bL) {
	      var i, r;

	      if (aL != bL) {
	        r = aL > bL ? 1 : -1;
	      } else {
	        for (i = r = 0; i < aL; i++) {
	          if (a[i] != b[i]) {
	            r = a[i] > b[i] ? 1 : -1;
	            break;
	          }
	        }
	      }

	      return r;
	    }

	    function subtract(a, b, aL, base) {
	      var i = 0;

	      // Subtract b from a.
	      for (; aL--;) {
	        a[aL] -= i;
	        i = a[aL] < b[aL] ? 1 : 0;
	        a[aL] = i * base + a[aL] - b[aL];
	      }

	      // Remove leading zeros.
	      for (; !a[0] && a.length > 1;) a.shift();
	    }

	    return function (x, y, pr, rm, dp, base) {
	      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0,
	        yL, yz,
	        Ctor = x.constructor,
	        sign = x.s == y.s ? 1 : -1,
	        xd = x.d,
	        yd = y.d;

	      // Either NaN, Infinity or 0?
	      if (!xd || !xd[0] || !yd || !yd[0]) {

	        return new Ctor(// Return NaN if either NaN, or both Infinity or 0.
	          !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN :

	          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
	          xd && xd[0] == 0 || !yd ? sign * 0 : sign / 0);
	      }

	      if (base) {
	        logBase = 1;
	        e = x.e - y.e;
	      } else {
	        base = BASE;
	        logBase = LOG_BASE;
	        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
	      }

	      yL = yd.length;
	      xL = xd.length;
	      q = new Ctor(sign);
	      qd = q.d = [];

	      // Result exponent may be one less than e.
	      // The digit array of a Decimal from toStringBinary may have trailing zeros.
	      for (i = 0; yd[i] == (xd[i] || 0); i++);

	      if (yd[i] > (xd[i] || 0)) e--;

	      if (pr == null) {
	        sd = pr = Ctor.precision;
	        rm = Ctor.rounding;
	      } else if (dp) {
	        sd = pr + (x.e - y.e) + 1;
	      } else {
	        sd = pr;
	      }

	      if (sd < 0) {
	        qd.push(1);
	        more = true;
	      } else {

	        // Convert precision in number of base 10 digits to base 1e7 digits.
	        sd = sd / logBase + 2 | 0;
	        i = 0;

	        // divisor < 1e7
	        if (yL == 1) {
	          k = 0;
	          yd = yd[0];
	          sd++;

	          // k is the carry.
	          for (; (i < xL || k) && sd--; i++) {
	            t = k * base + (xd[i] || 0);
	            qd[i] = t / yd | 0;
	            k = t % yd | 0;
	          }

	          more = k || i < xL;

	        // divisor >= 1e7
	        } else {

	          // Normalise xd and yd so highest order digit of yd is >= base/2
	          k = base / (yd[0] + 1) | 0;

	          if (k > 1) {
	            yd = multiplyInteger(yd, k, base);
	            xd = multiplyInteger(xd, k, base);
	            yL = yd.length;
	            xL = xd.length;
	          }

	          xi = yL;
	          rem = xd.slice(0, yL);
	          remL = rem.length;

	          // Add zeros to make remainder as long as divisor.
	          for (; remL < yL;) rem[remL++] = 0;

	          yz = yd.slice();
	          yz.unshift(0);
	          yd0 = yd[0];

	          if (yd[1] >= base / 2) ++yd0;

	          do {
	            k = 0;

	            // Compare divisor and remainder.
	            cmp = compare(yd, rem, yL, remL);

	            // If divisor < remainder.
	            if (cmp < 0) {

	              // Calculate trial digit, k.
	              rem0 = rem[0];
	              if (yL != remL) rem0 = rem0 * base + (rem[1] || 0);

	              // k will be how many times the divisor goes into the current remainder.
	              k = rem0 / yd0 | 0;

	              //  Algorithm:
	              //  1. product = divisor * trial digit (k)
	              //  2. if product > remainder: product -= divisor, k--
	              //  3. remainder -= product
	              //  4. if product was < remainder at 2:
	              //    5. compare new remainder and divisor
	              //    6. If remainder > divisor: remainder -= divisor, k++

	              if (k > 1) {
	                if (k >= base) k = base - 1;

	                // product = divisor * trial digit.
	                prod = multiplyInteger(yd, k, base);
	                prodL = prod.length;
	                remL = rem.length;

	                // Compare product and remainder.
	                cmp = compare(prod, rem, prodL, remL);

	                // product > remainder.
	                if (cmp == 1) {
	                  k--;

	                  // Subtract divisor from product.
	                  subtract(prod, yL < prodL ? yz : yd, prodL, base);
	                }
	              } else {

	                // cmp is -1.
	                // If k is 0, there is no need to compare yd and rem again below, so change cmp to 1
	                // to avoid it. If k is 1 there is a need to compare yd and rem again below.
	                if (k == 0) cmp = k = 1;
	                prod = yd.slice();
	              }

	              prodL = prod.length;
	              if (prodL < remL) prod.unshift(0);

	              // Subtract product from remainder.
	              subtract(rem, prod, remL, base);

	              // If product was < previous remainder.
	              if (cmp == -1) {
	                remL = rem.length;

	                // Compare divisor and new remainder.
	                cmp = compare(yd, rem, yL, remL);

	                // If divisor < new remainder, subtract divisor from remainder.
	                if (cmp < 1) {
	                  k++;

	                  // Subtract divisor from remainder.
	                  subtract(rem, yL < remL ? yz : yd, remL, base);
	                }
	              }

	              remL = rem.length;
	            } else if (cmp === 0) {
	              k++;
	              rem = [0];
	            }    // if cmp === 1, k will be 0

	            // Add the next digit, k, to the result array.
	            qd[i++] = k;

	            // Update the remainder.
	            if (cmp && rem[0]) {
	              rem[remL++] = xd[xi] || 0;
	            } else {
	              rem = [xd[xi]];
	              remL = 1;
	            }

	          } while ((xi++ < xL || rem[0] !== void 0) && sd--);

	          more = rem[0] !== void 0;
	        }

	        // Leading zero?
	        if (!qd[0]) qd.shift();
	      }

	      // logBase is 1 when divide is being used for base conversion.
	      if (logBase == 1) {
	        q.e = e;
	        inexact = more;
	      } else {

	        // To calculate q.e, first get the number of digits of qd[0].
	        for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
	        q.e = i + e * logBase - 1;

	        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
	      }

	      return q;
	    };
	  })();


	  /*
	   * Round `x` to `sd` significant digits using rounding mode `rm`.
	   * Check for over/under-flow.
	   */
	   function finalise(x, sd, rm, isTruncated) {
	    var digits, i, j, k, rd, roundUp, w, xd, xdi,
	      Ctor = x.constructor;

	    // Don't round if sd is null or undefined.
	    out: if (sd != null) {
	      xd = x.d;

	      // Infinity/NaN.
	      if (!xd) return x;

	      // rd: the rounding digit, i.e. the digit after the digit that may be rounded up.
	      // w: the word of xd containing rd, a base 1e7 number.
	      // xdi: the index of w within xd.
	      // digits: the number of digits of w.
	      // i: what would be the index of rd within w if all the numbers were 7 digits long (i.e. if
	      // they had leading zeros)
	      // j: if > 0, the actual index of rd within w (if < 0, rd is a leading zero).

	      // Get the length of the first word of the digits array xd.
	      for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
	      i = sd - digits;

	      // Is the rounding digit in the first word of xd?
	      if (i < 0) {
	        i += LOG_BASE;
	        j = sd;
	        w = xd[xdi = 0];

	        // Get the rounding digit at index j of w.
	        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
	      } else {
	        xdi = Math.ceil((i + 1) / LOG_BASE);
	        k = xd.length;
	        if (xdi >= k) {
	          if (isTruncated) {

	            // Needed by `naturalExponential`, `naturalLogarithm` and `squareRoot`.
	            for (; k++ <= xdi;) xd.push(0);
	            w = rd = 0;
	            digits = 1;
	            i %= LOG_BASE;
	            j = i - LOG_BASE + 1;
	          } else {
	            break out;
	          }
	        } else {
	          w = k = xd[xdi];

	          // Get the number of digits of w.
	          for (digits = 1; k >= 10; k /= 10) digits++;

	          // Get the index of rd within w.
	          i %= LOG_BASE;

	          // Get the index of rd within w, adjusted for leading zeros.
	          // The number of leading zeros of w is given by LOG_BASE - digits.
	          j = i - LOG_BASE + digits;

	          // Get the rounding digit at index j of w.
	          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
	        }
	      }

	      // Are there any non-zero digits after the rounding digit?
	      isTruncated = isTruncated || sd < 0 ||
	        xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));

	      // The expression `w % mathpow(10, digits - j - 1)` returns all the digits of w to the right
	      // of the digit at (left-to-right) index j, e.g. if w is 908714 and j is 2, the expression
	      // will give 714.

	      roundUp = rm < 4
	        ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2))
	        : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 &&

	          // Check whether the digit to the left of the rounding digit is odd.
	          ((i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10) & 1 ||
	            rm == (x.s < 0 ? 8 : 7));

	      if (sd < 1 || !xd[0]) {
	        xd.length = 0;
	        if (roundUp) {

	          // Convert sd to decimal places.
	          sd -= x.e + 1;

	          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
	          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
	          x.e = -sd || 0;
	        } else {

	          // Zero.
	          xd[0] = x.e = 0;
	        }

	        return x;
	      }

	      // Remove excess digits.
	      if (i == 0) {
	        xd.length = xdi;
	        k = 1;
	        xdi--;
	      } else {
	        xd.length = xdi + 1;
	        k = mathpow(10, LOG_BASE - i);

	        // E.g. 56700 becomes 56000 if 7 is the rounding digit.
	        // j > 0 means i > number of leading zeros of w.
	        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
	      }

	      if (roundUp) {
	        for (;;) {

	          // Is the digit to be rounded up in the first word of xd?
	          if (xdi == 0) {

	            // i will be the length of xd[0] before k is added.
	            for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
	            j = xd[0] += k;
	            for (k = 1; j >= 10; j /= 10) k++;

	            // if i != k the length has increased.
	            if (i != k) {
	              x.e++;
	              if (xd[0] == BASE) xd[0] = 1;
	            }

	            break;
	          } else {
	            xd[xdi] += k;
	            if (xd[xdi] != BASE) break;
	            xd[xdi--] = 0;
	            k = 1;
	          }
	        }
	      }

	      // Remove trailing zeros.
	      for (i = xd.length; xd[--i] === 0;) xd.pop();
	    }

	    if (external) {

	      // Overflow?
	      if (x.e > Ctor.maxE) {

	        // Infinity.
	        x.d = null;
	        x.e = NaN;

	      // Underflow?
	      } else if (x.e < Ctor.minE) {

	        // Zero.
	        x.e = 0;
	        x.d = [0];
	        // Ctor.underflow = true;
	      } // else Ctor.underflow = false;
	    }

	    return x;
	  }


	  function finiteToString(x, isExp, sd) {
	    if (!x.isFinite()) return nonFiniteToString(x);
	    var k,
	      e = x.e,
	      str = digitsToString(x.d),
	      len = str.length;

	    if (isExp) {
	      if (sd && (k = sd - len) > 0) {
	        str = str.charAt(0) + '.' + str.slice(1) + getZeroString(k);
	      } else if (len > 1) {
	        str = str.charAt(0) + '.' + str.slice(1);
	      }

	      str = str + (x.e < 0 ? 'e' : 'e+') + x.e;
	    } else if (e < 0) {
	      str = '0.' + getZeroString(-e - 1) + str;
	      if (sd && (k = sd - len) > 0) str += getZeroString(k);
	    } else if (e >= len) {
	      str += getZeroString(e + 1 - len);
	      if (sd && (k = sd - e - 1) > 0) str = str + '.' + getZeroString(k);
	    } else {
	      if ((k = e + 1) < len) str = str.slice(0, k) + '.' + str.slice(k);
	      if (sd && (k = sd - len) > 0) {
	        if (e + 1 === len) str += '.';
	        str += getZeroString(k);
	      }
	    }

	    return str;
	  }


	  // Calculate the base 10 exponent from the base 1e7 exponent.
	  function getBase10Exponent(digits, e) {
	    var w = digits[0];

	    // Add the number of digits of the first word of the digits array.
	    for ( e *= LOG_BASE; w >= 10; w /= 10) e++;
	    return e;
	  }


	  function getLn10(Ctor, sd, pr) {
	    if (sd > LN10_PRECISION) {

	      // Reset global state in case the exception is caught.
	      external = true;
	      if (pr) Ctor.precision = pr;
	      throw Error(precisionLimitExceeded);
	    }
	    return finalise(new Ctor(LN10), sd, 1, true);
	  }


	  function getPi(Ctor, sd, rm) {
	    if (sd > PI_PRECISION) throw Error(precisionLimitExceeded);
	    return finalise(new Ctor(PI), sd, rm, true);
	  }


	  function getPrecision(digits) {
	    var w = digits.length - 1,
	      len = w * LOG_BASE + 1;

	    w = digits[w];

	    // If non-zero...
	    if (w) {

	      // Subtract the number of trailing zeros of the last word.
	      for (; w % 10 == 0; w /= 10) len--;

	      // Add the number of digits of the first word.
	      for (w = digits[0]; w >= 10; w /= 10) len++;
	    }

	    return len;
	  }


	  function getZeroString(k) {
	    var zs = '';
	    for (; k--;) zs += '0';
	    return zs;
	  }


	  /*
	   * Return a new Decimal whose value is the value of Decimal `x` to the power `n`, where `n` is an
	   * integer of type number.
	   *
	   * Implements 'exponentiation by squaring'. Called by `pow` and `parseOther`.
	   *
	   */
	  function intPow(Ctor, x, n, pr) {
	    var isTruncated,
	      r = new Ctor(1),

	      // Max n of 9007199254740991 takes 53 loop iterations.
	      // Maximum digits array length; leaves [28, 34] guard digits.
	      k = Math.ceil(pr / LOG_BASE + 4);

	    external = false;

	    for (;;) {
	      if (n % 2) {
	        r = r.times(x);
	        if (truncate(r.d, k)) isTruncated = true;
	      }

	      n = mathfloor(n / 2);
	      if (n === 0) {

	        // To ensure correct rounding when r.d is truncated, increment the last word if it is zero.
	        n = r.d.length - 1;
	        if (isTruncated && r.d[n] === 0) ++r.d[n];
	        break;
	      }

	      x = x.times(x);
	      truncate(x.d, k);
	    }

	    external = true;

	    return r;
	  }


	  function isOdd(n) {
	    return n.d[n.d.length - 1] & 1;
	  }


	  /*
	   * Handle `max` and `min`. `ltgt` is 'lt' or 'gt'.
	   */
	  function maxOrMin(Ctor, args, ltgt) {
	    var y,
	      x = new Ctor(args[0]),
	      i = 0;

	    for (; ++i < args.length;) {
	      y = new Ctor(args[i]);
	      if (!y.s) {
	        x = y;
	        break;
	      } else if (x[ltgt](y)) {
	        x = y;
	      }
	    }

	    return x;
	  }


	  /*
	   * Return a new Decimal whose value is the natural exponential of `x` rounded to `sd` significant
	   * digits.
	   *
	   * Taylor/Maclaurin series.
	   *
	   * exp(x) = x^0/0! + x^1/1! + x^2/2! + x^3/3! + ...
	   *
	   * Argument reduction:
	   *   Repeat x = x / 32, k += 5, until |x| < 0.1
	   *   exp(x) = exp(x / 2^k)^(2^k)
	   *
	   * Previously, the argument was initially reduced by
	   * exp(x) = exp(r) * 10^k  where r = x - k * ln10, k = floor(x / ln10)
	   * to first put r in the range [0, ln10], before dividing by 32 until |x| < 0.1, but this was
	   * found to be slower than just dividing repeatedly by 32 as above.
	   *
	   * Max integer argument: exp('20723265836946413') = 6.3e+9000000000000000
	   * Min integer argument: exp('-20723265836946411') = 1.2e-9000000000000000
	   * (Math object integer min/max: Math.exp(709) = 8.2e+307, Math.exp(-745) = 5e-324)
	   *
	   *  exp(Infinity)  = Infinity
	   *  exp(-Infinity) = 0
	   *  exp(NaN)       = NaN
	   *  exp(±0)        = 1
	   *
	   *  exp(x) is non-terminating for any finite, non-zero x.
	   *
	   *  The result will always be correctly rounded.
	   *
	   */
	  function naturalExponential(x, sd) {
	    var denominator, guard, j, pow, sum, t, wpr,
	      rep = 0,
	      i = 0,
	      k = 0,
	      Ctor = x.constructor,
	      rm = Ctor.rounding,
	      pr = Ctor.precision;

	    // 0/NaN/Infinity?
	    if (!x.d || !x.d[0] || x.e > 17) {

	      return new Ctor(x.d
	        ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0
	        : x.s ? x.s < 0 ? 0 : x : 0 / 0);
	    }

	    if (sd == null) {
	      external = false;
	      wpr = pr;
	    } else {
	      wpr = sd;
	    }

	    t = new Ctor(0.03125);

	    // while abs(x) >= 0.1
	    while (x.e > -2) {

	      // x = x / 2^5
	      x = x.times(t);
	      k += 5;
	    }

	    // Use 2 * log10(2^k) + 5 (empirically derived) to estimate the increase in precision
	    // necessary to ensure the first 4 rounding digits are correct.
	    guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
	    wpr += guard;
	    denominator = pow = sum = new Ctor(1);
	    Ctor.precision = wpr;

	    for (;;) {
	      pow = finalise(pow.times(x), wpr, 1);
	      denominator = denominator.times(++i);
	      t = sum.plus(divide(pow, denominator, wpr, 1));

	      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
	        j = k;
	        while (j--) sum = finalise(sum.times(sum), wpr, 1);

	        // Check to see if the first 4 rounding digits are [49]999.
	        // If so, repeat the summation with a higher precision, otherwise
	        // e.g. with precision: 18, rounding: 1
	        // exp(18.404272462595034083567793919843761) = 98372560.1229999999 (should be 98372560.123)
	        // `wpr - guard` is the index of first rounding digit.
	        if (sd == null) {

	          if (rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
	            Ctor.precision = wpr += 10;
	            denominator = pow = t = new Ctor(1);
	            i = 0;
	            rep++;
	          } else {
	            return finalise(sum, Ctor.precision = pr, rm, external = true);
	          }
	        } else {
	          Ctor.precision = pr;
	          return sum;
	        }
	      }

	      sum = t;
	    }
	  }


	  /*
	   * Return a new Decimal whose value is the natural logarithm of `x` rounded to `sd` significant
	   * digits.
	   *
	   *  ln(-n)        = NaN
	   *  ln(0)         = -Infinity
	   *  ln(-0)        = -Infinity
	   *  ln(1)         = 0
	   *  ln(Infinity)  = Infinity
	   *  ln(-Infinity) = NaN
	   *  ln(NaN)       = NaN
	   *
	   *  ln(n) (n != 1) is non-terminating.
	   *
	   */
	  function naturalLogarithm(y, sd) {
	    var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2,
	      n = 1,
	      guard = 10,
	      x = y,
	      xd = x.d,
	      Ctor = x.constructor,
	      rm = Ctor.rounding,
	      pr = Ctor.precision;

	    // Is x negative or Infinity, NaN, 0 or 1?
	    if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
	      return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
	    }

	    if (sd == null) {
	      external = false;
	      wpr = pr;
	    } else {
	      wpr = sd;
	    }

	    Ctor.precision = wpr += guard;
	    c = digitsToString(xd);
	    c0 = c.charAt(0);

	    if (Math.abs(e = x.e) < 1.5e15) {

	      // Argument reduction.
	      // The series converges faster the closer the argument is to 1, so using
	      // ln(a^b) = b * ln(a),   ln(a) = ln(a^b) / b
	      // multiply the argument by itself until the leading digits of the significand are 7, 8, 9,
	      // 10, 11, 12 or 13, recording the number of multiplications so the sum of the series can
	      // later be divided by this number, then separate out the power of 10 using
	      // ln(a*10^b) = ln(a) + b*ln(10).

	      // max n is 21 (gives 0.9, 1.0 or 1.1) (9e15 / 21 = 4.2e14).
	      //while (c0 < 9 && c0 != 1 || c0 == 1 && c.charAt(1) > 1) {
	      // max n is 6 (gives 0.7 - 1.3)
	      while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
	        x = x.times(y);
	        c = digitsToString(x.d);
	        c0 = c.charAt(0);
	        n++;
	      }

	      e = x.e;

	      if (c0 > 1) {
	        x = new Ctor('0.' + c);
	        e++;
	      } else {
	        x = new Ctor(c0 + '.' + c.slice(1));
	      }
	    } else {

	      // The argument reduction method above may result in overflow if the argument y is a massive
	      // number with exponent >= 1500000000000000 (9e15 / 6 = 1.5e15), so instead recall this
	      // function using ln(x*10^e) = ln(x) + e*ln(10).
	      t = getLn10(Ctor, wpr + 2, pr).times(e + '');
	      x = naturalLogarithm(new Ctor(c0 + '.' + c.slice(1)), wpr - guard).plus(t);
	      Ctor.precision = pr;

	      return sd == null ? finalise(x, pr, rm, external = true) : x;
	    }

	    // x1 is x reduced to a value near 1.
	    x1 = x;

	    // Taylor series.
	    // ln(y) = ln((1 + x)/(1 - x)) = 2(x + x^3/3 + x^5/5 + x^7/7 + ...)
	    // where x = (y - 1)/(y + 1)    (|x| < 1)
	    sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
	    x2 = finalise(x.times(x), wpr, 1);
	    denominator = 3;

	    for (;;) {
	      numerator = finalise(numerator.times(x2), wpr, 1);
	      t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1));

	      if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
	        sum = sum.times(2);

	        // Reverse the argument reduction. Check that e is not 0 because, besides preventing an
	        // unnecessary calculation, -0 + 0 = +0 and to ensure correct rounding -0 needs to stay -0.
	        if (e !== 0) sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ''));
	        sum = divide(sum, new Ctor(n), wpr, 1);

	        // Is rm > 3 and the first 4 rounding digits 4999, or rm < 4 (or the summation has
	        // been repeated previously) and the first 4 rounding digits 9999?
	        // If so, restart the summation with a higher precision, otherwise
	        // e.g. with precision: 12, rounding: 1
	        // ln(135520028.6126091714265381533) = 18.7246299999 when it should be 18.72463.
	        // `wpr - guard` is the index of first rounding digit.
	        if (sd == null) {
	          if (checkRoundingDigits(sum.d, wpr - guard, rm, rep)) {
	            Ctor.precision = wpr += guard;
	            t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
	            x2 = finalise(x.times(x), wpr, 1);
	            denominator = rep = 1;
	          } else {
	            return finalise(sum, Ctor.precision = pr, rm, external = true);
	          }
	        } else {
	          Ctor.precision = pr;
	          return sum;
	        }
	      }

	      sum = t;
	      denominator += 2;
	    }
	  }


	  // ±Infinity, NaN.
	  function nonFiniteToString(x) {
	    // Unsigned.
	    return String(x.s * x.s / 0);
	  }


	  /*
	   * Parse the value of a new Decimal `x` from string `str`.
	   */
	  function parseDecimal(x, str) {
	    var e, i, len;

	    // Decimal point?
	    if ((e = str.indexOf('.')) > -1) str = str.replace('.', '');

	    // Exponential form?
	    if ((i = str.search(/e/i)) > 0) {

	      // Determine exponent.
	      if (e < 0) e = i;
	      e += +str.slice(i + 1);
	      str = str.substring(0, i);
	    } else if (e < 0) {

	      // Integer.
	      e = str.length;
	    }

	    // Determine leading zeros.
	    for (i = 0; str.charCodeAt(i) === 48; i++);

	    // Determine trailing zeros.
	    for (len = str.length; str.charCodeAt(len - 1) === 48; --len);
	    str = str.slice(i, len);

	    if (str) {
	      len -= i;
	      x.e = e = e - i - 1;
	      x.d = [];

	      // Transform base

	      // e is the base 10 exponent.
	      // i is where to slice str to get the first word of the digits array.
	      i = (e + 1) % LOG_BASE;
	      if (e < 0) i += LOG_BASE;

	      if (i < len) {
	        if (i) x.d.push(+str.slice(0, i));
	        for (len -= LOG_BASE; i < len;) x.d.push(+str.slice(i, i += LOG_BASE));
	        str = str.slice(i);
	        i = LOG_BASE - str.length;
	      } else {
	        i -= len;
	      }

	      for (; i--;) str += '0';
	      x.d.push(+str);

	      if (external) {

	        // Overflow?
	        if (x.e > x.constructor.maxE) {

	          // Infinity.
	          x.d = null;
	          x.e = NaN;

	        // Underflow?
	        } else if (x.e < x.constructor.minE) {

	          // Zero.
	          x.e = 0;
	          x.d = [0];
	          // x.constructor.underflow = true;
	        } // else x.constructor.underflow = false;
	      }
	    } else {

	      // Zero.
	      x.e = 0;
	      x.d = [0];
	    }

	    return x;
	  }


	  /*
	   * Parse the value of a new Decimal `x` from a string `str`, which is not a decimal value.
	   */
	  function parseOther(x, str) {
	    var base, Ctor, divisor, i, isFloat, len, p, xd, xe;

	    if (str.indexOf('_') > -1) {
	      str = str.replace(/(\d)_(?=\d)/g, '$1');
	      if (isDecimal.test(str)) return parseDecimal(x, str);
	    } else if (str === 'Infinity' || str === 'NaN') {
	      if (!+str) x.s = NaN;
	      x.e = NaN;
	      x.d = null;
	      return x;
	    }

	    if (isHex.test(str))  {
	      base = 16;
	      str = str.toLowerCase();
	    } else if (isBinary.test(str))  {
	      base = 2;
	    } else if (isOctal.test(str))  {
	      base = 8;
	    } else {
	      throw Error(invalidArgument + str);
	    }

	    // Is there a binary exponent part?
	    i = str.search(/p/i);

	    if (i > 0) {
	      p = +str.slice(i + 1);
	      str = str.substring(2, i);
	    } else {
	      str = str.slice(2);
	    }

	    // Convert `str` as an integer then divide the result by `base` raised to a power such that the
	    // fraction part will be restored.
	    i = str.indexOf('.');
	    isFloat = i >= 0;
	    Ctor = x.constructor;

	    if (isFloat) {
	      str = str.replace('.', '');
	      len = str.length;
	      i = len - i;

	      // log[10](16) = 1.2041... , log[10](88) = 1.9444....
	      divisor = intPow(Ctor, new Ctor(base), i, i * 2);
	    }

	    xd = convertBase(str, base, BASE);
	    xe = xd.length - 1;

	    // Remove trailing zeros.
	    for (i = xe; xd[i] === 0; --i) xd.pop();
	    if (i < 0) return new Ctor(x.s * 0);
	    x.e = getBase10Exponent(xd, xe);
	    x.d = xd;
	    external = false;

	    // At what precision to perform the division to ensure exact conversion?
	    // maxDecimalIntegerPartDigitCount = ceil(log[10](b) * otherBaseIntegerPartDigitCount)
	    // log[10](2) = 0.30103, log[10](8) = 0.90309, log[10](16) = 1.20412
	    // E.g. ceil(1.2 * 3) = 4, so up to 4 decimal digits are needed to represent 3 hex int digits.
	    // maxDecimalFractionPartDigitCount = {Hex:4|Oct:3|Bin:1} * otherBaseFractionPartDigitCount
	    // Therefore using 4 * the number of digits of str will always be enough.
	    if (isFloat) x = divide(x, divisor, len * 4);

	    // Multiply by the binary exponent part if present.
	    if (p) x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
	    external = true;

	    return x;
	  }


	  /*
	   * sin(x) = x - x^3/3! + x^5/5! - ...
	   * |x| < pi/2
	   *
	   */
	  function sine(Ctor, x) {
	    var k,
	      len = x.d.length;

	    if (len < 3) {
	      return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
	    }

	    // Argument reduction: sin(5x) = 16*sin^5(x) - 20*sin^3(x) + 5*sin(x)
	    // i.e. sin(x) = 16*sin^5(x/5) - 20*sin^3(x/5) + 5*sin(x/5)
	    // and  sin(x) = sin(x/5)(5 + sin^2(x/5)(16sin^2(x/5) - 20))

	    // Estimate the optimum number of times to use the argument reduction.
	    k = 1.4 * Math.sqrt(len);
	    k = k > 16 ? 16 : k | 0;

	    x = x.times(1 / tinyPow(5, k));
	    x = taylorSeries(Ctor, 2, x, x);

	    // Reverse argument reduction
	    var sin2_x,
	      d5 = new Ctor(5),
	      d16 = new Ctor(16),
	      d20 = new Ctor(20);
	    for (; k--;) {
	      sin2_x = x.times(x);
	      x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
	    }

	    return x;
	  }


	  // Calculate Taylor series for `cos`, `cosh`, `sin` and `sinh`.
	  function taylorSeries(Ctor, n, x, y, isHyperbolic) {
	    var j, t, u, x2,
	      pr = Ctor.precision,
	      k = Math.ceil(pr / LOG_BASE);

	    external = false;
	    x2 = x.times(x);
	    u = new Ctor(y);

	    for (;;) {
	      t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
	      u = isHyperbolic ? y.plus(t) : y.minus(t);
	      y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
	      t = u.plus(y);

	      if (t.d[k] !== void 0) {
	        for (j = k; t.d[j] === u.d[j] && j--;);
	        if (j == -1) break;
	      }

	      j = u;
	      u = y;
	      y = t;
	      t = j;
	    }

	    external = true;
	    t.d.length = k + 1;

	    return t;
	  }


	  // Exponent e must be positive and non-zero.
	  function tinyPow(b, e) {
	    var n = b;
	    while (--e) n *= b;
	    return n;
	  }


	  // Return the absolute value of `x` reduced to less than or equal to half pi.
	  function toLessThanHalfPi(Ctor, x) {
	    var t,
	      isNeg = x.s < 0,
	      pi = getPi(Ctor, Ctor.precision, 1),
	      halfPi = pi.times(0.5);

	    x = x.abs();

	    if (x.lte(halfPi)) {
	      quadrant = isNeg ? 4 : 1;
	      return x;
	    }

	    t = x.divToInt(pi);

	    if (t.isZero()) {
	      quadrant = isNeg ? 3 : 2;
	    } else {
	      x = x.minus(t.times(pi));

	      // 0 <= x < pi
	      if (x.lte(halfPi)) {
	        quadrant = isOdd(t) ? (isNeg ? 2 : 3) : (isNeg ? 4 : 1);
	        return x;
	      }

	      quadrant = isOdd(t) ? (isNeg ? 1 : 4) : (isNeg ? 3 : 2);
	    }

	    return x.minus(pi).abs();
	  }


	  /*
	   * Return the value of Decimal `x` as a string in base `baseOut`.
	   *
	   * If the optional `sd` argument is present include a binary exponent suffix.
	   */
	  function toStringBinary(x, baseOut, sd, rm) {
	    var base, e, i, k, len, roundUp, str, xd, y,
	      Ctor = x.constructor,
	      isExp = sd !== void 0;

	    if (isExp) {
	      checkInt32(sd, 1, MAX_DIGITS);
	      if (rm === void 0) rm = Ctor.rounding;
	      else checkInt32(rm, 0, 8);
	    } else {
	      sd = Ctor.precision;
	      rm = Ctor.rounding;
	    }

	    if (!x.isFinite()) {
	      str = nonFiniteToString(x);
	    } else {
	      str = finiteToString(x);
	      i = str.indexOf('.');

	      // Use exponential notation according to `toExpPos` and `toExpNeg`? No, but if required:
	      // maxBinaryExponent = floor((decimalExponent + 1) * log[2](10))
	      // minBinaryExponent = floor(decimalExponent * log[2](10))
	      // log[2](10) = 3.321928094887362347870319429489390175864

	      if (isExp) {
	        base = 2;
	        if (baseOut == 16) {
	          sd = sd * 4 - 3;
	        } else if (baseOut == 8) {
	          sd = sd * 3 - 2;
	        }
	      } else {
	        base = baseOut;
	      }

	      // Convert the number as an integer then divide the result by its base raised to a power such
	      // that the fraction part will be restored.

	      // Non-integer.
	      if (i >= 0) {
	        str = str.replace('.', '');
	        y = new Ctor(1);
	        y.e = str.length - i;
	        y.d = convertBase(finiteToString(y), 10, base);
	        y.e = y.d.length;
	      }

	      xd = convertBase(str, 10, base);
	      e = len = xd.length;

	      // Remove trailing zeros.
	      for (; xd[--len] == 0;) xd.pop();

	      if (!xd[0]) {
	        str = isExp ? '0p+0' : '0';
	      } else {
	        if (i < 0) {
	          e--;
	        } else {
	          x = new Ctor(x);
	          x.d = xd;
	          x.e = e;
	          x = divide(x, y, sd, rm, 0, base);
	          xd = x.d;
	          e = x.e;
	          roundUp = inexact;
	        }

	        // The rounding digit, i.e. the digit after the digit that may be rounded up.
	        i = xd[sd];
	        k = base / 2;
	        roundUp = roundUp || xd[sd + 1] !== void 0;

	        roundUp = rm < 4
	          ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2))
	          : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 ||
	            rm === (x.s < 0 ? 8 : 7));

	        xd.length = sd;

	        if (roundUp) {

	          // Rounding up may mean the previous digit has to be rounded up and so on.
	          for (; ++xd[--sd] > base - 1;) {
	            xd[sd] = 0;
	            if (!sd) {
	              ++e;
	              xd.unshift(1);
	            }
	          }
	        }

	        // Determine trailing zeros.
	        for (len = xd.length; !xd[len - 1]; --len);

	        // E.g. [4, 11, 15] becomes 4bf.
	        for (i = 0, str = ''; i < len; i++) str += NUMERALS.charAt(xd[i]);

	        // Add binary exponent suffix?
	        if (isExp) {
	          if (len > 1) {
	            if (baseOut == 16 || baseOut == 8) {
	              i = baseOut == 16 ? 4 : 3;
	              for (--len; len % i; len++) str += '0';
	              xd = convertBase(str, base, baseOut);
	              for (len = xd.length; !xd[len - 1]; --len);

	              // xd[0] will always be be 1
	              for (i = 1, str = '1.'; i < len; i++) str += NUMERALS.charAt(xd[i]);
	            } else {
	              str = str.charAt(0) + '.' + str.slice(1);
	            }
	          }

	          str =  str + (e < 0 ? 'p' : 'p+') + e;
	        } else if (e < 0) {
	          for (; ++e;) str = '0' + str;
	          str = '0.' + str;
	        } else {
	          if (++e > len) for (e -= len; e-- ;) str += '0';
	          else if (e < len) str = str.slice(0, e) + '.' + str.slice(e);
	        }
	      }

	      str = (baseOut == 16 ? '0x' : baseOut == 2 ? '0b' : baseOut == 8 ? '0o' : '') + str;
	    }

	    return x.s < 0 ? '-' + str : str;
	  }


	  // Does not strip trailing zeros.
	  function truncate(arr, len) {
	    if (arr.length > len) {
	      arr.length = len;
	      return true;
	    }
	  }


	  // Decimal methods


	  /*
	   *  abs
	   *  acos
	   *  acosh
	   *  add
	   *  asin
	   *  asinh
	   *  atan
	   *  atanh
	   *  atan2
	   *  cbrt
	   *  ceil
	   *  clamp
	   *  clone
	   *  config
	   *  cos
	   *  cosh
	   *  div
	   *  exp
	   *  floor
	   *  hypot
	   *  ln
	   *  log
	   *  log2
	   *  log10
	   *  max
	   *  min
	   *  mod
	   *  mul
	   *  pow
	   *  random
	   *  round
	   *  set
	   *  sign
	   *  sin
	   *  sinh
	   *  sqrt
	   *  sub
	   *  sum
	   *  tan
	   *  tanh
	   *  trunc
	   */


	  /*
	   * Return a new Decimal whose value is the absolute value of `x`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function abs(x) {
	    return new this(x).abs();
	  }


	  /*
	   * Return a new Decimal whose value is the arccosine in radians of `x`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function acos(x) {
	    return new this(x).acos();
	  }


	  /*
	   * Return a new Decimal whose value is the inverse of the hyperbolic cosine of `x`, rounded to
	   * `precision` significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function acosh(x) {
	    return new this(x).acosh();
	  }


	  /*
	   * Return a new Decimal whose value is the sum of `x` and `y`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   * y {number|string|Decimal}
	   *
	   */
	  function add(x, y) {
	    return new this(x).plus(y);
	  }


	  /*
	   * Return a new Decimal whose value is the arcsine in radians of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function asin(x) {
	    return new this(x).asin();
	  }


	  /*
	   * Return a new Decimal whose value is the inverse of the hyperbolic sine of `x`, rounded to
	   * `precision` significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function asinh(x) {
	    return new this(x).asinh();
	  }


	  /*
	   * Return a new Decimal whose value is the arctangent in radians of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function atan(x) {
	    return new this(x).atan();
	  }


	  /*
	   * Return a new Decimal whose value is the inverse of the hyperbolic tangent of `x`, rounded to
	   * `precision` significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function atanh(x) {
	    return new this(x).atanh();
	  }


	  /*
	   * Return a new Decimal whose value is the arctangent in radians of `y/x` in the range -pi to pi
	   * (inclusive), rounded to `precision` significant digits using rounding mode `rounding`.
	   *
	   * Domain: [-Infinity, Infinity]
	   * Range: [-pi, pi]
	   *
	   * y {number|string|Decimal} The y-coordinate.
	   * x {number|string|Decimal} The x-coordinate.
	   *
	   * atan2(±0, -0)               = ±pi
	   * atan2(±0, +0)               = ±0
	   * atan2(±0, -x)               = ±pi for x > 0
	   * atan2(±0, x)                = ±0 for x > 0
	   * atan2(-y, ±0)               = -pi/2 for y > 0
	   * atan2(y, ±0)                = pi/2 for y > 0
	   * atan2(±y, -Infinity)        = ±pi for finite y > 0
	   * atan2(±y, +Infinity)        = ±0 for finite y > 0
	   * atan2(±Infinity, x)         = ±pi/2 for finite x
	   * atan2(±Infinity, -Infinity) = ±3*pi/4
	   * atan2(±Infinity, +Infinity) = ±pi/4
	   * atan2(NaN, x) = NaN
	   * atan2(y, NaN) = NaN
	   *
	   */
	  function atan2(y, x) {
	    y = new this(y);
	    x = new this(x);
	    var r,
	      pr = this.precision,
	      rm = this.rounding,
	      wpr = pr + 4;

	    // Either NaN
	    if (!y.s || !x.s) {
	      r = new this(NaN);

	    // Both ±Infinity
	    } else if (!y.d && !x.d) {
	      r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
	      r.s = y.s;

	    // x is ±Infinity or y is ±0
	    } else if (!x.d || y.isZero()) {
	      r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
	      r.s = y.s;

	    // y is ±Infinity or x is ±0
	    } else if (!y.d || x.isZero()) {
	      r = getPi(this, wpr, 1).times(0.5);
	      r.s = y.s;

	    // Both non-zero and finite
	    } else if (x.s < 0) {
	      this.precision = wpr;
	      this.rounding = 1;
	      r = this.atan(divide(y, x, wpr, 1));
	      x = getPi(this, wpr, 1);
	      this.precision = pr;
	      this.rounding = rm;
	      r = y.s < 0 ? r.minus(x) : r.plus(x);
	    } else {
	      r = this.atan(divide(y, x, wpr, 1));
	    }

	    return r;
	  }


	  /*
	   * Return a new Decimal whose value is the cube root of `x`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function cbrt(x) {
	    return new this(x).cbrt();
	  }


	  /*
	   * Return a new Decimal whose value is `x` rounded to an integer using `ROUND_CEIL`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function ceil(x) {
	    return finalise(x = new this(x), x.e + 1, 2);
	  }


	  /*
	   * Return a new Decimal whose value is `x` clamped to the range delineated by `min` and `max`.
	   *
	   * x {number|string|Decimal}
	   * min {number|string|Decimal}
	   * max {number|string|Decimal}
	   *
	   */
	  function clamp(x, min, max) {
	    return new this(x).clamp(min, max);
	  }


	  /*
	   * Configure global settings for a Decimal constructor.
	   *
	   * `obj` is an object with one or more of the following properties,
	   *
	   *   precision  {number}
	   *   rounding   {number}
	   *   toExpNeg   {number}
	   *   toExpPos   {number}
	   *   maxE       {number}
	   *   minE       {number}
	   *   modulo     {number}
	   *   crypto     {boolean|number}
	   *   defaults   {true}
	   *
	   * E.g. Decimal.config({ precision: 20, rounding: 4 })
	   *
	   */
	  function config(obj) {
	    if (!obj || typeof obj !== 'object') throw Error(decimalError + 'Object expected');
	    var i, p, v,
	      useDefaults = obj.defaults === true,
	      ps = [
	        'precision', 1, MAX_DIGITS,
	        'rounding', 0, 8,
	        'toExpNeg', -EXP_LIMIT, 0,
	        'toExpPos', 0, EXP_LIMIT,
	        'maxE', 0, EXP_LIMIT,
	        'minE', -EXP_LIMIT, 0,
	        'modulo', 0, 9
	      ];

	    for (i = 0; i < ps.length; i += 3) {
	      if (p = ps[i], useDefaults) this[p] = DEFAULTS[p];
	      if ((v = obj[p]) !== void 0) {
	        if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2]) this[p] = v;
	        else throw Error(invalidArgument + p + ': ' + v);
	      }
	    }

	    if (p = 'crypto', useDefaults) this[p] = DEFAULTS[p];
	    if ((v = obj[p]) !== void 0) {
	      if (v === true || v === false || v === 0 || v === 1) {
	        if (v) {
	          if (typeof crypto != 'undefined' && crypto &&
	            (crypto.getRandomValues || crypto.randomBytes)) {
	            this[p] = true;
	          } else {
	            throw Error(cryptoUnavailable);
	          }
	        } else {
	          this[p] = false;
	        }
	      } else {
	        throw Error(invalidArgument + p + ': ' + v);
	      }
	    }

	    return this;
	  }


	  /*
	   * Return a new Decimal whose value is the cosine of `x`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function cos(x) {
	    return new this(x).cos();
	  }


	  /*
	   * Return a new Decimal whose value is the hyperbolic cosine of `x`, rounded to precision
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function cosh(x) {
	    return new this(x).cosh();
	  }


	  /*
	   * Create and return a Decimal constructor with the same configuration properties as this Decimal
	   * constructor.
	   *
	   */
	  function clone(obj) {
	    var i, p, ps;

	    /*
	     * The Decimal constructor and exported function.
	     * Return a new Decimal instance.
	     *
	     * v {number|string|Decimal} A numeric value.
	     *
	     */
	    function Decimal(v) {
	      var e, i, t,
	        x = this;

	      // Decimal called without new.
	      if (!(x instanceof Decimal)) return new Decimal(v);

	      // Retain a reference to this Decimal constructor, and shadow Decimal.prototype.constructor
	      // which points to Object.
	      x.constructor = Decimal;

	      // Duplicate.
	      if (isDecimalInstance(v)) {
	        x.s = v.s;

	        if (external) {
	          if (!v.d || v.e > Decimal.maxE) {

	            // Infinity.
	            x.e = NaN;
	            x.d = null;
	          } else if (v.e < Decimal.minE) {

	            // Zero.
	            x.e = 0;
	            x.d = [0];
	          } else {
	            x.e = v.e;
	            x.d = v.d.slice();
	          }
	        } else {
	          x.e = v.e;
	          x.d = v.d ? v.d.slice() : v.d;
	        }

	        return;
	      }

	      t = typeof v;

	      if (t === 'number') {
	        if (v === 0) {
	          x.s = 1 / v < 0 ? -1 : 1;
	          x.e = 0;
	          x.d = [0];
	          return;
	        }

	        if (v < 0) {
	          v = -v;
	          x.s = -1;
	        } else {
	          x.s = 1;
	        }

	        // Fast path for small integers.
	        if (v === ~~v && v < 1e7) {
	          for (e = 0, i = v; i >= 10; i /= 10) e++;

	          if (external) {
	            if (e > Decimal.maxE) {
	              x.e = NaN;
	              x.d = null;
	            } else if (e < Decimal.minE) {
	              x.e = 0;
	              x.d = [0];
	            } else {
	              x.e = e;
	              x.d = [v];
	            }
	          } else {
	            x.e = e;
	            x.d = [v];
	          }

	          return;

	        // Infinity, NaN.
	        } else if (v * 0 !== 0) {
	          if (!v) x.s = NaN;
	          x.e = NaN;
	          x.d = null;
	          return;
	        }

	        return parseDecimal(x, v.toString());

	      } else if (t !== 'string') {
	        throw Error(invalidArgument + v);
	      }

	      // Minus sign?
	      if ((i = v.charCodeAt(0)) === 45) {
	        v = v.slice(1);
	        x.s = -1;
	      } else {
	        // Plus sign?
	        if (i === 43) v = v.slice(1);
	        x.s = 1;
	      }

	      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
	    }

	    Decimal.prototype = P;

	    Decimal.ROUND_UP = 0;
	    Decimal.ROUND_DOWN = 1;
	    Decimal.ROUND_CEIL = 2;
	    Decimal.ROUND_FLOOR = 3;
	    Decimal.ROUND_HALF_UP = 4;
	    Decimal.ROUND_HALF_DOWN = 5;
	    Decimal.ROUND_HALF_EVEN = 6;
	    Decimal.ROUND_HALF_CEIL = 7;
	    Decimal.ROUND_HALF_FLOOR = 8;
	    Decimal.EUCLID = 9;

	    Decimal.config = Decimal.set = config;
	    Decimal.clone = clone;
	    Decimal.isDecimal = isDecimalInstance;

	    Decimal.abs = abs;
	    Decimal.acos = acos;
	    Decimal.acosh = acosh;        // ES6
	    Decimal.add = add;
	    Decimal.asin = asin;
	    Decimal.asinh = asinh;        // ES6
	    Decimal.atan = atan;
	    Decimal.atanh = atanh;        // ES6
	    Decimal.atan2 = atan2;
	    Decimal.cbrt = cbrt;          // ES6
	    Decimal.ceil = ceil;
	    Decimal.clamp = clamp;
	    Decimal.cos = cos;
	    Decimal.cosh = cosh;          // ES6
	    Decimal.div = div;
	    Decimal.exp = exp;
	    Decimal.floor = floor;
	    Decimal.hypot = hypot;        // ES6
	    Decimal.ln = ln;
	    Decimal.log = log;
	    Decimal.log10 = log10;        // ES6
	    Decimal.log2 = log2;          // ES6
	    Decimal.max = max;
	    Decimal.min = min;
	    Decimal.mod = mod;
	    Decimal.mul = mul;
	    Decimal.pow = pow;
	    Decimal.random = random;
	    Decimal.round = round;
	    Decimal.sign = sign;          // ES6
	    Decimal.sin = sin;
	    Decimal.sinh = sinh;          // ES6
	    Decimal.sqrt = sqrt;
	    Decimal.sub = sub;
	    Decimal.sum = sum;
	    Decimal.tan = tan;
	    Decimal.tanh = tanh;          // ES6
	    Decimal.trunc = trunc;        // ES6

	    if (obj === void 0) obj = {};
	    if (obj) {
	      if (obj.defaults !== true) {
	        ps = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'maxE', 'minE', 'modulo', 'crypto'];
	        for (i = 0; i < ps.length;) if (!obj.hasOwnProperty(p = ps[i++])) obj[p] = this[p];
	      }
	    }

	    Decimal.config(obj);

	    return Decimal;
	  }


	  /*
	   * Return a new Decimal whose value is `x` divided by `y`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   * y {number|string|Decimal}
	   *
	   */
	  function div(x, y) {
	    return new this(x).div(y);
	  }


	  /*
	   * Return a new Decimal whose value is the natural exponential of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} The power to which to raise the base of the natural log.
	   *
	   */
	  function exp(x) {
	    return new this(x).exp();
	  }


	  /*
	   * Return a new Decimal whose value is `x` round to an integer using `ROUND_FLOOR`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function floor(x) {
	    return finalise(x = new this(x), x.e + 1, 3);
	  }


	  /*
	   * Return a new Decimal whose value is the square root of the sum of the squares of the arguments,
	   * rounded to `precision` significant digits using rounding mode `rounding`.
	   *
	   * hypot(a, b, ...) = sqrt(a^2 + b^2 + ...)
	   *
	   * arguments {number|string|Decimal}
	   *
	   */
	  function hypot() {
	    var i, n,
	      t = new this(0);

	    external = false;

	    for (i = 0; i < arguments.length;) {
	      n = new this(arguments[i++]);
	      if (!n.d) {
	        if (n.s) {
	          external = true;
	          return new this(1 / 0);
	        }
	        t = n;
	      } else if (t.d) {
	        t = t.plus(n.times(n));
	      }
	    }

	    external = true;

	    return t.sqrt();
	  }


	  /*
	   * Return true if object is a Decimal instance (where Decimal is any Decimal constructor),
	   * otherwise return false.
	   *
	   */
	  function isDecimalInstance(obj) {
	    return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
	  }


	  /*
	   * Return a new Decimal whose value is the natural logarithm of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function ln(x) {
	    return new this(x).ln();
	  }


	  /*
	   * Return a new Decimal whose value is the log of `x` to the base `y`, or to base 10 if no base
	   * is specified, rounded to `precision` significant digits using rounding mode `rounding`.
	   *
	   * log[y](x)
	   *
	   * x {number|string|Decimal} The argument of the logarithm.
	   * y {number|string|Decimal} The base of the logarithm.
	   *
	   */
	  function log(x, y) {
	    return new this(x).log(y);
	  }


	  /*
	   * Return a new Decimal whose value is the base 2 logarithm of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function log2(x) {
	    return new this(x).log(2);
	  }


	  /*
	   * Return a new Decimal whose value is the base 10 logarithm of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function log10(x) {
	    return new this(x).log(10);
	  }


	  /*
	   * Return a new Decimal whose value is the maximum of the arguments.
	   *
	   * arguments {number|string|Decimal}
	   *
	   */
	  function max() {
	    return maxOrMin(this, arguments, 'lt');
	  }


	  /*
	   * Return a new Decimal whose value is the minimum of the arguments.
	   *
	   * arguments {number|string|Decimal}
	   *
	   */
	  function min() {
	    return maxOrMin(this, arguments, 'gt');
	  }


	  /*
	   * Return a new Decimal whose value is `x` modulo `y`, rounded to `precision` significant digits
	   * using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   * y {number|string|Decimal}
	   *
	   */
	  function mod(x, y) {
	    return new this(x).mod(y);
	  }


	  /*
	   * Return a new Decimal whose value is `x` multiplied by `y`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   * y {number|string|Decimal}
	   *
	   */
	  function mul(x, y) {
	    return new this(x).mul(y);
	  }


	  /*
	   * Return a new Decimal whose value is `x` raised to the power `y`, rounded to precision
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} The base.
	   * y {number|string|Decimal} The exponent.
	   *
	   */
	  function pow(x, y) {
	    return new this(x).pow(y);
	  }


	  /*
	   * Returns a new Decimal with a random value equal to or greater than 0 and less than 1, and with
	   * `sd`, or `Decimal.precision` if `sd` is omitted, significant digits (or less if trailing zeros
	   * are produced).
	   *
	   * [sd] {number} Significant digits. Integer, 0 to MAX_DIGITS inclusive.
	   *
	   */
	  function random(sd) {
	    var d, e, k, n,
	      i = 0,
	      r = new this(1),
	      rd = [];

	    if (sd === void 0) sd = this.precision;
	    else checkInt32(sd, 1, MAX_DIGITS);

	    k = Math.ceil(sd / LOG_BASE);

	    if (!this.crypto) {
	      for (; i < k;) rd[i++] = Math.random() * 1e7 | 0;

	    // Browsers supporting crypto.getRandomValues.
	    } else if (crypto.getRandomValues) {
	      d = crypto.getRandomValues(new Uint32Array(k));

	      for (; i < k;) {
	        n = d[i];

	        // 0 <= n < 4294967296
	        // Probability n >= 4.29e9, is 4967296 / 4294967296 = 0.00116 (1 in 865).
	        if (n >= 4.29e9) {
	          d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
	        } else {

	          // 0 <= n <= 4289999999
	          // 0 <= (n % 1e7) <= 9999999
	          rd[i++] = n % 1e7;
	        }
	      }

	    // Node.js supporting crypto.randomBytes.
	    } else if (crypto.randomBytes) {

	      // buffer
	      d = crypto.randomBytes(k *= 4);

	      for (; i < k;) {

	        // 0 <= n < 2147483648
	        n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 0x7f) << 24);

	        // Probability n >= 2.14e9, is 7483648 / 2147483648 = 0.0035 (1 in 286).
	        if (n >= 2.14e9) {
	          crypto.randomBytes(4).copy(d, i);
	        } else {

	          // 0 <= n <= 2139999999
	          // 0 <= (n % 1e7) <= 9999999
	          rd.push(n % 1e7);
	          i += 4;
	        }
	      }

	      i = k / 4;
	    } else {
	      throw Error(cryptoUnavailable);
	    }

	    k = rd[--i];
	    sd %= LOG_BASE;

	    // Convert trailing digits to zeros according to sd.
	    if (k && sd) {
	      n = mathpow(10, LOG_BASE - sd);
	      rd[i] = (k / n | 0) * n;
	    }

	    // Remove trailing words which are zero.
	    for (; rd[i] === 0; i--) rd.pop();

	    // Zero?
	    if (i < 0) {
	      e = 0;
	      rd = [0];
	    } else {
	      e = -1;

	      // Remove leading words which are zero and adjust exponent accordingly.
	      for (; rd[0] === 0; e -= LOG_BASE) rd.shift();

	      // Count the digits of the first word of rd to determine leading zeros.
	      for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;

	      // Adjust the exponent for leading zeros of the first word of rd.
	      if (k < LOG_BASE) e -= LOG_BASE - k;
	    }

	    r.e = e;
	    r.d = rd;

	    return r;
	  }


	  /*
	   * Return a new Decimal whose value is `x` rounded to an integer using rounding mode `rounding`.
	   *
	   * To emulate `Math.round`, set rounding to 7 (ROUND_HALF_CEIL).
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function round(x) {
	    return finalise(x = new this(x), x.e + 1, this.rounding);
	  }


	  /*
	   * Return
	   *   1    if x > 0,
	   *  -1    if x < 0,
	   *   0    if x is 0,
	   *  -0    if x is -0,
	   *   NaN  otherwise
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function sign(x) {
	    x = new this(x);
	    return x.d ? (x.d[0] ? x.s : 0 * x.s) : x.s || NaN;
	  }


	  /*
	   * Return a new Decimal whose value is the sine of `x`, rounded to `precision` significant digits
	   * using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function sin(x) {
	    return new this(x).sin();
	  }


	  /*
	   * Return a new Decimal whose value is the hyperbolic sine of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function sinh(x) {
	    return new this(x).sinh();
	  }


	  /*
	   * Return a new Decimal whose value is the square root of `x`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function sqrt(x) {
	    return new this(x).sqrt();
	  }


	  /*
	   * Return a new Decimal whose value is `x` minus `y`, rounded to `precision` significant digits
	   * using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal}
	   * y {number|string|Decimal}
	   *
	   */
	  function sub(x, y) {
	    return new this(x).sub(y);
	  }


	  /*
	   * Return a new Decimal whose value is the sum of the arguments, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * Only the result is rounded, not the intermediate calculations.
	   *
	   * arguments {number|string|Decimal}
	   *
	   */
	  function sum() {
	    var i = 0,
	      args = arguments,
	      x = new this(args[i]);

	    external = false;
	    for (; x.s && ++i < args.length;) x = x.plus(args[i]);
	    external = true;

	    return finalise(x, this.precision, this.rounding);
	  }


	  /*
	   * Return a new Decimal whose value is the tangent of `x`, rounded to `precision` significant
	   * digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function tan(x) {
	    return new this(x).tan();
	  }


	  /*
	   * Return a new Decimal whose value is the hyperbolic tangent of `x`, rounded to `precision`
	   * significant digits using rounding mode `rounding`.
	   *
	   * x {number|string|Decimal} A value in radians.
	   *
	   */
	  function tanh(x) {
	    return new this(x).tanh();
	  }


	  /*
	   * Return a new Decimal whose value is `x` truncated to an integer.
	   *
	   * x {number|string|Decimal}
	   *
	   */
	  function trunc(x) {
	    return finalise(x = new this(x), x.e + 1, 1);
	  }


	  // Create and configure initial Decimal constructor.
	  Decimal = clone(DEFAULTS);
	  Decimal.prototype.constructor = Decimal;
	  Decimal['default'] = Decimal.Decimal = Decimal;

	  // Create the internal constants from their string values.
	  LN10 = new Decimal(LN10);
	  PI = new Decimal(PI);


	  // Export.


	  // AMD.
	  if (module.exports) {
	    if (typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol') {
	      P[Symbol['for']('nodejs.util.inspect.custom')] = P.toString;
	      P[Symbol.toStringTag] = 'Decimal';
	    }

	    module.exports = Decimal;

	  // Browser.
	  } else {
	    if (!globalScope) {
	      globalScope = typeof self != 'undefined' && self && self.self == self ? self : window;
	    }

	    noConflict = globalScope.Decimal;
	    Decimal.noConflict = function () {
	      globalScope.Decimal = noConflict;
	      return Decimal;
	    };

	    globalScope.Decimal = Decimal;
	  }
	})(commonjsGlobal); 
} (decimal));

var decimalExports = decimal.exports;

var lodash = {exports: {}};

/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
lodash.exports;

(function (module, exports) {
(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined$1;

	  /** Used as the semantic version number. */
	  var VERSION = '4.17.21';

	  /** Used as the size to enable large array optimizations. */
	  var LARGE_ARRAY_SIZE = 200;

	  /** Error message constants. */
	  var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
	      FUNC_ERROR_TEXT = 'Expected a function',
	      INVALID_TEMPL_VAR_ERROR_TEXT = 'Invalid `variable` option passed into `_.template`';

	  /** Used to stand-in for `undefined` hash values. */
	  var HASH_UNDEFINED = '__lodash_hash_undefined__';

	  /** Used as the maximum memoize cache size. */
	  var MAX_MEMOIZE_SIZE = 500;

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** Used to compose bitmasks for cloning. */
	  var CLONE_DEEP_FLAG = 1,
	      CLONE_FLAT_FLAG = 2,
	      CLONE_SYMBOLS_FLAG = 4;

	  /** Used to compose bitmasks for value comparisons. */
	  var COMPARE_PARTIAL_FLAG = 1,
	      COMPARE_UNORDERED_FLAG = 2;

	  /** Used to compose bitmasks for function metadata. */
	  var WRAP_BIND_FLAG = 1,
	      WRAP_BIND_KEY_FLAG = 2,
	      WRAP_CURRY_BOUND_FLAG = 4,
	      WRAP_CURRY_FLAG = 8,
	      WRAP_CURRY_RIGHT_FLAG = 16,
	      WRAP_PARTIAL_FLAG = 32,
	      WRAP_PARTIAL_RIGHT_FLAG = 64,
	      WRAP_ARY_FLAG = 128,
	      WRAP_REARG_FLAG = 256,
	      WRAP_FLIP_FLAG = 512;

	  /** Used as default options for `_.truncate`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect hot functions by number of calls within a span of milliseconds. */
	  var HOT_COUNT = 800,
	      HOT_SPAN = 16;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2,
	      LAZY_WHILE_FLAG = 3;

	  /** Used as references for various `Number` constants. */
	  var INFINITY = 1 / 0,
	      MAX_SAFE_INTEGER = 9007199254740991,
	      MAX_INTEGER = 1.7976931348623157e+308,
	      NAN = 0 / 0;

	  /** Used as references for the maximum length and index of an array. */
	  var MAX_ARRAY_LENGTH = 4294967295,
	      MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	      HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	  /** Used to associate wrap methods with their bit flags. */
	  var wrapFlags = [
	    ['ary', WRAP_ARY_FLAG],
	    ['bind', WRAP_BIND_FLAG],
	    ['bindKey', WRAP_BIND_KEY_FLAG],
	    ['curry', WRAP_CURRY_FLAG],
	    ['curryRight', WRAP_CURRY_RIGHT_FLAG],
	    ['flip', WRAP_FLIP_FLAG],
	    ['partial', WRAP_PARTIAL_FLAG],
	    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
	    ['rearg', WRAP_REARG_FLAG]
	  ];

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      asyncTag = '[object AsyncFunction]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      domExcTag = '[object DOMException]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      genTag = '[object GeneratorFunction]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      nullTag = '[object Null]',
	      objectTag = '[object Object]',
	      promiseTag = '[object Promise]',
	      proxyTag = '[object Proxy]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      symbolTag = '[object Symbol]',
	      undefinedTag = '[object Undefined]',
	      weakMapTag = '[object WeakMap]',
	      weakSetTag = '[object WeakSet]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      dataViewTag = '[object DataView]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g,
	      reUnescapedHtml = /[&<>"']/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	  /**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	   */
	  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
	      reHasRegExpChar = RegExp(reRegExpChar.source);

	  /** Used to match leading whitespace. */
	  var reTrimStart = /^\s+/;

	  /** Used to match a single whitespace character. */
	  var reWhitespace = /\s/;

	  /** Used to match wrap detail comments. */
	  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	      reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
	      reSplitDetails = /,? & /;

	  /** Used to match words composed of alphanumeric characters. */
	  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	  /**
	   * Used to validate the `validate` option in `_.template` variable.
	   *
	   * Forbids characters which could potentially change the meaning of the function argument definition:
	   * - "()," (modification of function parameters)
	   * - "=" (default value)
	   * - "[]{}" (destructuring of function parameters)
	   * - "/" (beginning of a comment)
	   * - whitespace
	   */
	  var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /**
	   * Used to match
	   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	   */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect bad signed hexadecimal string values. */
	  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	  /** Used to detect binary string values. */
	  var reIsBinary = /^0b[01]+$/i;

	  /** Used to detect host constructors (Safari). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect octal string values. */
	  var reIsOctal = /^0o[0-7]+$/i;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^(?:0|[1-9]\d*)$/;

	  /** Used to match Latin Unicode letters (excluding mathematical operators). */
	  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to compose unicode character classes. */
	  var rsAstralRange = '\\ud800-\\udfff',
	      rsComboMarksRange = '\\u0300-\\u036f',
	      reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	      rsComboSymbolsRange = '\\u20d0-\\u20ff',
	      rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	      rsDingbatRange = '\\u2700-\\u27bf',
	      rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	      rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	      rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	      rsPunctuationRange = '\\u2000-\\u206f',
	      rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	      rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	      rsVarRange = '\\ufe0e\\ufe0f',
	      rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	  /** Used to compose unicode capture groups. */
	  var rsApos = "['\u2019]",
	      rsAstral = '[' + rsAstralRange + ']',
	      rsBreak = '[' + rsBreakRange + ']',
	      rsCombo = '[' + rsComboRange + ']',
	      rsDigits = '\\d+',
	      rsDingbat = '[' + rsDingbatRange + ']',
	      rsLower = '[' + rsLowerRange + ']',
	      rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	      rsFitz = '\\ud83c[\\udffb-\\udfff]',
	      rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	      rsNonAstral = '[^' + rsAstralRange + ']',
	      rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	      rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	      rsUpper = '[' + rsUpperRange + ']',
	      rsZWJ = '\\u200d';

	  /** Used to compose unicode regexes. */
	  var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	      rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	      rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	      rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	      reOptMod = rsModifier + '?',
	      rsOptVar = '[' + rsVarRange + ']?',
	      rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	      rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	      rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	      rsSeq = rsOptVar + reOptMod + rsOptJoin,
	      rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
	      rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	  /** Used to match apostrophes. */
	  var reApos = RegExp(rsApos, 'g');

	  /**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */
	  var reComboMark = RegExp(rsCombo, 'g');

	  /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	  var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	  /** Used to match complex or compound words. */
	  var reUnicodeWord = RegExp([
	    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	    rsUpper + '+' + rsOptContrUpper,
	    rsOrdUpper,
	    rsOrdLower,
	    rsDigits,
	    rsEmoji
	  ].join('|'), 'g');

	  /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	  var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

	  /** Used to detect strings that need a more robust regexp to match words. */
	  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'Buffer', 'DataView', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Map', 'Math', 'Object',
	    'Promise', 'RegExp', 'Set', 'String', 'Symbol', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap',
	    '_', 'clearTimeout', 'isFinite', 'parseInt', 'setTimeout'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	  typedArrayTags[setTag] = typedArrayTags[stringTag] =
	  typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	  cloneableTags[boolTag] = cloneableTags[dateTag] =
	  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	  cloneableTags[int32Tag] = cloneableTags[mapTag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[setTag] =
	  cloneableTags[stringTag] = cloneableTags[symbolTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used to map Latin Unicode letters to basic Latin letters. */
	  var deburredLetters = {
	    // Latin-1 Supplement block.
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss',
	    // Latin Extended-A block.
	    '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	    '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	    '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	    '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	    '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	    '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	    '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	    '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	    '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	    '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	    '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	    '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	    '\u0134': 'J',  '\u0135': 'j',
	    '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	    '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	    '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	    '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	    '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	    '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	    '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	    '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	    '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	    '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	    '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	    '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	    '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	    '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	    '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	    '\u0174': 'W',  '\u0175': 'w',
	    '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	    '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	    '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	    '\u0132': 'IJ', '\u0133': 'ij',
	    '\u0152': 'Oe', '\u0153': 'oe',
	    '\u0149': "'n", '\u017f': 's'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'"
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Built-in method references without a dependency on `root`. */
	  var freeParseFloat = parseFloat,
	      freeParseInt = parseInt;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	  /** Detect free variable `self`. */
	  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	  /** Used as a reference to the global object. */
	  var root = freeGlobal || freeSelf || Function('return this')();

	  /** Detect free variable `exports`. */
	  var freeExports = exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports;

	  /** Detect free variable `process` from Node.js. */
	  var freeProcess = moduleExports && freeGlobal.process;

	  /** Used to access faster Node.js helpers. */
	  var nodeUtil = (function() {
	    try {
	      // Use `util.types` for Node.js 10+.
	      var types = freeModule && freeModule.require && freeModule.require('util').types;

	      if (types) {
	        return types;
	      }

	      // Legacy `process.binding('util')` for Node.js < 10.
	      return freeProcess && freeProcess.binding && freeProcess.binding('util');
	    } catch (e) {}
	  }());

	  /* Node.js helper references. */
	  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer,
	      nodeIsDate = nodeUtil && nodeUtil.isDate,
	      nodeIsMap = nodeUtil && nodeUtil.isMap,
	      nodeIsRegExp = nodeUtil && nodeUtil.isRegExp,
	      nodeIsSet = nodeUtil && nodeUtil.isSet,
	      nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */
	  function apply(func, thisArg, args) {
	    switch (args.length) {
	      case 0: return func.call(thisArg);
	      case 1: return func.call(thisArg, args[0]);
	      case 2: return func.call(thisArg, args[0], args[1]);
	      case 3: return func.call(thisArg, args[0], args[1], args[2]);
	    }
	    return func.apply(thisArg, args);
	  }

	  /**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */
	  function arrayAggregator(array, setter, iteratee, accumulator) {
	    var index = -1,
	        length = array == null ? 0 : array.length;

	    while (++index < length) {
	      var value = array[index];
	      setter(accumulator, value, iteratee(value), array);
	    }
	    return accumulator;
	  }

	  /**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEach(array, iteratee) {
	    var index = -1,
	        length = array == null ? 0 : array.length;

	    while (++index < length) {
	      if (iteratee(array[index], index, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayEachRight(array, iteratee) {
	    var length = array == null ? 0 : array.length;

	    while (length--) {
	      if (iteratee(array[length], length, array) === false) {
	        break;
	      }
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */
	  function arrayEvery(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length;

	    while (++index < length) {
	      if (!predicate(array[index], index, array)) {
	        return false;
	      }
	    }
	    return true;
	  }

	  /**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */
	  function arrayFilter(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length,
	        resIndex = 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (predicate(value, index, array)) {
	        result[resIndex++] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludes(array, value) {
	    var length = array == null ? 0 : array.length;
	    return !!length && baseIndexOf(array, value, 0) > -1;
	  }

	  /**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */
	  function arrayIncludesWith(array, value, comparator) {
	    var index = -1,
	        length = array == null ? 0 : array.length;

	    while (++index < length) {
	      if (comparator(value, array[index])) {
	        return true;
	      }
	    }
	    return false;
	  }

	  /**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */
	  function arrayMap(array, iteratee) {
	    var index = -1,
	        length = array == null ? 0 : array.length,
	        result = Array(length);

	    while (++index < length) {
	      result[index] = iteratee(array[index], index, array);
	    }
	    return result;
	  }

	  /**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */
	  function arrayPush(array, values) {
	    var index = -1,
	        length = values.length,
	        offset = array.length;

	    while (++index < length) {
	      array[offset + index] = values[index];
	    }
	    return array;
	  }

	  /**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduce(array, iteratee, accumulator, initAccum) {
	    var index = -1,
	        length = array == null ? 0 : array.length;

	    if (initAccum && length) {
	      accumulator = array[++index];
	    }
	    while (++index < length) {
	      accumulator = iteratee(accumulator, array[index], index, array);
	    }
	    return accumulator;
	  }

	  /**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */
	  function arrayReduceRight(array, iteratee, accumulator, initAccum) {
	    var length = array == null ? 0 : array.length;
	    if (initAccum && length) {
	      accumulator = array[--length];
	    }
	    while (length--) {
	      accumulator = iteratee(accumulator, array[length], length, array);
	    }
	    return accumulator;
	  }

	  /**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */
	  function arraySome(array, predicate) {
	    var index = -1,
	        length = array == null ? 0 : array.length;

	    while (++index < length) {
	      if (predicate(array[index], index, array)) {
	        return true;
	      }
	    }
	    return false;
	  }

	  /**
	   * Gets the size of an ASCII `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */
	  var asciiSize = baseProperty('length');

	  /**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function asciiToArray(string) {
	    return string.split('');
	  }

	  /**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
	  function asciiWords(string) {
	    return string.match(reAsciiWord) || [];
	  }

	  /**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */
	  function baseFindKey(collection, predicate, eachFunc) {
	    var result;
	    eachFunc(collection, function(value, key, collection) {
	      if (predicate(value, key, collection)) {
	        result = key;
	        return false;
	      }
	    });
	    return result;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 1 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    return value === value
	      ? strictIndexOf(array, value, fromIndex)
	      : baseFindIndex(array, baseIsNaN, fromIndex);
	  }

	  /**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOfWith(array, value, fromIndex, comparator) {
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (comparator(array[index], value)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */
	  function baseIsNaN(value) {
	    return value !== value;
	  }

	  /**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */
	  function baseMean(array, iteratee) {
	    var length = array == null ? 0 : array.length;
	    return length ? (baseSum(array, iteratee) / length) : NAN;
	  }

	  /**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function baseProperty(key) {
	    return function(object) {
	      return object == null ? undefined$1 : object[key];
	    };
	  }

	  /**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */
	  function basePropertyOf(object) {
	    return function(key) {
	      return object == null ? undefined$1 : object[key];
	    };
	  }

	  /**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */
	  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
	    eachFunc(collection, function(value, index, collection) {
	      accumulator = initAccum
	        ? (initAccum = false, value)
	        : iteratee(accumulator, value, index, collection);
	    });
	    return accumulator;
	  }

	  /**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */
	  function baseSortBy(array, comparer) {
	    var length = array.length;

	    array.sort(comparer);
	    while (length--) {
	      array[length] = array[length].value;
	    }
	    return array;
	  }

	  /**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */
	  function baseSum(array, iteratee) {
	    var result,
	        index = -1,
	        length = array.length;

	    while (++index < length) {
	      var current = iteratee(array[index]);
	      if (current !== undefined$1) {
	        result = result === undefined$1 ? current : (result + current);
	      }
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */
	  function baseTimes(n, iteratee) {
	    var index = -1,
	        result = Array(n);

	    while (++index < n) {
	      result[index] = iteratee(index);
	    }
	    return result;
	  }

	  /**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */
	  function baseToPairs(object, props) {
	    return arrayMap(props, function(key) {
	      return [key, object[key]];
	    });
	  }

	  /**
	   * The base implementation of `_.trim`.
	   *
	   * @private
	   * @param {string} string The string to trim.
	   * @returns {string} Returns the trimmed string.
	   */
	  function baseTrim(string) {
	    return string
	      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
	      : string;
	  }

	  /**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */
	  function baseUnary(func) {
	    return function(value) {
	      return func(value);
	    };
	  }

	  /**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */
	  function baseValues(object, props) {
	    return arrayMap(props, function(key) {
	      return object[key];
	    });
	  }

	  /**
	   * Checks if a `cache` value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */
	  function cacheHas(cache, key) {
	    return cache.has(key);
	  }

	  /**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */
	  function charsStartIndex(strSymbols, chrSymbols) {
	    var index = -1,
	        length = strSymbols.length;

	    while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */
	  function charsEndIndex(strSymbols, chrSymbols) {
	    var index = strSymbols.length;

	    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	    return index;
	  }

	  /**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */
	  function countHolders(array, placeholder) {
	    var length = array.length,
	        result = 0;

	    while (length--) {
	      if (array[length] === placeholder) {
	        ++result;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	   * letters to basic Latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  var deburrLetter = basePropertyOf(deburredLetters);

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  var escapeHtmlChar = basePropertyOf(htmlEscapes);

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */
	  function getValue(object, key) {
	    return object == null ? undefined$1 : object[key];
	  }

	  /**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */
	  function hasUnicode(string) {
	    return reHasUnicode.test(string);
	  }

	  /**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */
	  function hasUnicodeWord(string) {
	    return reHasUnicodeWord.test(string);
	  }

	  /**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function iteratorToArray(iterator) {
	    var data,
	        result = [];

	    while (!(data = iterator.next()).done) {
	      result.push(data.value);
	    }
	    return result;
	  }

	  /**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */
	  function mapToArray(map) {
	    var index = -1,
	        result = Array(map.size);

	    map.forEach(function(value, key) {
	      result[++index] = [key, value];
	    });
	    return result;
	  }

	  /**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */
	  function overArg(func, transform) {
	    return function(arg) {
	      return func(transform(arg));
	    };
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = 0,
	        result = [];

	    while (++index < length) {
	      var value = array[index];
	      if (value === placeholder || value === PLACEHOLDER) {
	        array[index] = PLACEHOLDER;
	        result[resIndex++] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */
	  function setToArray(set) {
	    var index = -1,
	        result = Array(set.size);

	    set.forEach(function(value) {
	      result[++index] = value;
	    });
	    return result;
	  }

	  /**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */
	  function setToPairs(set) {
	    var index = -1,
	        result = Array(set.size);

	    set.forEach(function(value) {
	      result[++index] = [value, value];
	    });
	    return result;
	  }

	  /**
	   * A specialized version of `_.indexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function strictIndexOf(array, value, fromIndex) {
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * A specialized version of `_.lastIndexOf` which performs strict equality
	   * comparisons of values, i.e. `===`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function strictLastIndexOf(array, value, fromIndex) {
	    var index = fromIndex + 1;
	    while (index--) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return index;
	  }

	  /**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */
	  function stringSize(string) {
	    return hasUnicode(string)
	      ? unicodeSize(string)
	      : asciiSize(string);
	  }

	  /**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function stringToArray(string) {
	    return hasUnicode(string)
	      ? unicodeToArray(string)
	      : asciiToArray(string);
	  }

	  /**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedEndIndex(string) {
	    var index = string.length;

	    while (index-- && reWhitespace.test(string.charAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);

	  /**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */
	  function unicodeSize(string) {
	    var result = reUnicode.lastIndex = 0;
	    while (reUnicode.test(string)) {
	      ++result;
	    }
	    return result;
	  }

	  /**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */
	  function unicodeToArray(string) {
	    return string.match(reUnicode) || [];
	  }

	  /**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */
	  function unicodeWords(string) {
	    return string.match(reUnicodeWord) || [];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  var runInContext = (function runInContext(context) {
	    context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));

	    /** Built-in constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for built-in method references. */
	    var arrayProto = Array.prototype,
	        funcProto = Function.prototype,
	        objectProto = Object.prototype;

	    /** Used to detect overreaching core-js shims. */
	    var coreJsData = context['__core-js_shared__'];

	    /** Used to resolve the decompiled source of functions. */
	    var funcToString = funcProto.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /** Used to detect methods masquerading as native. */
	    var maskSrcKey = (function() {
	      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	      return uid ? ('Symbol(src)_1.' + uid) : '';
	    }());

	    /**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */
	    var nativeObjectToString = objectProto.toString;

	    /** Used to infer the `Object` constructor. */
	    var objectCtorString = funcToString.call(Object);

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = root._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Built-in value references. */
	    var Buffer = moduleExports ? context.Buffer : undefined$1,
	        Symbol = context.Symbol,
	        Uint8Array = context.Uint8Array,
	        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1,
	        getPrototype = overArg(Object.getPrototypeOf, Object),
	        objectCreate = Object.create,
	        propertyIsEnumerable = objectProto.propertyIsEnumerable,
	        splice = arrayProto.splice,
	        spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined$1,
	        symIterator = Symbol ? Symbol.iterator : undefined$1,
	        symToStringTag = Symbol ? Symbol.toStringTag : undefined$1;

	    var defineProperty = (function() {
	      try {
	        var func = getNative(Object, 'defineProperty');
	        func({}, '', {});
	        return func;
	      } catch (e) {}
	    }());

	    /** Mocked built-ins. */
	    var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout,
	        ctxNow = Date && Date.now !== root.Date.now && Date.now,
	        ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;

	    /* Built-in method references for those with the same name as other `lodash` methods. */
	    var nativeCeil = Math.ceil,
	        nativeFloor = Math.floor,
	        nativeGetSymbols = Object.getOwnPropertySymbols,
	        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1,
	        nativeIsFinite = context.isFinite,
	        nativeJoin = arrayProto.join,
	        nativeKeys = overArg(Object.keys, Object),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = Date.now,
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random,
	        nativeReverse = arrayProto.reverse;

	    /* Built-in method references that are verified to be native. */
	    var DataView = getNative(context, 'DataView'),
	        Map = getNative(context, 'Map'),
	        Promise = getNative(context, 'Promise'),
	        Set = getNative(context, 'Set'),
	        WeakMap = getNative(context, 'WeakMap'),
	        nativeCreate = getNative(Object, 'create');

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /** Used to detect maps, sets, and weakmaps. */
	    var dataViewCtorString = toSource(DataView),
	        mapCtorString = toSource(Map),
	        promiseCtorString = toSource(Promise),
	        setCtorString = toSource(Set),
	        weakMapCtorString = toSource(WeakMap);

	    /** Used to convert symbols to primitives and strings. */
	    var symbolProto = Symbol ? Symbol.prototype : undefined$1,
	        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1,
	        symbolToString = symbolProto ? symbolProto.toString : undefined$1;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array and iteratees accept only
	     * one argument. The heuristic for whether a section qualifies for shortcut
	     * fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} proto The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(proto) {
	        if (!isObject(proto)) {
	          return {};
	        }
	        if (objectCreate) {
	          return objectCreate(proto);
	        }
	        object.prototype = proto;
	        var result = new object;
	        object.prototype = undefined$1;
	        return result;
	      };
	    }());

	    /**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */
	    function LodashWrapper(value, chainAll) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__chain__ = !!chainAll;
	      this.__index__ = 0;
	      this.__values__ = undefined$1;
	    }

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
	     * following template settings to use alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */
	        '_': lodash
	      }
	    };

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;
	    lodash.prototype.constructor = lodash;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = [];
	      this.__dir__ = 1;
	      this.__filtered__ = false;
	      this.__iteratees__ = [];
	      this.__takeCount__ = MAX_ARRAY_LENGTH;
	      this.__views__ = [];
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var result = new LazyWrapper(this.__wrapped__);
	      result.__actions__ = copyArray(this.__actions__);
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = copyArray(this.__iteratees__);
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = copyArray(this.__views__);
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value(),
	          dir = this.__dir__,
	          isArr = isArray(array),
	          isRight = dir < 0,
	          arrLength = isArr ? array.length : 0,
	          view = getView(0, arrLength, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees.length,
	          resIndex = 0,
	          takeCount = nativeMin(length, this.__takeCount__);

	      if (!isArr || (!isRight && arrLength == length && takeCount == length)) {
	        return baseWrapperValue(array, this.__actions__);
	      }
	      var result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type,
	              computed = iteratee(value);

	          if (type == LAZY_MAP_FLAG) {
	            value = computed;
	          } else if (!computed) {
	            if (type == LAZY_FILTER_FLAG) {
	              continue outer;
	            } else {
	              break outer;
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    // Ensure `LazyWrapper` is an instance of `baseLodash`.
	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function Hash(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;

	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }

	    /**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */
	    function hashClear() {
	      this.__data__ = nativeCreate ? nativeCreate(null) : {};
	      this.size = 0;
	    }

	    /**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function hashDelete(key) {
	      var result = this.has(key) && delete this.__data__[key];
	      this.size -= result ? 1 : 0;
	      return result;
	    }

	    /**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function hashGet(key) {
	      var data = this.__data__;
	      if (nativeCreate) {
	        var result = data[key];
	        return result === HASH_UNDEFINED ? undefined$1 : result;
	      }
	      return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
	    }

	    /**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function hashHas(key) {
	      var data = this.__data__;
	      return nativeCreate ? (data[key] !== undefined$1) : hasOwnProperty.call(data, key);
	    }

	    /**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */
	    function hashSet(key, value) {
	      var data = this.__data__;
	      this.size += this.has(key) ? 0 : 1;
	      data[key] = (nativeCreate && value === undefined$1) ? HASH_UNDEFINED : value;
	      return this;
	    }

	    // Add methods to `Hash`.
	    Hash.prototype.clear = hashClear;
	    Hash.prototype['delete'] = hashDelete;
	    Hash.prototype.get = hashGet;
	    Hash.prototype.has = hashHas;
	    Hash.prototype.set = hashSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function ListCache(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;

	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }

	    /**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */
	    function listCacheClear() {
	      this.__data__ = [];
	      this.size = 0;
	    }

	    /**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function listCacheDelete(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);

	      if (index < 0) {
	        return false;
	      }
	      var lastIndex = data.length - 1;
	      if (index == lastIndex) {
	        data.pop();
	      } else {
	        splice.call(data, index, 1);
	      }
	      --this.size;
	      return true;
	    }

	    /**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function listCacheGet(key) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);

	      return index < 0 ? undefined$1 : data[index][1];
	    }

	    /**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function listCacheHas(key) {
	      return assocIndexOf(this.__data__, key) > -1;
	    }

	    /**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */
	    function listCacheSet(key, value) {
	      var data = this.__data__,
	          index = assocIndexOf(data, key);

	      if (index < 0) {
	        ++this.size;
	        data.push([key, value]);
	      } else {
	        data[index][1] = value;
	      }
	      return this;
	    }

	    // Add methods to `ListCache`.
	    ListCache.prototype.clear = listCacheClear;
	    ListCache.prototype['delete'] = listCacheDelete;
	    ListCache.prototype.get = listCacheGet;
	    ListCache.prototype.has = listCacheHas;
	    ListCache.prototype.set = listCacheSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function MapCache(entries) {
	      var index = -1,
	          length = entries == null ? 0 : entries.length;

	      this.clear();
	      while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	      }
	    }

	    /**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */
	    function mapCacheClear() {
	      this.size = 0;
	      this.__data__ = {
	        'hash': new Hash,
	        'map': new (Map || ListCache),
	        'string': new Hash
	      };
	    }

	    /**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function mapCacheDelete(key) {
	      var result = getMapData(this, key)['delete'](key);
	      this.size -= result ? 1 : 0;
	      return result;
	    }

	    /**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function mapCacheGet(key) {
	      return getMapData(this, key).get(key);
	    }

	    /**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapCacheHas(key) {
	      return getMapData(this, key).has(key);
	    }

	    /**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */
	    function mapCacheSet(key, value) {
	      var data = getMapData(this, key),
	          size = data.size;

	      data.set(key, value);
	      this.size += data.size == size ? 0 : 1;
	      return this;
	    }

	    // Add methods to `MapCache`.
	    MapCache.prototype.clear = mapCacheClear;
	    MapCache.prototype['delete'] = mapCacheDelete;
	    MapCache.prototype.get = mapCacheGet;
	    MapCache.prototype.has = mapCacheHas;
	    MapCache.prototype.set = mapCacheSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var index = -1,
	          length = values == null ? 0 : values.length;

	      this.__data__ = new MapCache;
	      while (++index < length) {
	        this.add(values[index]);
	      }
	    }

	    /**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */
	    function setCacheAdd(value) {
	      this.__data__.set(value, HASH_UNDEFINED);
	      return this;
	    }

	    /**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */
	    function setCacheHas(value) {
	      return this.__data__.has(value);
	    }

	    // Add methods to `SetCache`.
	    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	    SetCache.prototype.has = setCacheHas;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */
	    function Stack(entries) {
	      var data = this.__data__ = new ListCache(entries);
	      this.size = data.size;
	    }

	    /**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */
	    function stackClear() {
	      this.__data__ = new ListCache;
	      this.size = 0;
	    }

	    /**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */
	    function stackDelete(key) {
	      var data = this.__data__,
	          result = data['delete'](key);

	      this.size = data.size;
	      return result;
	    }

	    /**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */
	    function stackGet(key) {
	      return this.__data__.get(key);
	    }

	    /**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function stackHas(key) {
	      return this.__data__.has(key);
	    }

	    /**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */
	    function stackSet(key, value) {
	      var data = this.__data__;
	      if (data instanceof ListCache) {
	        var pairs = data.__data__;
	        if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	          pairs.push([key, value]);
	          this.size = ++data.size;
	          return this;
	        }
	        data = this.__data__ = new MapCache(pairs);
	      }
	      data.set(key, value);
	      this.size = data.size;
	      return this;
	    }

	    // Add methods to `Stack`.
	    Stack.prototype.clear = stackClear;
	    Stack.prototype['delete'] = stackDelete;
	    Stack.prototype.get = stackGet;
	    Stack.prototype.has = stackHas;
	    Stack.prototype.set = stackSet;

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */
	    function arrayLikeKeys(value, inherited) {
	      var isArr = isArray(value),
	          isArg = !isArr && isArguments(value),
	          isBuff = !isArr && !isArg && isBuffer(value),
	          isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	          skipIndexes = isArr || isArg || isBuff || isType,
	          result = skipIndexes ? baseTimes(value.length, String) : [],
	          length = result.length;

	      for (var key in value) {
	        if ((inherited || hasOwnProperty.call(value, key)) &&
	            !(skipIndexes && (
	               // Safari 9 has enumerable `arguments.length` in strict mode.
	               key == 'length' ||
	               // Node.js 0.10 has enumerable non-index properties on buffers.
	               (isBuff && (key == 'offset' || key == 'parent')) ||
	               // PhantomJS 2 has enumerable non-index properties on typed arrays.
	               (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	               // Skip index properties.
	               isIndex(key, length)
	            ))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.sample` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @returns {*} Returns the random element.
	     */
	    function arraySample(array) {
	      var length = array.length;
	      return length ? array[baseRandom(0, length - 1)] : undefined$1;
	    }

	    /**
	     * A specialized version of `_.sampleSize` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */
	    function arraySampleSize(array, n) {
	      return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
	    }

	    /**
	     * A specialized version of `_.shuffle` for arrays.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */
	    function arrayShuffle(array) {
	      return shuffleSelf(copyArray(array));
	    }

	    /**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignMergeValue(object, key, value) {
	      if ((value !== undefined$1 && !eq(object[key], value)) ||
	          (value === undefined$1 && !(key in object))) {
	        baseAssignValue(object, key, value);
	      }
	    }

	    /**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function assignValue(object, key, value) {
	      var objValue = object[key];
	      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	          (value === undefined$1 && !(key in object))) {
	        baseAssignValue(object, key, value);
	      }
	    }

	    /**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */
	    function assocIndexOf(array, key) {
	      var length = array.length;
	      while (length--) {
	        if (eq(array[length][0], key)) {
	          return length;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseAggregator(collection, setter, iteratee, accumulator) {
	      baseEach(collection, function(value, key, collection) {
	        setter(accumulator, value, iteratee(value), collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return object && copyObject(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.assignIn` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssignIn(object, source) {
	      return object && copyObject(source, keysIn(source), object);
	    }

	    /**
	     * The base implementation of `assignValue` and `assignMergeValue` without
	     * value checks.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */
	    function baseAssignValue(object, key, value) {
	      if (key == '__proto__' && defineProperty) {
	        defineProperty(object, key, {
	          'configurable': true,
	          'enumerable': true,
	          'value': value,
	          'writable': true
	        });
	      } else {
	        object[key] = value;
	      }
	    }

	    /**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Array} Returns the picked elements.
	     */
	    function baseAt(object, paths) {
	      var index = -1,
	          length = paths.length,
	          result = Array(length),
	          skip = object == null;

	      while (++index < length) {
	        result[index] = skip ? undefined$1 : get(object, paths[index]);
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */
	    function baseClamp(number, lower, upper) {
	      if (number === number) {
	        if (upper !== undefined$1) {
	          number = number <= upper ? number : upper;
	        }
	        if (lower !== undefined$1) {
	          number = number >= lower ? number : lower;
	        }
	      }
	      return number;
	    }

	    /**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Deep clone
	     *  2 - Flatten inherited properties
	     *  4 - Clone symbols
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, bitmask, customizer, key, object, stack) {
	      var result,
	          isDeep = bitmask & CLONE_DEEP_FLAG,
	          isFlat = bitmask & CLONE_FLAT_FLAG,
	          isFull = bitmask & CLONE_SYMBOLS_FLAG;

	      if (customizer) {
	        result = object ? customizer(value, key, object, stack) : customizer(value);
	      }
	      if (result !== undefined$1) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return copyArray(value, result);
	        }
	      } else {
	        var tag = getTag(value),
	            isFunc = tag == funcTag || tag == genTag;

	        if (isBuffer(value)) {
	          return cloneBuffer(value, isDeep);
	        }
	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = (isFlat || isFunc) ? {} : initCloneObject(value);
	          if (!isDeep) {
	            return isFlat
	              ? copySymbolsIn(value, baseAssignIn(result, value))
	              : copySymbols(value, baseAssign(result, value));
	          }
	        } else {
	          if (!cloneableTags[tag]) {
	            return object ? value : {};
	          }
	          result = initCloneByTag(value, tag, isDeep);
	        }
	      }
	      // Check for circular references and return its corresponding clone.
	      stack || (stack = new Stack);
	      var stacked = stack.get(value);
	      if (stacked) {
	        return stacked;
	      }
	      stack.set(value, result);

	      if (isSet(value)) {
	        value.forEach(function(subValue) {
	          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	        });
	      } else if (isMap(value)) {
	        value.forEach(function(subValue, key) {
	          result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	        });
	      }

	      var keysFunc = isFull
	        ? (isFlat ? getAllKeysIn : getAllKeys)
	        : (isFlat ? keysIn : keys);

	      var props = isArr ? undefined$1 : keysFunc(value);
	      arrayEach(props || value, function(subValue, key) {
	        if (props) {
	          key = subValue;
	          subValue = value[key];
	        }
	        // Recursively populate clone (susceptible to call stack limits).
	        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseConforms(source) {
	      var props = keys(source);
	      return function(object) {
	        return baseConformsTo(object, source, props);
	      };
	    }

	    /**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */
	    function baseConformsTo(object, source, props) {
	      var length = props.length;
	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (length--) {
	        var key = props[length],
	            predicate = source[key],
	            value = object[key];

	        if ((value === undefined$1 && !(key in object)) || !predicate(value)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined$1, args); }, wait);
	    }

	    /**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          isCommon = true,
	          length = array.length,
	          result = [],
	          valuesLength = values.length;

	      if (!length) {
	        return result;
	      }
	      if (iteratee) {
	        values = arrayMap(values, baseUnary(iteratee));
	      }
	      if (comparator) {
	        includes = arrayIncludesWith;
	        isCommon = false;
	      }
	      else if (values.length >= LARGE_ARRAY_SIZE) {
	        includes = cacheHas;
	        isCommon = false;
	        values = new SetCache(values);
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee == null ? value : iteratee(value);

	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === computed) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (!includes(values, computed, comparator)) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(array, iteratee, comparator) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        var value = array[index],
	            current = iteratee(value);

	        if (current != null && (computed === undefined$1
	              ? (current === current && !isSymbol(current))
	              : comparator(current, computed)
	            )) {
	          var computed = current,
	              result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = toInteger(start);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined$1 || end > length) ? length : toInteger(end);
	      if (end < 0) {
	        end += length;
	      }
	      end = start > end ? 0 : toLength(end);
	      while (start < end) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, depth, predicate, isStrict, result) {
	      var index = -1,
	          length = array.length;

	      predicate || (predicate = isFlattenable);
	      result || (result = []);

	      while (++index < length) {
	        var value = array[index];
	        if (depth > 0 && predicate(value)) {
	          if (depth > 1) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            baseFlatten(value, depth - 1, predicate, isStrict, result);
	          } else {
	            arrayPush(result, value);
	          }
	        } else if (!isStrict) {
	          result[result.length] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return object && baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return object && baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */
	    function baseFunctions(object, props) {
	      return arrayFilter(props, function(key) {
	        return isFunction(object[key]);
	      });
	    }

	    /**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path) {
	      path = castPath(path, object);

	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[toKey(path[index++])];
	      }
	      return (index && index == length) ? object : undefined$1;
	    }

	    /**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	      var result = keysFunc(object);
	      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	    }

	    /**
	     * The base implementation of `getTag` without fallbacks for buggy environments.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    function baseGetTag(value) {
	      if (value == null) {
	        return value === undefined$1 ? undefinedTag : nullTag;
	      }
	      return (symToStringTag && symToStringTag in Object(value))
	        ? getRawTag(value)
	        : objectToString(value);
	    }

	    /**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */
	    function baseGt(value, other) {
	      return value > other;
	    }

	    /**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHas(object, key) {
	      return object != null && hasOwnProperty.call(object, key);
	    }

	    /**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */
	    function baseHasIn(object, key) {
	      return object != null && key in Object(object);
	    }

	    /**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */
	    function baseInRange(number, start, end) {
	      return number >= nativeMin(start, end) && number < nativeMax(start, end);
	    }

	    /**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */
	    function baseIntersection(arrays, iteratee, comparator) {
	      var includes = comparator ? arrayIncludesWith : arrayIncludes,
	          length = arrays[0].length,
	          othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(othLength),
	          maxLength = Infinity,
	          result = [];

	      while (othIndex--) {
	        var array = arrays[othIndex];
	        if (othIndex && iteratee) {
	          array = arrayMap(array, baseUnary(iteratee));
	        }
	        maxLength = nativeMin(array.length, maxLength);
	        caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
	          ? new SetCache(othIndex && array)
	          : undefined$1;
	      }
	      array = arrays[0];

	      var index = -1,
	          seen = caches[0];

	      outer:
	      while (++index < length && result.length < maxLength) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;

	        value = (comparator || value !== 0) ? value : 0;
	        if (!(seen
	              ? cacheHas(seen, computed)
	              : includes(result, computed, comparator)
	            )) {
	          othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if (!(cache
	                  ? cacheHas(cache, computed)
	                  : includes(arrays[othIndex], computed, comparator))
	                ) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */
	    function baseInverter(object, setter, iteratee, accumulator) {
	      baseForOwn(object, function(value, key, object) {
	        setter(accumulator, iteratee(value), key, object);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function baseInvoke(object, path, args) {
	      path = castPath(path, object);
	      object = parent(object, path);
	      var func = object == null ? object : object[toKey(last(path))];
	      return func == null ? undefined$1 : apply(func, object, args);
	    }

	    /**
	     * The base implementation of `_.isArguments`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     */
	    function baseIsArguments(value) {
	      return isObjectLike(value) && baseGetTag(value) == argsTag;
	    }

	    /**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */
	    function baseIsArrayBuffer(value) {
	      return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
	    }

	    /**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */
	    function baseIsDate(value) {
	      return isObjectLike(value) && baseGetTag(value) == dateTag;
	    }

	    /**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {boolean} bitmask The bitmask flags.
	     *  1 - Unordered comparison
	     *  2 - Partial comparison
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, bitmask, customizer, stack) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = objIsArr ? arrayTag : getTag(object),
	          othTag = othIsArr ? arrayTag : getTag(other);

	      objTag = objTag == argsTag ? objectTag : objTag;
	      othTag = othTag == argsTag ? objectTag : othTag;

	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;

	      if (isSameTag && isBuffer(object)) {
	        if (!isBuffer(other)) {
	          return false;
	        }
	        objIsArr = true;
	        objIsObj = false;
	      }
	      if (isSameTag && !objIsObj) {
	        stack || (stack = new Stack);
	        return (objIsArr || isTypedArray(object))
	          ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	          : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	      }
	      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          var objUnwrapped = objIsWrapped ? object.value() : object,
	              othUnwrapped = othIsWrapped ? other.value() : other;

	          stack || (stack = new Stack);
	          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      stack || (stack = new Stack);
	      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	    }

	    /**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */
	    function baseIsMap(value) {
	      return isObjectLike(value) && getTag(value) == mapTag;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, source, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = Object(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined$1 && !(key in object)) {
	            return false;
	          }
	        } else {
	          var stack = new Stack;
	          if (customizer) {
	            var result = customizer(objValue, srcValue, key, object, source, stack);
	          }
	          if (!(result === undefined$1
	                ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	                : result
	              )) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */
	    function baseIsNative(value) {
	      if (!isObject(value) || isMasked(value)) {
	        return false;
	      }
	      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	      return pattern.test(toSource(value));
	    }

	    /**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */
	    function baseIsRegExp(value) {
	      return isObjectLike(value) && baseGetTag(value) == regexpTag;
	    }

	    /**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */
	    function baseIsSet(value) {
	      return isObjectLike(value) && getTag(value) == setTag;
	    }

	    /**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */
	    function baseIsTypedArray(value) {
	      return isObjectLike(value) &&
	        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	    }

	    /**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */
	    function baseIteratee(value) {
	      // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	      // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	      if (typeof value == 'function') {
	        return value;
	      }
	      if (value == null) {
	        return identity;
	      }
	      if (typeof value == 'object') {
	        return isArray(value)
	          ? baseMatchesProperty(value[0], value[1])
	          : baseMatches(value);
	      }
	      return property(value);
	    }

	    /**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeys(object) {
	      if (!isPrototype(object)) {
	        return nativeKeys(object);
	      }
	      var result = [];
	      for (var key in Object(object)) {
	        if (hasOwnProperty.call(object, key) && key != 'constructor') {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function baseKeysIn(object) {
	      if (!isObject(object)) {
	        return nativeKeysIn(object);
	      }
	      var isProto = isPrototype(object),
	          result = [];

	      for (var key in object) {
	        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */
	    function baseLt(value, other) {
	      return value < other;
	    }

	    /**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	      }
	      return function(object) {
	        return object === source || baseIsMatch(object, source, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      if (isKey(path) && isStrictComparable(srcValue)) {
	        return matchesStrictComparable(toKey(path), srcValue);
	      }
	      return function(object) {
	        var objValue = get(object, path);
	        return (objValue === undefined$1 && objValue === srcValue)
	          ? hasIn(object, path)
	          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMerge(object, source, srcIndex, customizer, stack) {
	      if (object === source) {
	        return;
	      }
	      baseFor(source, function(srcValue, key) {
	        stack || (stack = new Stack);
	        if (isObject(srcValue)) {
	          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	        }
	        else {
	          var newValue = customizer
	            ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
	            : undefined$1;

	          if (newValue === undefined$1) {
	            newValue = srcValue;
	          }
	          assignMergeValue(object, key, newValue);
	        }
	      }, keysIn);
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */
	    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	      var objValue = safeGet(object, key),
	          srcValue = safeGet(source, key),
	          stacked = stack.get(srcValue);

	      if (stacked) {
	        assignMergeValue(object, key, stacked);
	        return;
	      }
	      var newValue = customizer
	        ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	        : undefined$1;

	      var isCommon = newValue === undefined$1;

	      if (isCommon) {
	        var isArr = isArray(srcValue),
	            isBuff = !isArr && isBuffer(srcValue),
	            isTyped = !isArr && !isBuff && isTypedArray(srcValue);

	        newValue = srcValue;
	        if (isArr || isBuff || isTyped) {
	          if (isArray(objValue)) {
	            newValue = objValue;
	          }
	          else if (isArrayLikeObject(objValue)) {
	            newValue = copyArray(objValue);
	          }
	          else if (isBuff) {
	            isCommon = false;
	            newValue = cloneBuffer(srcValue, true);
	          }
	          else if (isTyped) {
	            isCommon = false;
	            newValue = cloneTypedArray(srcValue, true);
	          }
	          else {
	            newValue = [];
	          }
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          newValue = objValue;
	          if (isArguments(objValue)) {
	            newValue = toPlainObject(objValue);
	          }
	          else if (!isObject(objValue) || isFunction(objValue)) {
	            newValue = initCloneObject(srcValue);
	          }
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        stack.set(srcValue, newValue);
	        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	        stack['delete'](srcValue);
	      }
	      assignMergeValue(object, key, newValue);
	    }

	    /**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */
	    function baseNth(array, n) {
	      var length = array.length;
	      if (!length) {
	        return;
	      }
	      n += n < 0 ? length : 0;
	      return isIndex(n, length) ? array[n] : undefined$1;
	    }

	    /**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseOrderBy(collection, iteratees, orders) {
	      if (iteratees.length) {
	        iteratees = arrayMap(iteratees, function(iteratee) {
	          if (isArray(iteratee)) {
	            return function(value) {
	              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
	            }
	          }
	          return iteratee;
	        });
	      } else {
	        iteratees = [identity];
	      }

	      var index = -1;
	      iteratees = arrayMap(iteratees, baseUnary(getIteratee()));

	      var result = baseMap(collection, function(value, key, collection) {
	        var criteria = arrayMap(iteratees, function(iteratee) {
	          return iteratee(value);
	        });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function basePick(object, paths) {
	      return basePickBy(object, paths, function(value, path) {
	        return hasIn(object, path);
	      });
	    }

	    /**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} paths The property paths to pick.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */
	    function basePickBy(object, paths, predicate) {
	      var index = -1,
	          length = paths.length,
	          result = {};

	      while (++index < length) {
	        var path = paths[index],
	            value = baseGet(object, path);

	        if (predicate(value, path)) {
	          baseSet(result, castPath(path, object), value);
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */
	    function basePropertyDeep(path) {
	      return function(object) {
	        return baseGet(object, path);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAll(array, values, iteratee, comparator) {
	      var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
	          index = -1,
	          length = values.length,
	          seen = array;

	      if (array === values) {
	        values = copyArray(values);
	      }
	      if (iteratee) {
	        seen = arrayMap(array, baseUnary(iteratee));
	      }
	      while (++index < length) {
	        var fromIndex = 0,
	            value = values[index],
	            computed = iteratee ? iteratee(value) : value;

	        while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
	          if (seen !== array) {
	            splice.call(seen, fromIndex, 1);
	          }
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0,
	          lastIndex = length - 1;

	      while (length--) {
	        var index = indexes[length];
	        if (length == lastIndex || index !== previous) {
	          var previous = index;
	          if (isIndex(index)) {
	            splice.call(array, index, 1);
	          } else {
	            baseUnset(array, index);
	          }
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(lower, upper) {
	      return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
	    }

	    /**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */
	    function baseRange(start, end, step, fromRight) {
	      var index = -1,
	          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (length--) {
	        result[fromRight ? length : ++index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */
	    function baseRepeat(string, n) {
	      var result = '';
	      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = nativeFloor(n / 2);
	        if (n) {
	          string += string;
	        }
	      } while (n);

	      return result;
	    }

	    /**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */
	    function baseRest(func, start) {
	      return setToString(overRest(func, start, identity), func + '');
	    }

	    /**
	     * The base implementation of `_.sample`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     */
	    function baseSample(collection) {
	      return arraySample(values(collection));
	    }

	    /**
	     * The base implementation of `_.sampleSize` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} n The number of elements to sample.
	     * @returns {Array} Returns the random elements.
	     */
	    function baseSampleSize(collection, n) {
	      var array = values(collection);
	      return shuffleSelf(array, baseClamp(n, 0, array.length));
	    }

	    /**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseSet(object, path, value, customizer) {
	      if (!isObject(object)) {
	        return object;
	      }
	      path = castPath(path, object);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = toKey(path[index]),
	            newValue = value;

	        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
	          return object;
	        }

	        if (index != lastIndex) {
	          var objValue = nested[key];
	          newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
	          if (newValue === undefined$1) {
	            newValue = isObject(objValue)
	              ? objValue
	              : (isIndex(path[index + 1]) ? [] : {});
	          }
	        }
	        assignValue(nested, key, newValue);
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `setToString` without support for hot loop shorting.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetToString = !defineProperty ? identity : function(func, string) {
	      return defineProperty(func, 'toString', {
	        'configurable': true,
	        'enumerable': false,
	        'value': constant(string),
	        'writable': true
	      });
	    };

	    /**
	     * The base implementation of `_.shuffle`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     */
	    function baseShuffle(collection) {
	      return shuffleSelf(values(collection));
	    }

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = end > length ? length : end;
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndex(array, value, retHighest) {
	      var low = 0,
	          high = array == null ? low : array.length;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if (computed !== null && !isSymbol(computed) &&
	              (retHighest ? (computed <= value) : (computed < value))) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return baseSortedIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function baseSortedIndexBy(array, value, iteratee, retHighest) {
	      var low = 0,
	          high = array == null ? 0 : array.length;
	      if (high === 0) {
	        return 0;
	      }

	      value = iteratee(value);
	      var valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsSymbol = isSymbol(value),
	          valIsUndefined = value === undefined$1;

	      while (low < high) {
	        var mid = nativeFloor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            othIsDefined = computed !== undefined$1,
	            othIsNull = computed === null,
	            othIsReflexive = computed === computed,
	            othIsSymbol = isSymbol(computed);

	        if (valIsNaN) {
	          var setLow = retHighest || othIsReflexive;
	        } else if (valIsUndefined) {
	          setLow = othIsReflexive && (retHighest || othIsDefined);
	        } else if (valIsNull) {
	          setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
	        } else if (valIsSymbol) {
	          setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
	        } else if (othIsNull || othIsSymbol) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseSortedUniq(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          resIndex = 0,
	          result = [];

	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;

	        if (!index || !eq(computed, seen)) {
	          var seen = computed;
	          result[resIndex++] = value === 0 ? 0 : value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */
	    function baseToNumber(value) {
	      if (typeof value == 'number') {
	        return value;
	      }
	      if (isSymbol(value)) {
	        return NAN;
	      }
	      return +value;
	    }

	    /**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */
	    function baseToString(value) {
	      // Exit early for strings to avoid a performance hit in some environments.
	      if (typeof value == 'string') {
	        return value;
	      }
	      if (isArray(value)) {
	        // Recursively convert values (susceptible to call stack limits).
	        return arrayMap(value, baseToString) + '';
	      }
	      if (isSymbol(value)) {
	        return symbolToString ? symbolToString.call(value) : '';
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }

	    /**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */
	    function baseUniq(array, iteratee, comparator) {
	      var index = -1,
	          includes = arrayIncludes,
	          length = array.length,
	          isCommon = true,
	          result = [],
	          seen = result;

	      if (comparator) {
	        isCommon = false;
	        includes = arrayIncludesWith;
	      }
	      else if (length >= LARGE_ARRAY_SIZE) {
	        var set = iteratee ? null : createSet(array);
	        if (set) {
	          return setToArray(set);
	        }
	        isCommon = false;
	        includes = cacheHas;
	        seen = new SetCache;
	      }
	      else {
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value) : value;

	        value = (comparator || value !== 0) ? value : 0;
	        if (isCommon && computed === computed) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (!includes(seen, computed, comparator)) {
	          if (seen !== result) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The property path to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */
	    function baseUnset(object, path) {
	      path = castPath(path, object);
	      object = parent(object, path);
	      return object == null || delete object[toKey(last(path))];
	    }

	    /**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */
	    function baseUpdate(object, path, updater, customizer) {
	      return baseSet(object, path, updater(baseGet(object, path)), customizer);
	    }

	    /**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) &&
	        predicate(array[index], index, array)) {}

	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      return arrayReduce(actions, function(result, action) {
	        return action.func.apply(action.thisArg, arrayPush([result], action.args));
	      }, result);
	    }

	    /**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */
	    function baseXor(arrays, iteratee, comparator) {
	      var length = arrays.length;
	      if (length < 2) {
	        return length ? baseUniq(arrays[0]) : [];
	      }
	      var index = -1,
	          result = Array(length);

	      while (++index < length) {
	        var array = arrays[index],
	            othIndex = -1;

	        while (++othIndex < length) {
	          if (othIndex != index) {
	            result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
	          }
	        }
	      }
	      return baseUniq(baseFlatten(result, 1), iteratee, comparator);
	    }

	    /**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */
	    function baseZipObject(props, values, assignFunc) {
	      var index = -1,
	          length = props.length,
	          valsLength = values.length,
	          result = {};

	      while (++index < length) {
	        var value = index < valsLength ? values[index] : undefined$1;
	        assignFunc(result, props[index], value);
	      }
	      return result;
	    }

	    /**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */
	    function castArrayLikeObject(value) {
	      return isArrayLikeObject(value) ? value : [];
	    }

	    /**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */
	    function castFunction(value) {
	      return typeof value == 'function' ? value : identity;
	    }

	    /**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {Array} Returns the cast property path array.
	     */
	    function castPath(value, object) {
	      if (isArray(value)) {
	        return value;
	      }
	      return isKey(value, object) ? [value] : stringToPath(toString(value));
	    }

	    /**
	     * A `baseRest` alias which can be replaced with `identity` by module
	     * replacement plugins.
	     *
	     * @private
	     * @type {Function}
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */
	    var castRest = baseRest;

	    /**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */
	    function castSlice(array, start, end) {
	      var length = array.length;
	      end = end === undefined$1 ? length : end;
	      return (!start && end >= length) ? array : baseSlice(array, start, end);
	    }

	    /**
	     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
	     *
	     * @private
	     * @param {number|Object} id The timer id or timeout object of the timer to clear.
	     */
	    var clearTimeout = ctxClearTimeout || function(id) {
	      return root.clearTimeout(id);
	    };

	    /**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */
	    function cloneBuffer(buffer, isDeep) {
	      if (isDeep) {
	        return buffer.slice();
	      }
	      var length = buffer.length,
	          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	      buffer.copy(result);
	      return result;
	    }

	    /**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function cloneArrayBuffer(arrayBuffer) {
	      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	      new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	      return result;
	    }

	    /**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */
	    function cloneDataView(dataView, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	    }

	    /**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */
	    function cloneRegExp(regexp) {
	      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	      result.lastIndex = regexp.lastIndex;
	      return result;
	    }

	    /**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */
	    function cloneSymbol(symbol) {
	      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	    }

	    /**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */
	    function cloneTypedArray(typedArray, isDeep) {
	      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	    }

	    /**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */
	    function compareAscending(value, other) {
	      if (value !== other) {
	        var valIsDefined = value !== undefined$1,
	            valIsNull = value === null,
	            valIsReflexive = value === value,
	            valIsSymbol = isSymbol(value);

	        var othIsDefined = other !== undefined$1,
	            othIsNull = other === null,
	            othIsReflexive = other === other,
	            othIsSymbol = isSymbol(other);

	        if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	            (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	            (valIsNull && othIsDefined && othIsReflexive) ||
	            (!valIsDefined && othIsReflexive) ||
	            !valIsReflexive) {
	          return 1;
	        }
	        if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	            (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	            (othIsNull && valIsDefined && valIsReflexive) ||
	            (!othIsDefined && valIsReflexive) ||
	            !othIsReflexive) {
	          return -1;
	        }
	      }
	      return 0;
	    }

	    /**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */
	    function compareMultiple(object, other, orders) {
	      var index = -1,
	          objCriteria = object.criteria,
	          othCriteria = other.criteria,
	          length = objCriteria.length,
	          ordersLength = orders.length;

	      while (++index < length) {
	        var result = compareAscending(objCriteria[index], othCriteria[index]);
	        if (result) {
	          if (index >= ordersLength) {
	            return result;
	          }
	          var order = orders[index];
	          return result * (order == 'desc' ? -1 : 1);
	        }
	      }
	      // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	      // that causes it, under certain circumstances, to provide the same value for
	      // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	      // for more details.
	      //
	      // This also ensures a stable sort in V8 and other engines.
	      // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	      return object.index - other.index;
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersLength = holders.length,
	          leftIndex = -1,
	          leftLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(leftLength + rangeLength),
	          isUncurried = !isCurried;

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[holders[argsIndex]] = args[argsIndex];
	        }
	      }
	      while (rangeLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders, isCurried) {
	      var argsIndex = -1,
	          argsLength = args.length,
	          holdersIndex = -1,
	          holdersLength = holders.length,
	          rightIndex = -1,
	          rightLength = partials.length,
	          rangeLength = nativeMax(argsLength - holdersLength, 0),
	          result = Array(rangeLength + rightLength),
	          isUncurried = !isCurried;

	      while (++argsIndex < rangeLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        if (isUncurried || argsIndex < argsLength) {
	          result[offset + holders[holdersIndex]] = args[argsIndex++];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function copyArray(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */
	    function copyObject(source, props, object, customizer) {
	      var isNew = !object;
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];

	        var newValue = customizer
	          ? customizer(object[key], source[key], key, object, source)
	          : undefined$1;

	        if (newValue === undefined$1) {
	          newValue = source[key];
	        }
	        if (isNew) {
	          baseAssignValue(object, key, newValue);
	        } else {
	          assignValue(object, key, newValue);
	        }
	      }
	      return object;
	    }

	    /**
	     * Copies own symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
	    function copySymbols(source, object) {
	      return copyObject(source, getSymbols(source), object);
	    }

	    /**
	     * Copies own and inherited symbols of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */
	    function copySymbolsIn(source, object) {
	      return copyObject(source, getSymbolsIn(source), object);
	    }

	    /**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee) {
	        var func = isArray(collection) ? arrayAggregator : baseAggregator,
	            accumulator = initializer ? initializer() : {};

	        return func(collection, setter, getIteratee(iteratee, 2), accumulator);
	      };
	    }

	    /**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return baseRest(function(object, sources) {
	        var index = -1,
	            length = sources.length,
	            customizer = length > 1 ? sources[length - 1] : undefined$1,
	            guard = length > 2 ? sources[2] : undefined$1;

	        customizer = (assigner.length > 3 && typeof customizer == 'function')
	          ? (length--, customizer)
	          : undefined$1;

	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined$1 : customizer;
	          length = 1;
	        }
	        object = Object(object);
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, index, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        if (collection == null) {
	          return collection;
	        }
	        if (!isArrayLike(collection)) {
	          return eachFunc(collection, iteratee);
	        }
	        var length = collection.length,
	            index = fromRight ? length : -1,
	            iterable = Object(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var index = -1,
	            iterable = Object(object),
	            props = keysFunc(object),
	            length = props.length;

	        while (length--) {
	          var key = props[fromRight ? length : ++index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createBind(func, bitmask, thisArg) {
	      var isBind = bitmask & WRAP_BIND_FLAG,
	          Ctor = createCtor(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */
	    function createCaseFirst(methodName) {
	      return function(string) {
	        string = toString(string);

	        var strSymbols = hasUnicode(string)
	          ? stringToArray(string)
	          : undefined$1;

	        var chr = strSymbols
	          ? strSymbols[0]
	          : string.charAt(0);

	        var trailing = strSymbols
	          ? castSlice(strSymbols, 1).join('')
	          : string.slice(1);

	        return chr[methodName]() + trailing;
	      };
	    }

	    /**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtor(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors. See
	        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
	          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCurry(func, bitmask, arity) {
	      var Ctor = createCtor(func);

	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length,
	            placeholder = getHolder(wrapper);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
	          ? []
	          : replaceHolders(args, placeholder);

	        length -= holders.length;
	        if (length < arity) {
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, undefined$1,
	            args, holders, undefined$1, undefined$1, arity - length);
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return apply(fn, this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(findIndexFunc) {
	      return function(collection, predicate, fromIndex) {
	        var iterable = Object(collection);
	        if (!isArrayLike(collection)) {
	          var iteratee = getIteratee(predicate, 3);
	          collection = keys(collection);
	          predicate = function(key) { return iteratee(iterable[key], key, iterable); };
	        }
	        var index = findIndexFunc(collection, predicate, fromIndex);
	        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined$1;
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return flatRest(function(funcs) {
	        var length = funcs.length,
	            index = length,
	            prereq = LodashWrapper.prototype.thru;

	        if (fromRight) {
	          funcs.reverse();
	        }
	        while (index--) {
	          var func = funcs[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
	            var wrapper = new LodashWrapper([], true);
	          }
	        }
	        index = wrapper ? index : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : undefined$1;

	          if (data && isLaziable(data[0]) &&
	                data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
	                !data[4].length && data[9] == 1
	              ) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func))
	              ? wrapper[funcName]()
	              : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments,
	              value = args[0];

	          if (wrapper && args.length == 1 && isArray(value)) {
	            return wrapper.plant(value).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : value;

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      });
	    }

	    /**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & WRAP_ARY_FLAG,
	          isBind = bitmask & WRAP_BIND_FLAG,
	          isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
	          isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
	          isFlip = bitmask & WRAP_FLIP_FLAG,
	          Ctor = isBindKey ? undefined$1 : createCtor(func);

	      function wrapper() {
	        var length = arguments.length,
	            args = Array(length),
	            index = length;

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (isCurried) {
	          var placeholder = getHolder(wrapper),
	              holdersCount = countHolders(args, placeholder);
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders, isCurried);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
	        }
	        length -= holdersCount;
	        if (isCurried && length < arity) {
	          var newHolders = replaceHolders(args, placeholder);
	          return createRecurry(
	            func, bitmask, createHybrid, wrapper.placeholder, thisArg,
	            args, newHolders, argPos, ary, arity - length
	          );
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        length = args.length;
	        if (argPos) {
	          args = reorder(args, argPos);
	        } else if (isFlip && length > 1) {
	          args.reverse();
	        }
	        if (isAry && ary < length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtor(fn);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */
	    function createInverter(setter, toIteratee) {
	      return function(object, iteratee) {
	        return baseInverter(object, setter, toIteratee(iteratee), {});
	      };
	    }

	    /**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */
	    function createMathOperation(operator, defaultValue) {
	      return function(value, other) {
	        var result;
	        if (value === undefined$1 && other === undefined$1) {
	          return defaultValue;
	        }
	        if (value !== undefined$1) {
	          result = value;
	        }
	        if (other !== undefined$1) {
	          if (result === undefined$1) {
	            return other;
	          }
	          if (typeof value == 'string' || typeof other == 'string') {
	            value = baseToString(value);
	            other = baseToString(other);
	          } else {
	            value = baseToNumber(value);
	            other = baseToNumber(other);
	          }
	          result = operator(value, other);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */
	    function createOver(arrayFunc) {
	      return flatRest(function(iteratees) {
	        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
	        return baseRest(function(args) {
	          var thisArg = this;
	          return arrayFunc(iteratees, function(iteratee) {
	            return apply(iteratee, thisArg, args);
	          });
	        });
	      });
	    }

	    /**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */
	    function createPadding(length, chars) {
	      chars = chars === undefined$1 ? ' ' : baseToString(chars);

	      var charsLength = chars.length;
	      if (charsLength < 2) {
	        return charsLength ? baseRepeat(chars, length) : chars;
	      }
	      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
	      return hasUnicode(chars)
	        ? castSlice(stringToArray(result), 0, length).join('')
	        : result.slice(0, length);
	    }

	    /**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createPartial(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & WRAP_BIND_FLAG,
	          Ctor = createCtor(func);

	      function wrapper() {
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(leftLength + argsLength),
	            fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        return apply(fn, isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */
	    function createRange(fromRight) {
	      return function(start, end, step) {
	        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	          end = step = undefined$1;
	        }
	        // Ensure the sign of `-0` is preserved.
	        start = toFinite(start);
	        if (end === undefined$1) {
	          end = start;
	          start = 0;
	        } else {
	          end = toFinite(end);
	        }
	        step = step === undefined$1 ? (start < end ? 1 : -1) : toFinite(step);
	        return baseRange(start, end, step, fromRight);
	      };
	    }

	    /**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */
	    function createRelationalOperation(operator) {
	      return function(value, other) {
	        if (!(typeof value == 'string' && typeof other == 'string')) {
	          value = toNumber(value);
	          other = toNumber(other);
	        }
	        return operator(value, other);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
	      var isCurry = bitmask & WRAP_CURRY_FLAG,
	          newHolders = isCurry ? holders : undefined$1,
	          newHoldersRight = isCurry ? undefined$1 : holders,
	          newPartials = isCurry ? partials : undefined$1,
	          newPartialsRight = isCurry ? undefined$1 : partials;

	      bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
	      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

	      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
	        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
	      }
	      var newData = [
	        func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
	        newHoldersRight, argPos, ary, arity
	      ];

	      var result = wrapFunc.apply(undefined$1, newData);
	      if (isLaziable(func)) {
	        setData(result, newData);
	      }
	      result.placeholder = placeholder;
	      return setWrapToString(result, func, bitmask);
	    }

	    /**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */
	    function createRound(methodName) {
	      var func = Math[methodName];
	      return function(number, precision) {
	        number = toNumber(number);
	        precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
	        if (precision && nativeIsFinite(number)) {
	          // Shift with exponential notation to avoid floating-point issues.
	          // See [MDN](https://mdn.io/round#Examples) for more details.
	          var pair = (toString(number) + 'e').split('e'),
	              value = func(pair[0] + 'e' + (+pair[1] + precision));

	          pair = (toString(value) + 'e').split('e');
	          return +(pair[0] + 'e' + (+pair[1] - precision));
	        }
	        return func(number);
	      };
	    }

	    /**
	     * Creates a set object of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */
	    var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	      return new Set(values);
	    };

	    /**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */
	    function createToPairs(keysFunc) {
	      return function(object) {
	        var tag = getTag(object);
	        if (tag == mapTag) {
	          return mapToArray(object);
	        }
	        if (tag == setTag) {
	          return setToPairs(object);
	        }
	        return baseToPairs(object, keysFunc(object));
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *    1 - `_.bind`
	     *    2 - `_.bindKey`
	     *    4 - `_.curry` or `_.curryRight` of a bound function
	     *    8 - `_.curry`
	     *   16 - `_.curryRight`
	     *   32 - `_.partial`
	     *   64 - `_.partialRight`
	     *  128 - `_.rearg`
	     *  256 - `_.ary`
	     *  512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
	        partials = holders = undefined$1;
	      }
	      ary = ary === undefined$1 ? ary : nativeMax(toInteger(ary), 0);
	      arity = arity === undefined$1 ? arity : toInteger(arity);
	      length -= holders ? holders.length : 0;

	      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = undefined$1;
	      }
	      var data = isBindKey ? undefined$1 : getData(func);

	      var newData = [
	        func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
	        argPos, ary, arity
	      ];

	      if (data) {
	        mergeData(newData, data);
	      }
	      func = newData[0];
	      bitmask = newData[1];
	      thisArg = newData[2];
	      partials = newData[3];
	      holders = newData[4];
	      arity = newData[9] = newData[9] === undefined$1
	        ? (isBindKey ? 0 : func.length)
	        : nativeMax(newData[9] - length, 0);

	      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
	        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
	      }
	      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
	        var result = createBind(func, bitmask, thisArg);
	      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
	        result = createCurry(func, bitmask, arity);
	      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
	        result = createPartial(func, bitmask, thisArg, partials);
	      } else {
	        result = createHybrid.apply(undefined$1, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setWrapToString(setter(result, newData), func, bitmask);
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
	     * of source objects to the destination object for all destination properties
	     * that resolve to `undefined`.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */
	    function customDefaultsAssignIn(objValue, srcValue, key, object) {
	      if (objValue === undefined$1 ||
	          (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	        return srcValue;
	      }
	      return objValue;
	    }

	    /**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
	     * objects into destination objects that are passed thru.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */
	    function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
	      if (isObject(objValue) && isObject(srcValue)) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        stack.set(srcValue, objValue);
	        baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
	        stack['delete'](srcValue);
	      }
	      return objValue;
	    }

	    /**
	     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
	     * objects.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @param {string} key The key of the property to inspect.
	     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
	     */
	    function customOmitClone(value) {
	      return isPlainObject(value) ? undefined$1 : value;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	        return false;
	      }
	      // Check that cyclic values are equal.
	      var arrStacked = stack.get(array);
	      var othStacked = stack.get(other);
	      if (arrStacked && othStacked) {
	        return arrStacked == other && othStacked == array;
	      }
	      var index = -1,
	          result = true,
	          seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined$1;

	      stack.set(array, other);
	      stack.set(other, array);

	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index];

	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, arrValue, index, other, array, stack)
	            : customizer(arrValue, othValue, index, array, other, stack);
	        }
	        if (compared !== undefined$1) {
	          if (compared) {
	            continue;
	          }
	          result = false;
	          break;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (seen) {
	          if (!arraySome(other, function(othValue, othIndex) {
	                if (!cacheHas(seen, othIndex) &&
	                    (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	                  return seen.push(othIndex);
	                }
	              })) {
	            result = false;
	            break;
	          }
	        } else if (!(
	              arrValue === othValue ||
	                equalFunc(arrValue, othValue, bitmask, customizer, stack)
	            )) {
	          result = false;
	          break;
	        }
	      }
	      stack['delete'](array);
	      stack['delete'](other);
	      return result;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	      switch (tag) {
	        case dataViewTag:
	          if ((object.byteLength != other.byteLength) ||
	              (object.byteOffset != other.byteOffset)) {
	            return false;
	          }
	          object = object.buffer;
	          other = other.buffer;

	        case arrayBufferTag:
	          if ((object.byteLength != other.byteLength) ||
	              !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	            return false;
	          }
	          return true;

	        case boolTag:
	        case dateTag:
	        case numberTag:
	          // Coerce booleans to `1` or `0` and dates to milliseconds.
	          // Invalid dates are coerced to `NaN`.
	          return eq(+object, +other);

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings, primitives and objects,
	          // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	          // for more details.
	          return object == (other + '');

	        case mapTag:
	          var convert = mapToArray;

	        case setTag:
	          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	          convert || (convert = setToArray);

	          if (object.size != other.size && !isPartial) {
	            return false;
	          }
	          // Assume cyclic values are equal.
	          var stacked = stack.get(object);
	          if (stacked) {
	            return stacked == other;
	          }
	          bitmask |= COMPARE_UNORDERED_FLAG;

	          // Recursively compare objects (susceptible to call stack limits).
	          stack.set(object, other);
	          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	          stack['delete'](object);
	          return result;

	        case symbolTag:
	          if (symbolValueOf) {
	            return symbolValueOf.call(object) == symbolValueOf.call(other);
	          }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	          objProps = getAllKeys(object),
	          objLength = objProps.length,
	          othProps = getAllKeys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isPartial) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      // Check that cyclic values are equal.
	      var objStacked = stack.get(object);
	      var othStacked = stack.get(other);
	      if (objStacked && othStacked) {
	        return objStacked == other && othStacked == object;
	      }
	      var result = true;
	      stack.set(object, other);
	      stack.set(other, object);

	      var skipCtor = isPartial;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key];

	        if (customizer) {
	          var compared = isPartial
	            ? customizer(othValue, objValue, key, other, object, stack)
	            : customizer(objValue, othValue, key, object, other, stack);
	        }
	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(compared === undefined$1
	              ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	              : compared
	            )) {
	          result = false;
	          break;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (result && !skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          result = false;
	        }
	      }
	      stack['delete'](object);
	      stack['delete'](other);
	      return result;
	    }

	    /**
	     * A specialized version of `baseRest` which flattens the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @returns {Function} Returns the new function.
	     */
	    function flatRest(func) {
	      return setToString(overRest(func, undefined$1, flatten), func + '');
	    }

	    /**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeys(object) {
	      return baseGetAllKeys(object, keys, getSymbols);
	    }

	    /**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */
	    function getAllKeysIn(object) {
	      return baseGetAllKeys(object, keysIn, getSymbolsIn);
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = (func.name + ''),
	          array = realNames[result],
	          length = hasOwnProperty.call(realNames, result) ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */
	    function getHolder(func) {
	      var object = hasOwnProperty.call(lodash, 'placeholder') ? lodash : func;
	      return object.placeholder;
	    }

	    /**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getIteratee() {
	      var result = lodash.iteratee || iteratee;
	      result = result === iteratee ? baseIteratee : result;
	      return arguments.length ? result(arguments[0], arguments[1]) : result;
	    }

	    /**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */
	    function getMapData(map, key) {
	      var data = map.__data__;
	      return isKeyable(key)
	        ? data[typeof key == 'string' ? 'string' : 'hash']
	        : data.map;
	    }

	    /**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = keys(object),
	          length = result.length;

	      while (length--) {
	        var key = result[length],
	            value = object[key];

	        result[length] = [key, value, isStrictComparable(value)];
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = getValue(object, key);
	      return baseIsNative(value) ? value : undefined$1;
	    }

	    /**
	     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the raw `toStringTag`.
	     */
	    function getRawTag(value) {
	      var isOwn = hasOwnProperty.call(value, symToStringTag),
	          tag = value[symToStringTag];

	      try {
	        value[symToStringTag] = undefined$1;
	        var unmasked = true;
	      } catch (e) {}

	      var result = nativeObjectToString.call(value);
	      if (unmasked) {
	        if (isOwn) {
	          value[symToStringTag] = tag;
	        } else {
	          delete value[symToStringTag];
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	      if (object == null) {
	        return [];
	      }
	      object = Object(object);
	      return arrayFilter(nativeGetSymbols(object), function(symbol) {
	        return propertyIsEnumerable.call(object, symbol);
	      });
	    };

	    /**
	     * Creates an array of the own and inherited enumerable symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */
	    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	      var result = [];
	      while (object) {
	        arrayPush(result, getSymbols(object));
	        object = getPrototype(object);
	      }
	      return result;
	    };

	    /**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */
	    var getTag = baseGetTag;

	    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	    if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	        (Map && getTag(new Map) != mapTag) ||
	        (Promise && getTag(Promise.resolve()) != promiseTag) ||
	        (Set && getTag(new Set) != setTag) ||
	        (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	      getTag = function(value) {
	        var result = baseGetTag(value),
	            Ctor = result == objectTag ? value.constructor : undefined$1,
	            ctorString = Ctor ? toSource(Ctor) : '';

	        if (ctorString) {
	          switch (ctorString) {
	            case dataViewCtorString: return dataViewTag;
	            case mapCtorString: return mapTag;
	            case promiseCtorString: return promiseTag;
	            case setCtorString: return setTag;
	            case weakMapCtorString: return weakMapTag;
	          }
	        }
	        return result;
	      };
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms.length;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */
	    function getWrapDetails(source) {
	      var match = source.match(reWrapDetails);
	      return match ? match[1].split(reSplitDetails) : [];
	    }

	    /**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */
	    function hasPath(object, path, hasFunc) {
	      path = castPath(path, object);

	      var index = -1,
	          length = path.length,
	          result = false;

	      while (++index < length) {
	        var key = toKey(path[index]);
	        if (!(result = object != null && hasFunc(object, key))) {
	          break;
	        }
	        object = object[key];
	      }
	      if (result || ++index != length) {
	        return result;
	      }
	      length = object == null ? 0 : object.length;
	      return !!length && isLength(length) && isIndex(key, length) &&
	        (isArray(object) || isArguments(object));
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      return (typeof object.constructor == 'function' && !isPrototype(object))
	        ? baseCreate(getPrototype(object))
	        : {};
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return cloneArrayBuffer(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case dataViewTag:
	          return cloneDataView(object, isDeep);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          return cloneTypedArray(object, isDeep);

	        case mapTag:
	          return new Ctor;

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          return cloneRegExp(object);

	        case setTag:
	          return new Ctor;

	        case symbolTag:
	          return cloneSymbol(object);
	      }
	    }

	    /**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */
	    function insertWrapDetails(source, details) {
	      var length = details.length;
	      if (!length) {
	        return source;
	      }
	      var lastIndex = length - 1;
	      details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
	      details = details.join(length > 2 ? ', ' : ' ');
	      return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
	    }

	    /**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */
	    function isFlattenable(value) {
	      return isArray(value) || isArguments(value) ||
	        !!(spreadableSymbol && value && value[spreadableSymbol]);
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      var type = typeof value;
	      length = length == null ? MAX_SAFE_INTEGER : length;

	      return !!length &&
	        (type == 'number' ||
	          (type != 'symbol' && reIsUint.test(value))) &&
	            (value > -1 && value % 1 == 0 && value < length);
	    }

	    /**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	            ? (isArrayLike(object) && isIndex(index, object.length))
	            : (type == 'string' && index in object)
	          ) {
	        return eq(object[index], value);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      if (isArray(value)) {
	        return false;
	      }
	      var type = typeof value;
	      if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	          value == null || isSymbol(value)) {
	        return true;
	      }
	      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	        (object != null && value in Object(object));
	    }

	    /**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */
	    function isKeyable(value) {
	      var type = typeof value;
	      return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	        ? (value !== '__proto__')
	        : (value === null);
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func),
	          other = lodash[funcName];

	      if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */
	    function isMasked(func) {
	      return !!maskSrcKey && (maskSrcKey in func);
	    }

	    /**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */
	    var isMaskable = coreJsData ? isFunction : stubFalse;

	    /**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */
	    function isPrototype(value) {
	      var Ctor = value && value.constructor,
	          proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	      return value === proto;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */
	    function matchesStrictComparable(key, srcValue) {
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        return object[key] === srcValue &&
	          (srcValue !== undefined$1 || (key in Object(object)));
	      };
	    }

	    /**
	     * A specialized version of `_.memoize` which clears the memoized function's
	     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	     *
	     * @private
	     * @param {Function} func The function to have its output memoized.
	     * @returns {Function} Returns the new memoized function.
	     */
	    function memoizeCapped(func) {
	      var result = memoize(func, function(key) {
	        if (cache.size === MAX_MEMOIZE_SIZE) {
	          cache.clear();
	        }
	        return key;
	      });

	      var cache = result.cache;
	      return result;
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

	      var isCombo =
	        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
	        ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
	        ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & WRAP_BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = value;
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & WRAP_ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function nativeKeysIn(object) {
	      var result = [];
	      if (object != null) {
	        for (var key in Object(object)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to a string using `Object.prototype.toString`.
	     *
	     * @private
	     * @param {*} value The value to convert.
	     * @returns {string} Returns the converted string.
	     */
	    function objectToString(value) {
	      return nativeObjectToString.call(value);
	    }

	    /**
	     * A specialized version of `baseRest` which transforms the rest array.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @param {Function} transform The rest array transform.
	     * @returns {Function} Returns the new function.
	     */
	    function overRest(func, start, transform) {
	      start = nativeMax(start === undefined$1 ? (func.length - 1) : start, 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            array = Array(length);

	        while (++index < length) {
	          array[index] = args[start + index];
	        }
	        index = -1;
	        var otherArgs = Array(start + 1);
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = transform(array);
	        return apply(func, this, otherArgs);
	      };
	    }

	    /**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */
	    function parent(object, path) {
	      return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = copyArray(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
	      }
	      return array;
	    }

	    /**
	     * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the property to get.
	     * @returns {*} Returns the property value.
	     */
	    function safeGet(object, key) {
	      if (key === 'constructor' && typeof object[key] === 'function') {
	        return;
	      }

	      if (key == '__proto__') {
	        return;
	      }

	      return object[key];
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = shortOut(baseSetData);

	    /**
	     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */
	    var setTimeout = ctxSetTimeout || function(func, wait) {
	      return root.setTimeout(func, wait);
	    };

	    /**
	     * Sets the `toString` method of `func` to return `string`.
	     *
	     * @private
	     * @param {Function} func The function to modify.
	     * @param {Function} string The `toString` result.
	     * @returns {Function} Returns `func`.
	     */
	    var setToString = shortOut(baseSetToString);

	    /**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */
	    function setWrapToString(wrapper, reference, bitmask) {
	      var source = (reference + '');
	      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
	    }

	    /**
	     * Creates a function that'll short out and invoke `identity` instead
	     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	     * milliseconds.
	     *
	     * @private
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new shortable function.
	     */
	    function shortOut(func) {
	      var count = 0,
	          lastCalled = 0;

	      return function() {
	        var stamp = nativeNow(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return arguments[0];
	          }
	        } else {
	          count = 0;
	        }
	        return func.apply(undefined$1, arguments);
	      };
	    }

	    /**
	     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
	     *
	     * @private
	     * @param {Array} array The array to shuffle.
	     * @param {number} [size=array.length] The size of `array`.
	     * @returns {Array} Returns `array`.
	     */
	    function shuffleSelf(array, size) {
	      var index = -1,
	          length = array.length,
	          lastIndex = length - 1;

	      size = size === undefined$1 ? length : size;
	      while (++index < size) {
	        var rand = baseRandom(index, lastIndex),
	            value = array[rand];

	        array[rand] = array[index];
	        array[index] = value;
	      }
	      array.length = size;
	      return array;
	    }

	    /**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */
	    var stringToPath = memoizeCapped(function(string) {
	      var result = [];
	      if (string.charCodeAt(0) === 46 /* . */) {
	        result.push('');
	      }
	      string.replace(rePropName, function(match, number, quote, subString) {
	        result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    });

	    /**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */
	    function toKey(value) {
	      if (typeof value == 'string' || isSymbol(value)) {
	        return value;
	      }
	      var result = (value + '');
	      return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	    }

	    /**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to convert.
	     * @returns {string} Returns the source code.
	     */
	    function toSource(func) {
	      if (func != null) {
	        try {
	          return funcToString.call(func);
	        } catch (e) {}
	        try {
	          return (func + '');
	        } catch (e) {}
	      }
	      return '';
	    }

	    /**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */
	    function updateWrapDetails(details, bitmask) {
	      arrayEach(wrapFlags, function(pair) {
	        var value = '_.' + pair[0];
	        if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
	          details.push(value);
	        }
	      });
	      return details.sort();
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      if (wrapper instanceof LazyWrapper) {
	        return wrapper.clone();
	      }
	      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
	      result.__actions__ = copyArray(wrapper.__actions__);
	      result.__index__  = wrapper.__index__;
	      result.__values__ = wrapper.__values__;
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if ((guard ? isIterateeCall(array, size, guard) : size === undefined$1)) {
	        size = 1;
	      } else {
	        size = nativeMax(toInteger(size), 0);
	      }
	      var length = array == null ? 0 : array.length;
	      if (!length || size < 1) {
	        return [];
	      }
	      var index = 0,
	          resIndex = 0,
	          result = Array(nativeCeil(length / size));

	      while (index < length) {
	        result[resIndex++] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array == null ? 0 : array.length,
	          resIndex = 0,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[resIndex++] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */
	    function concat() {
	      var length = arguments.length;
	      if (!length) {
	        return [];
	      }
	      var args = Array(length - 1),
	          array = arguments[0],
	          index = length;

	      while (index--) {
	        args[index - 1] = arguments[index];
	      }
	      return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
	    }

	    /**
	     * Creates an array of `array` values not included in the other given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * **Note:** Unlike `_.pullAll`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.without, _.xor
	     * @example
	     *
	     * _.difference([2, 1], [2, 3]);
	     * // => [1]
	     */
	    var difference = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
	        : [];
	    });

	    /**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var differenceBy = baseRest(function(array, values) {
	      var iteratee = last(values);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined$1;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), getIteratee(iteratee, 2))
	        : [];
	    });

	    /**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. The order and
	     * references of result values are determined by the first array. The comparator
	     * is invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */
	    var differenceWith = baseRest(function(array, values) {
	      var comparator = last(values);
	      if (isArrayLikeObject(comparator)) {
	        comparator = undefined$1;
	      }
	      return isArrayLikeObject(array)
	        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined$1, comparator)
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined$1) ? 1 : toInteger(n);
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined$1) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */
	    function fill(array, value, start, end) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    function findIndex(array, predicate, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index);
	    }

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    function findLastIndex(array, predicate, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = length - 1;
	      if (fromIndex !== undefined$1) {
	        index = toInteger(fromIndex);
	        index = fromIndex < 0
	          ? nativeMax(length + index, 0)
	          : nativeMin(index, length - 1);
	      }
	      return baseFindIndex(array, getIteratee(predicate, 3), index, true);
	    }

	    /**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */
	    function flatten(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseFlatten(array, 1) : [];
	    }

	    /**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */
	    function flattenDeep(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseFlatten(array, INFINITY) : [];
	    }

	    /**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */
	    function flattenDepth(array, depth) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      depth = depth === undefined$1 ? 1 : toInteger(depth);
	      return baseFlatten(array, depth);
	    }

	    /**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */
	    function fromPairs(pairs) {
	      var index = -1,
	          length = pairs == null ? 0 : pairs.length,
	          result = {};

	      while (++index < length) {
	        var pair = pairs[index];
	        result[pair[0]] = pair[1];
	      }
	      return result;
	    }

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */
	    function head(array) {
	      return (array && array.length) ? array[0] : undefined$1;
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = fromIndex == null ? 0 : toInteger(fromIndex);
	      if (index < 0) {
	        index = nativeMax(length + index, 0);
	      }
	      return baseIndexOf(array, value, index);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseSlice(array, 0, -1) : [];
	    }

	    /**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order and references of result values are
	     * determined by the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [2, 3]);
	     * // => [2]
	     */
	    var intersection = baseRest(function(arrays) {
	      var mapped = arrayMap(arrays, castArrayLikeObject);
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped)
	        : [];
	    });

	    /**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. The order and references of result values are
	     * determined by the first array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */
	    var intersectionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);

	      if (iteratee === last(mapped)) {
	        iteratee = undefined$1;
	      } else {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, getIteratee(iteratee, 2))
	        : [];
	    });

	    /**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. The order and references
	     * of result values are determined by the first array. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */
	    var intersectionWith = baseRest(function(arrays) {
	      var comparator = last(arrays),
	          mapped = arrayMap(arrays, castArrayLikeObject);

	      comparator = typeof comparator == 'function' ? comparator : undefined$1;
	      if (comparator) {
	        mapped.pop();
	      }
	      return (mapped.length && mapped[0] === arrays[0])
	        ? baseIntersection(mapped, undefined$1, comparator)
	        : [];
	    });

	    /**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */
	    function join(array, separator) {
	      return array == null ? '' : nativeJoin.call(array, separator);
	    }

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? array[length - 1] : undefined$1;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (fromIndex !== undefined$1) {
	        index = toInteger(fromIndex);
	        index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
	      }
	      return value === value
	        ? strictLastIndexOf(array, value, index)
	        : baseFindIndex(array, baseIsNaN, index, true);
	    }

	    /**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */
	    function nth(array, n) {
	      return (array && array.length) ? baseNth(array, toInteger(n)) : undefined$1;
	    }

	    /**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pull(array, 'a', 'c');
	     * console.log(array);
	     * // => ['b', 'b']
	     */
	    var pull = baseRest(pullAll);

	    /**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */
	    function pullAll(array, values) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values)
	        : array;
	    }

	    /**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */
	    function pullAllBy(array, values, iteratee) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, getIteratee(iteratee, 2))
	        : array;
	    }

	    /**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */
	    function pullAllWith(array, values, comparator) {
	      return (array && array.length && values && values.length)
	        ? basePullAll(array, values, undefined$1, comparator)
	        : array;
	    }

	    /**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     * var pulled = _.pullAt(array, [1, 3]);
	     *
	     * console.log(array);
	     * // => ['a', 'c']
	     *
	     * console.log(pulled);
	     * // => ['b', 'd']
	     */
	    var pullAt = flatRest(function(array, indexes) {
	      var length = array == null ? 0 : array.length,
	          result = baseAt(array, indexes);

	      basePullAt(array, arrayMap(indexes, function(index) {
	        return isIndex(index, length) ? +index : index;
	      }).sort(compareAscending));

	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getIteratee(predicate, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function reverse(array) {
	      return array == null ? array : nativeReverse.call(array);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      else {
	        start = start == null ? 0 : toInteger(start);
	        end = end === undefined$1 ? length : toInteger(end);
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */
	    function sortedIndex(array, value) {
	      return baseSortedIndex(array, value);
	    }

	    /**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */
	    function sortedIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2));
	    }

	    /**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */
	    function sortedIndexOf(array, value) {
	      var length = array == null ? 0 : array.length;
	      if (length) {
	        var index = baseSortedIndex(array, value);
	        if (index < length && eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */
	    function sortedLastIndex(array, value) {
	      return baseSortedIndex(array, value, true);
	    }

	    /**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */
	    function sortedLastIndexBy(array, value, iteratee) {
	      return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), true);
	    }

	    /**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */
	    function sortedLastIndexOf(array, value) {
	      var length = array == null ? 0 : array.length;
	      if (length) {
	        var index = baseSortedIndex(array, value, true) - 1;
	        if (eq(array[index], value)) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */
	    function sortedUniq(array) {
	      return (array && array.length)
	        ? baseSortedUniq(array)
	        : [];
	    }

	    /**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */
	    function sortedUniqBy(array, iteratee) {
	      return (array && array.length)
	        ? baseSortedUniq(array, getIteratee(iteratee, 2))
	        : [];
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function tail(array) {
	      var length = array == null ? 0 : array.length;
	      return length ? baseSlice(array, 1, length) : [];
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      n = (guard || n === undefined$1) ? 1 : toInteger(n);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array == null ? 0 : array.length;
	      if (!length) {
	        return [];
	      }
	      n = (guard || n === undefined$1) ? 1 : toInteger(n);
	      n = length - n;
	      return baseSlice(array, n < 0 ? 0 : n, length);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */
	    function takeRightWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */
	    function takeWhile(array, predicate) {
	      return (array && array.length)
	        ? baseWhile(array, getIteratee(predicate, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2], [1, 2]);
	     * // => [2, 1]
	     */
	    var union = baseRest(function(arrays) {
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
	    });

	    /**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. Result values are chosen from the first
	     * array in which the value occurs. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    var unionBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined$1;
	      }
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee, 2));
	    });

	    /**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. Result values are chosen from
	     * the first array in which the value occurs. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var unionWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      comparator = typeof comparator == 'function' ? comparator : undefined$1;
	      return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each element
	     * is kept. The order of result values is determined by the order they occur
	     * in the array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */
	    function uniq(array) {
	      return (array && array.length) ? baseUniq(array) : [];
	    }

	    /**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The order of result values is determined by the
	     * order they occur in the array. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniqBy(array, iteratee) {
	      return (array && array.length) ? baseUniq(array, getIteratee(iteratee, 2)) : [];
	    }

	    /**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The order of result values is
	     * determined by the order they occur in the array.The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */
	    function uniqWith(array, comparator) {
	      comparator = typeof comparator == 'function' ? comparator : undefined$1;
	      return (array && array.length) ? baseUniq(array, undefined$1, comparator) : [];
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var length = 0;
	      array = arrayFilter(array, function(group) {
	        if (isArrayLikeObject(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      return baseTimes(length, function(index) {
	        return arrayMap(array, baseProperty(index));
	      });
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      return arrayMap(result, function(group) {
	        return apply(iteratee, undefined$1, group);
	      });
	    }

	    /**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.pull`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.xor
	     * @example
	     *
	     * _.without([2, 1, 2, 3], 1, 2);
	     * // => [3]
	     */
	    var without = baseRest(function(array, values) {
	      return isArrayLikeObject(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.without
	     * @example
	     *
	     * _.xor([2, 1], [2, 3]);
	     * // => [1, 3]
	     */
	    var xor = baseRest(function(arrays) {
	      return baseXor(arrayFilter(arrays, isArrayLikeObject));
	    });

	    /**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The order of result values is determined
	     * by the order they occur in the arrays. The iteratee is invoked with one
	     * argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2, 3.4]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */
	    var xorBy = baseRest(function(arrays) {
	      var iteratee = last(arrays);
	      if (isArrayLikeObject(iteratee)) {
	        iteratee = undefined$1;
	      }
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2));
	    });

	    /**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The order of result values is
	     * determined by the order they occur in the arrays. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */
	    var xorWith = baseRest(function(arrays) {
	      var comparator = last(arrays);
	      comparator = typeof comparator == 'function' ? comparator : undefined$1;
	      return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
	    });

	    /**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     */
	    var zip = baseRest(unzip);

	    /**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */
	    function zipObject(props, values) {
	      return baseZipObject(props || [], values || [], assignValue);
	    }

	    /**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */
	    function zipObjectDeep(props, values) {
	      return baseZipObject(props || [], values || [], baseSet);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */
	    var zipWith = baseRest(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 1 ? arrays[length - 1] : undefined$1;

	      iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined$1;
	      return unzipWith(arrays, iteratee);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor) {
	      interceptor(value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor) {
	      return interceptor(value);
	    }

	    /**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths to pick.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     */
	    var wrapperAt = flatRest(function(paths) {
	      var length = paths.length,
	          start = length ? paths[0] : 0,
	          value = this.__wrapped__,
	          interceptor = function(object) { return baseAt(object, paths); };

	      if (length > 1 || this.__actions__.length ||
	          !(value instanceof LazyWrapper) || !isIndex(start)) {
	        return this.thru(interceptor);
	      }
	      value = value.slice(start, +start + (length ? 1 : 0));
	      value.__actions__.push({
	        'func': thru,
	        'args': [interceptor],
	        'thisArg': undefined$1
	      });
	      return new LodashWrapper(value, this.__chain__).thru(function(array) {
	        if (length && !array.length) {
	          array.push(undefined$1);
	        }
	        return array;
	      });
	    });

	    /**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */
	    function wrapperNext() {
	      if (this.__values__ === undefined$1) {
	        this.__values__ = toArray(this.value());
	      }
	      var done = this.__index__ >= this.__values__.length,
	          value = done ? undefined$1 : this.__values__[this.__index__++];

	      return { 'done': done, 'value': value };
	    }

	    /**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */
	    function wrapperToIterator() {
	      return this;
	    }

	    /**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        clone.__index__ = 0;
	        clone.__values__ = undefined$1;
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	      if (value instanceof LazyWrapper) {
	        var wrapped = value;
	        if (this.__actions__.length) {
	          wrapped = new LazyWrapper(this);
	        }
	        wrapped = wrapped.reverse();
	        wrapped.__actions__.push({
	          'func': thru,
	          'args': [reverse],
	          'thisArg': undefined$1
	        });
	        return new LodashWrapper(wrapped, this.__chain__);
	      }
	      return this.thru(reverse);
	    }

	    /**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the number of times the key was returned by `iteratee`. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        ++result[key];
	      } else {
	        baseAssignValue(result, key, 1);
	      }
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, guard) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined$1;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     *
	     * // Combining several predicates using `_.overEvery` or `_.overSome`.
	     * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
	     * // => objects for ['fred', 'barney']
	     */
	    function filter(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, getIteratee(predicate, 3));
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */
	    var find = createFind(findIndex);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param {number} [fromIndex=collection.length-1] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(findLastIndex);

	    /**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMap(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), 1);
	    }

	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */
	    function flatMapDeep(collection, iteratee) {
	      return baseFlatten(map(collection, iteratee), INFINITY);
	    }

	    /**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */
	    function flatMapDepth(collection, iteratee, depth) {
	      depth = depth === undefined$1 ? 1 : toInteger(depth);
	      return baseFlatten(map(collection, iteratee), depth);
	    }

	    /**
	     * Iterates over elements of `collection` and invokes `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEachRight
	     * @example
	     *
	     * _.forEach([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */
	    function forEach(collection, iteratee) {
	      var func = isArray(collection) ? arrayEach : baseEach;
	      return func(collection, getIteratee(iteratee, 3));
	    }

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */
	    function forEachRight(collection, iteratee) {
	      var func = isArray(collection) ? arrayEachRight : baseEachRight;
	      return func(collection, getIteratee(iteratee, 3));
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The order of grouped values
	     * is determined by the order they occur in `collection`. The corresponding
	     * value of each key is an array of elements responsible for generating the
	     * key. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        baseAssignValue(result, key, [value]);
	      }
	    });

	    /**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */
	    function includes(collection, value, fromIndex, guard) {
	      collection = isArrayLike(collection) ? collection : values(collection);
	      fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

	      var length = collection.length;
	      if (fromIndex < 0) {
	        fromIndex = nativeMax(length + fromIndex, 0);
	      }
	      return isString(collection)
	        ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	        : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	    }

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `path` is a function, it's invoked
	     * for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invokeMap = baseRest(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */
	    var keyBy = createAggregator(function(result, value, key) {
	      baseAssignValue(result, key, value);
	    });

	    /**
	     * Creates an array of values by running each element in `collection` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      return func(collection, getIteratee(iteratee, 3));
	    }

	    /**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */
	    function orderBy(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      orders = guard ? undefined$1 : orders;
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseOrderBy(collection, iteratees, orders);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */
	    function reduce(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduce : baseReduce,
	          initAccum = arguments.length < 3;

	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach);
	    }

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    function reduceRight(collection, iteratee, accumulator) {
	      var func = isArray(collection) ? arrayReduceRight : baseReduce,
	          initAccum = arguments.length < 3;

	      return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight);
	    }

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */
	    function reject(collection, predicate) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      return func(collection, negate(getIteratee(predicate, 3)));
	    }

	    /**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */
	    function sample(collection) {
	      var func = isArray(collection) ? arraySample : baseSample;
	      return func(collection);
	    }

	    /**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */
	    function sampleSize(collection, n, guard) {
	      if ((guard ? isIterateeCall(collection, n, guard) : n === undefined$1)) {
	        n = 1;
	      } else {
	        n = toInteger(n);
	      }
	      var func = isArray(collection) ? arraySampleSize : baseSampleSize;
	      return func(collection, n);
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      var func = isArray(collection) ? arrayShuffle : baseShuffle;
	      return func(collection);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      if (collection == null) {
	        return 0;
	      }
	      if (isArrayLike(collection)) {
	        return isString(collection) ? stringSize(collection) : collection.length;
	      }
	      var tag = getTag(collection);
	      if (tag == mapTag || tag == setTag) {
	        return collection.size;
	      }
	      return baseKeys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, guard) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (guard && isIterateeCall(collection, predicate, guard)) {
	        predicate = undefined$1;
	      }
	      return func(collection, getIteratee(predicate, 3));
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection thru each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 30 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, [function(o) { return o.user; }]);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
	     */
	    var sortBy = baseRest(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var length = iteratees.length;
	      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	        iteratees = [];
	      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	        iteratees = [iteratees[0]];
	      }
	      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the timestamp of the number of milliseconds that have elapsed since
	     * the Unix epoch (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Date
	     * @returns {number} Returns the timestamp.
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => Logs the number of milliseconds it took for the deferred invocation.
	     */
	    var now = ctxNow || function() {
	      return root.Date.now();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      n = guard ? undefined$1 : n;
	      n = (func && n == null) ? func.length : n;
	      return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      n = toInteger(n);
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = undefined$1;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and `partials` prepended to the arguments it receives.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * function greet(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * }
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = baseRest(function(func, thisArg, partials) {
	      var bitmask = WRAP_BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bind));
	        bitmask |= WRAP_PARTIAL_FLAG;
	      }
	      return createWrap(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` with `partials`
	     * prepended to the arguments it receives.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = baseRest(function(object, key, partials) {
	      var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, getHolder(bindKey));
	        bitmask |= WRAP_PARTIAL_FLAG;
	      }
	      return createWrap(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    function curry(func, arity, guard) {
	      arity = guard ? undefined$1 : arity;
	      var result = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
	      result.placeholder = curry.placeholder;
	      return result;
	    }

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    function curryRight(func, arity, guard) {
	      arity = guard ? undefined$1 : arity;
	      var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
	      result.placeholder = curryRight.placeholder;
	      return result;
	    