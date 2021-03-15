// TODO 雑コメント削除
// 入力エリアタイプ定義
export type ItemTypes = {
  // ID
  id: number;
  // アイテム名
  name: string;
  // 初期数量
  quantity: number;
  // 単位
  until: string;
  // 備考
  memo: string;
  // 画像URL　※（予定）
  image: string;
  // 買う必要性の是非
  isNeeds: boolean;
}
