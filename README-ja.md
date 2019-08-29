# @ztrehagem/daty

A reactive-oriented tiny date library.

## インストール

```
npm install @ztrehagem/daty
```

## 機能

- タイムゾーンを持たず、それぞれ独立した年・月・日パラメータ、または時・分・秒・ミリ秒パラメータを持つことができる。
- それぞれのパラメータは、未設定状態を表すための`NaN`を許容している。
- 存在しない日付を設定した場合は自動的に補正される。
- 日付の比較や単純な計算が可能。
- classベースで実装されており、継承することで`toString()`の実装やファクトリーメソッドの実装等の機能拡張が可能。
- `DatyCore`, `Daty`, `DatyExtend` または `TimyCore`, `Timy`, `TimyExtend` の3段階で機能実装されており、応用範囲を選ぶことができる。

## 例

### 存在しない日付を設定する

```ts
const daty = new DatyCore(2000, 0, 1) // 2000年1月1日
daty.date = 32 // 2000年2月1日
```
```ts
const daty = new DatyCore(2000, 0, 1) // 2000年1月1日
daty.date = 0 // 1999年12月31日
```
```ts
const daty = new DatyCore(2000, 0, 1) // 2000年1月1日
daty.date = -1 // 1999年12月30日
```

### 日付をずらす

```ts
const daty = new DatyCore(2000, 0, 1) // 2000年1月1日
daty.year += 10 // 2010年1月1日
daty.month += 12 // 2011年1月1日
daty.date += 59 // 2011年3月1日
```

```ts
const daty = new DatyCore(2000, 0, 1) // 2000年1月1日
daty.year -= 10 // 1990年1月1日
daty.month -= 12 // 1989年1月1日
daty.date -= 61 // 1989年11月1日
```

## API

### class DatyCore

年月日保持と基本操作機能を持つクラス。

#### Constructor

- new DatyCore(year?: number, month?: number, date?: number)

  年月日の初期値を指定。指定されない場合はNaN。

- new DatyCore(jsDate: Date)

  Dateオブジェクトの年月日（ローカル時間）を初期値とする

#### Properties

- `year: number`

  年の値

- `hasYear: boolean` (readonly)

  isNaN(year) と等しい

- `month: number`

  月の値

- `hasMonth: boolean` (readonly)

  isNaN(month) と等しい

- `date: number`

  日の値

- `hasDate: boolean` (readonly)

  isNaN(date) と等しい

- `endOfMonth: number` (readonly)

  月の末日。年月どちらかがNaNの場合は31。

- `jsDate: Date`

  DatyCore内部のDateオブジェクト。常に同じインスタンスとなる。Dateオブジェクトを代入した場合は、その年月日になるよう設定する（ローカル時間）。

#### Methods

- `clearYear(): this`

  year = NaN と等しい

- `clearMonth(): this`

  month = NaN と等しい

- `clearDate(): this`

  date = NaN と等しい

### class Daty extends DatyCore

DatyCoreを継承し、汎用的な機能を実装したクラス。

#### Constructor

- new Daty(year?: number, month?: number, date?: number)
- new Daty(jsDate: Date)


#### Properties

- `day: number`

  曜日を表す数字。0始まりで、0は日曜日を表す。Date.prototype.getDay()に基づく。

- `isFilled: boolean` (readonly)

  年月日パラメータすべてがNaNでないときtrue。

#### Methods

- `valueOf(): number`

  日付比較用。Date.prototype.valueOf()に基づく。

- `equals(daty: DatyCore): boolean`

  年月日パラメータが全て等しい場合はtrue。

- `after(amount: number, unit: 'year' | 'month' | 'date'): this`

  unitで指定したパラメータに対してamountだけ加算する。

- `before(amount: number, unit: 'year' | 'month' | 'date'): this`

  unitで指定したパラメータに対してamountだけ減算する。

- `set(amount: number, unit: 'year' | 'month' | 'date'): this`

  unitで指定したパラメータをamountに設定する。

- `clear(): this`

  年月日パラメータを全てNaNにする。

- `today(): this`

  年月日パラメータそれぞれを new Date() に基いて設定する。（ローカル時間）
