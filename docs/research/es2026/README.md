# ES2026 対応 調査メモ

ES2026対応 Meta Issue: https://github.com/js-primer/js-primer/issues/1869

[TC39 finished-proposals](https://github.com/tc39/proposals/blob/main/finished-proposals.md) のうち Expected Publication Year 2026 のProposalについて、js-primerで扱うかどうかを検討するための調査メモを置く。

## Proposal一覧

| Proposal | 調査メモ | ステータス | コスト(Point) |
|---|---|---|---|
| [Error.isError](https://github.com/tc39/proposal-is-error) | [error-is-error.md](./error-is-error.md) | 対応する | 1-2 |
| [Upsert (`Map.prototype.getOrInsert` / `getOrInsertComputed`)](https://github.com/tc39/proposal-upsert) | [upsert.md](./upsert.md) | 対応する | 2-3 (→3) |
| [JSON.parse source text access](https://github.com/tc39/proposal-json-parse-with-source) | [json-parse-with-source.md](./json-parse-with-source.md) | 対応する(B0 or B) | 1 or 2 |
| [Iterator Sequencing](https://github.com/tc39/proposal-iterator-sequencing) | [iterator-sequencing.md](./iterator-sequencing.md) | 調査中 | 2 |
| [Uint8Array to/from Base64](https://github.com/tc39/proposal-arraybuffer-base64) | [uint8array-base64.md](./uint8array-base64.md) | 要検討(A推奨) | 0 or 1 |
| [Math.sumPrecise](https://github.com/tc39/proposal-math-sum) | [math-sum-precise.md](./math-sum-precise.md) | 要検討 | 0 or 1-2 |
| [Array.fromAsync](https://github.com/tc39/proposal-array-from-async) | [array-from-async.md](./array-from-async.md) | 要検討 | 0 / 2-3 / 5 |

コストのPointは [CONTRIBUTING_EXPENSE.md](../../../CONTRIBUTING_EXPENSE.md) の基準に基づく見積。
