/**
 * This file is part of Unit Converter
 *
 * (c) Bas Peeters <bas@peete.rs>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import {DerivedUnit} from "../../DerivedUnit";
import {Unit} from "../../Unit";
import {Kilogram} from "./Kilogram";

export class Hectogram extends DerivedUnit {
    public baseUnit = new Kilogram(this.value * Math.pow(10, -6));

    protected baseUnitConverter = {
        Kilogram: (): Unit => this.baseUnit,
    };
}