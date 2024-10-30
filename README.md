# Better Give
## 使い方
```
/scriptevent bettergive:give <itemName: Item> [amount: int] [keepOnDeath: Boolean] [itemLock: itemLockMode]
```
### 引数
```
<itemName: Item>
```  
与えるアイテムのIDを指定する。
名前空間を省くとminecraftになる。
例: `minecraft:dirt`, `minecraft:stick`, `minecraft:portal`, `command_block`など

```
[amount: int]
```
与えるアイテムの個数を1から255の整数で指定する。  
デフォルトは`1`。与えるアイテムの最大スタック数を超えることはない。

```
[keepOnDeath: Boolean]
```
死んだときにアイテムをドロップするかを指定する。  
デフォルトは`false`。  
`true`にすると保持、`false`にするとドロップする。

```
[itemLock: itemLockMode]
```
アイテムロックの設定。  
`none` - 設定しない。  
`inventory` - ドロップ、クラフトを制限する。  
`slot` - スロットに固定する。
