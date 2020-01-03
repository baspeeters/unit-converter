/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {BaseUnit} from "../../BaseUnit";
import {Pound} from "../US/Avoirdupois/Pound";
import {Attogram} from "./Attogram";
import {Centigram} from "./Centigram";
import {Decagram} from "./Decagram";
import {Decigram} from "./Decigram";
import {Exagram} from "./Exagram";
import {Femtogram} from "./Femtogram";
import {Gigagram} from "./Gigagram";
import {Gram} from "./Gram";
import {Hectogram} from "./Hectogram";
import {Megagram} from "./Megagram";
import {Microgram} from "./Microgram";
import {Milligram} from "./Milligram";
import {Nanogram} from "./Nanogram";
import {Petagram} from "./Petagram";
import {Picogram} from "./Picogram";
import {Teragram} from "./Teragram";
import {Yoctogram} from "./Yoctogram";
import {Yottagram} from "./Yottagram";
import {Zeptogram} from "./Zeptogram";
import {Zettagram} from "./Zettagram";

export class Kilogram extends BaseUnit {
    public derivedUnits = {
        Yoctogram: () => new Yoctogram(this.value * Math.pow(10, 27)),
        Zeptogram: () => new Zeptogram(this.value * Math.pow(10, 24)),
        // tslint:disable-next-line:object-literal-sort-keys
        Attogram: () => new Attogram(this.value * Math.pow(10, 21)),
        Femtogram: () => new Femtogram(this.value * Math.pow(10, 18)),
        Picogram: () => new Picogram(this.value * Math.pow(10, 15)),
        Nanogram: () => new Nanogram(this.value * Math.pow(10, 12)),
        Microgram: () => new Microgram(this.value * Math.pow(10, 9)),
        Milligram: () => new Milligram(this.value * Math.pow(10, 6)),
        Centigram: () => new Centigram(this.value * Math.pow(10, 5)),
        Decigram: () => new Decigram(this.value * Math.pow(10, 4)),
        Gram: () => new Gram(this.value * Math.pow(10, 3)),
        Decagram: () => new Decagram(this.value * Math.pow(10, 2)),
        Hectogram: () => new Hectogram(this.value * Math.pow(10, 1)),
        Megagram: () => new Megagram(this.value * Math.pow(10, -3)),
        Gigagram: () => new Gigagram(this.value * Math.pow(10, -6)),
        Teragram: () => new Teragram(this.value * Math.pow(10, -9)),
        Petagram: () => new Petagram(this.value * Math.pow(10, -12)),
        Exagram: () => new Exagram(this.value * Math.pow(10, -15)),
        Zettagram: () => new Zettagram(this.value * Math.pow(10, -18)),
        Yottagram: () => new Yottagram(this.value * Math.pow(10, -21)),
    };

    protected converters = {
        Pound: (): Pound => new Pound(this.value / 0.45359237),
    };
}
